import type { NextAuthConfig } from "next-auth"

export const authConfig = {
    pages: {
        signIn: '/client/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user
            const isOnClientArea = nextUrl.pathname.startsWith('/client')
            const isOnAdminArea = nextUrl.pathname.startsWith('/admin')
            const isOnLoginPage = nextUrl.pathname.startsWith('/client/login')

            if (isOnAdminArea) {
                if (isLoggedIn && (auth?.user as any)?.role === 'ADMIN') return true
                return false // Redirect unauthenticated or non-admin users
            }

            if (isOnClientArea) {
                if (isOnLoginPage) {
                    if (isLoggedIn) {
                        return Response.redirect(new URL('/client/dashboard', nextUrl))
                    }
                    return true // Allow access to login page
                }

                if (isLoggedIn) return true
                return false // Redirect unauthenticated users to login page
            }
            return true
        },
        async session({ session, token }) {
            if (token.sub && session.user) {
                session.user.id = token.sub
                session.user.role = token.role as any
            }
            return session
        },
        async jwt({ token, user }) {
            if (user && user.id) {
                token.sub = user.id.toString()
                token.role = user.role
            }
            return token
        },
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig
