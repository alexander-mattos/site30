import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { z } from "zod";

import { prisma } from "@/lib/prisma";
import { authConfig } from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
    ...authConfig,

    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 dias
    },

    providers: [
        Credentials({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Senha", type: "password" },
            },
            async authorize(credentials) {
                const parsed = z
                    .object({
                        email: z.email(),
                        password: z.string().min(6),
                    })
                    .safeParse(credentials);

                if (!parsed.success) return null;

                const email = parsed.data.email.toLowerCase().trim();
                const password = parsed.data.password;

                const user = await prisma.user.findUnique({
                    where: { email },
                });

                if (!user) return null;

                const valid = await bcrypt.compare(password, user.passwordHash);
                if (!valid) return null;

                // 🔑 role PRECISA vir aqui
                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    role: user.role,
                } as any;
            },
        }),
    ],
});
