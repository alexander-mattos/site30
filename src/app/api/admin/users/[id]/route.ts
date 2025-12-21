import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import bcrypt from "bcryptjs"

// GET: Fetch a single user
export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const session = await auth()

    if (!session || !session.user || session.user.role !== "ADMIN") {
        return new NextResponse("Unauthorized", { status: 401 })
    }

    const { id } = await params

    try {
        const user = await prisma.user.findUnique({
            where: { id },
        })

        if (!user) {
            return new NextResponse("User not found", { status: 404 })
        }

        // Remove password from response
        const { passwordHash, ...userWithoutPassword } = user

        return NextResponse.json(userWithoutPassword)
    } catch (error) {
        console.error("Error fetching user:", error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}

// PUT: Update a user
export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const session = await auth()

    if (!session || !session.user || session.user.role !== "ADMIN") {
        return new NextResponse("Unauthorized", { status: 401 })
    }

    const { id } = await params

    try {
        const body = await request.json()
        const { name, email, role, passwordHash } = body

        const updateData: any = {
            name,
            email,
            role,
        }

        // Only update password if provided
        if (passwordHash) {
            const hashedPassword = await bcrypt.hash(passwordHash, 10)
            updateData.password = hashedPassword
        }

        const user = await prisma.user.update({
            where: { id },
            data: updateData,
        })

        const { passwordHash: _, ...userWithoutPassword } = user

        return NextResponse.json(userWithoutPassword)
    } catch (error) {
        console.error("Error updating user:", error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}

// DELETE: Delete a user
export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const session = await auth()

    if (!session || !session.user || session.user.role !== "ADMIN") {
        return new NextResponse("Unauthorized", { status: 401 })
    }

    const { id } = await params

    try {
        await prisma.user.delete({
            where: { id },
        })

        return new NextResponse(null, { status: 204 })
    } catch (error) {
        console.error("Error deleting user:", error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}
