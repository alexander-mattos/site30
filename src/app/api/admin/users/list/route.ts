import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"

const prisma = new PrismaClient()

export async function GET(req: Request) {
    const session = await auth()

    // @ts-ignore
    if (session?.user?.role !== 'ADMIN') {
        return new NextResponse("Unauthorized", { status: 401 })
    }

    const users = await prisma.user.findMany({
        where: { role: 'CLIENT' },
        select: { id: true, name: true, email: true },
    })

    return NextResponse.json(users)
}
