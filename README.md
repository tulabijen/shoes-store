This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


https://www.youtube.com/watch?v=HAVCPPXDLJc&list=PLbDH2D6bQCl1HoXZOQg39Ux9st0e9Ka0W&index=3
19:51


D:\NextJS\shoes-store>npx prisma generate
Environment variables loaded from .env
Prisma schema loaded from prisma\schema.prisma

✔ Generated Prisma Client (v6.5.0) to .\node_modules\@prisma\client in 81ms

Start by importing your Prisma Client (See: https://pris.ly/d/importing-client)

Tip: Curious about the SQL queries Prisma ORM generates? Optimize helps you enhance your visibility: https://pris.ly/tip-2-optimize


D:\NextJS\shoes-store>npx prisma migrate dev --name init
Environment variables loaded from .env
Prisma schema loaded from prisma\schema.prisma
Datasource "db": PostgreSQL database "neondb", schema "public" at "ep-polished-frog-a49a9vsd-pooler.us-east-1.aws.neon.tech"

Applying migration `20250405064342_init`

The following migration(s) have been created and applied from new schema changes:

migrations/
  └─ 20250405064342_init/
    └─ migration.sql

Your database is now in sync with your schema.

✔ Generated Prisma Client (v6.5.0) to .\node_modules\@prisma\client in 98ms



D:\NextJS\shoes-store>npx tsx ./db/seed
Need to install the following packages:
tsx@4.19.3
Ok to proceed? (y) y

Database seeded successfully!

D:\NextJS\shoes-store>


npx prisma studio


time 33:30