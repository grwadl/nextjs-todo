import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const Prisma: PrismaClient = globalForPrisma.prisma || new PrismaClient();

export { Prisma };
