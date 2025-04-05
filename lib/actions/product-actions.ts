'use server';
import { notFound } from "next/navigation";

import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { prisma } from "@/db/prisma"

export async function getLatestProducts() {
    const data = await prisma.product.findMany(
        {
            take: LATEST_PRODUCTS_LIMIT,
            orderBy: {createdAt: 'desc'}
        }
    );
    if (!data) {
        return notFound();
    }
    
    return convertToPlainObject(data);
}

// Get single product by it's slug
export async function getProductBySlug(slug: string) {
    return await prisma.product.findFirst({ where: {slug: slug} })
}