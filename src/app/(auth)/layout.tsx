import { redirect } from "next/navigation";
import { requireAuth } from "@/lib/auth-guards";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await requireAuth();
  

  if (!session) {
    redirect("/login");
  }

  return <>{children}</>;
}
