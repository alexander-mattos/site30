import { prisma } from "@/lib/prisma"
import bcrypt from 'bcryptjs'


async function main() {
    const passwordHash = await bcrypt.hash('Pregabalin@07', 10)

    const admin = await prisma.user.upsert({
        where: { email: 'alex@integroseguros.com.br' },
        update: {},
        create: {
            email: 'alex@integroseguros.com.br',
            name: 'Alex MMattos',
            passwordHash,
            role: 'ADMIN',
        },
    })

    console.log({ admin })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
