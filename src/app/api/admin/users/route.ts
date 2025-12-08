import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"

const prisma = new PrismaClient()

export async function POST(req: Request) {
    const session = await auth()

    // @ts-ignore
    if (session?.user?.role !== 'ADMIN') {
        return new NextResponse("Unauthorized", { status: 401 })
    }

    try {
        const body = await req.json()
        const { name, email, password, role } = body

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role,
            },
        })

        return NextResponse.json(user)
    } catch (error) {
        console.error('USER_CREATE_ERROR', error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}
