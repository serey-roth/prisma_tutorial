import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.create({
        data: {
            firstName: "bob",
            lastName: "boop"
        }
    });

    console.log(user);
}

main()
.catch(error => console.error(error))
.finally(async () => await prisma.$disconnect())