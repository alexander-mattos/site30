import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"

export async function GET(req: Request) {
    const session = await auth()

    if (session?.user?.role !== 'ADMIN') {
        return new NextResponse("Unauthorized", { status: 401 })
    }

    const users = await prisma.user.findMany({
        where: { role: 'CLIENT' },
        select: { id: true, name: true, email: true },
    })

    return NextResponse.json(users)
}
