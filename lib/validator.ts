import { z } from 'zod'
import { formatNumberWithDecimal } from './utils';

const currency = z.string().refine((value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))))
export const insertProductSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    slug: z.string().min(3, 'Slug must be at least 3 characters'),
    category: z.string().min(3, 'Category must be at least 3 characters'),
    brand: z.string().min(3, 'Brand must be at least 3 characters'),
    description: z.string().min(3, 'Description must be at least 3 characters'),
    stock: z.coerce.number(),
    numReviews: z.coerce.number(),
    images: z.array(z.string()).min(1, 'Product must be at least 1 image'),
    isFeatured: z.boolean(),
    banner: z.string().nullable(),
    colors: z.array(z.string()).min(1, 'Product must be at least 1 color'),
    sizes: z.array(z.string()).min(1, 'Product must be at least 1 size'),
    price: currency  
})