import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    await prisma.user.deleteMany();
    await prisma.userPreference.deleteMany();
    const user = await prisma.user.create({
        data: {
            firstName: "bob",
            lastName: "bimbo",
            email: "bob@bob.com",
            age: 22,
            userPreference: {
                create: {
                    emailUpdates: true
                }
            },
        },
        select: {
            firstName: true,
            lastName: true,
            userPreference: {
                select: {
                    id: true
                }
            }
        }
    })

    console.log(user);
}

main()
.catch(error => console.error(error))
.finally(async () => await prisma.$disconnect())