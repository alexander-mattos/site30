import { PrismaClient } from "@prisma/client"
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
        const { userId, policyNumber, type, startDate, endDate, premium, status } = body

        const policy = await prisma.policy.create({
            data: {
                userId: parseInt(userId),
                policyNumber,
                type,
                startDate: new Date(startDate),
                endDate: new Date(endDate),
                premium: parseFloat(premium),
                status,
            },
        })

        return NextResponse.json(policy)
    } catch (error) {
        console.error('POLICY_CREATE_ERROR', error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}
