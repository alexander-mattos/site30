import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export type AppRole = "ADMIN" | "CLIENT";

export async function requireAuth() {
    const session = await auth();

    if (!session?.user) {
        redirect("/login");
    }

    const role = ((session.user as any).role ?? "CLIENT") as AppRole;

    return { session, role };
}

export async function requireRole(role: AppRole) {
    const { session, role: userRole } = await requireAuth();

    if (userRole !== role) {
        redirect("/403");
    }

    return { session, role: userRole };
}

export async function requireAnyRole(roles: AppRole[]) {
    const { session, role } = await requireAuth();

    if (!roles.includes(role)) {
        redirect("/403");
    }

    return { session, role };
}
