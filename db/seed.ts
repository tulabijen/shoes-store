//import { PrismaClient } from "@prisma/client"
import { prisma } from "@/db/prisma"
import sampleData from "./sample-data";

async function main() {
    //const prisma = new PrismaClient();
    await prisma.product.deleteMany()

    await prisma.product.createMany({data: sampleData.products})
  
}

main()