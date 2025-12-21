import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardGate() {
    const session = await auth();
    if (!session?.user) redirect("/login");

    if (session.user.role === "ADMIN") redirect("/admin/dashboard");
    redirect("/cliente/dashboard");
}
