import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"
import { z } from "zod"
import { authConfig } from "./auth.config"

const prisma = new PrismaClient()

export const { handlers, signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials)

                if (!parsedCredentials.success) return null

                const { email, password } = parsedCredentials.data
                const user = await prisma.user.findUnique({ where: { email } })

                if (!user) return null

                const passwordsMatch = await bcrypt.compare(password, user.password)

                if (passwordsMatch) {
                    return {
                        id: user.id.toString(),
                        email: user.email,
                        name: user.name,
                    }
                }

                return null
            },
        }),
    ],
})
