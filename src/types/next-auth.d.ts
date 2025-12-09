import { Role } from "@prisma/client"
import { DefaultSession } from "next-auth"

declare module "next-auth" {
    /**
     * Extends the built-in session.user type to include the role property
     */
    interface Session {
        user: {
            id: string
            role: Role
        } & DefaultSession["user"]
    }

    /**
     * Extends the built-in user type to include the role property
     */
    interface User {
        role: Role
    }
}

declare module "next-auth/jwt" {
    /**
     * Extends the built-in JWT token type to include the role property
     */
    interface JWT {
        role: Role
    }
}
