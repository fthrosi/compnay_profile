import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding...");

  // 1. Seed Roles - Hapus dulu, baru insert banyak sekaligus
  await prisma.role.deleteMany({});

  const roles = await prisma.role.createMany({
    data: [
      { id: 1, name: "Admin" },
      { id: 2, name: "Chief Executive Officer" },
      { id: 3, name: "Development Manager" },
      { id: 4, name: "Operational Manager" },
      { id: 5, name: "Full Stack Developer" },
    ],
    skipDuplicates: true, // Skip jika sudah ada
  });

  console.log(`${roles.count} roles seeded`);

  // 2. Seed Portfolio Categories
  await prisma.category_Portfolio.deleteMany({});

  const portfolioCategories = await prisma.category_Portfolio.createMany({
    data: [
      { id: 1, name: "Web Design & Development" },
      { id: 2, name: "Mobile App" },
      { id: 3, name: "UX Research & Consulting" },
      { id: 4, name: "Brand Identity Design" },
      { id: 5, name: "SEO & Digital Marketing" },
    ],
    skipDuplicates: true,
  });

  console.log(`${portfolioCategories.count} portfolio categories seeded`);

  // 3. Seed Article Categories
  await prisma.category_Article.deleteMany({});

  const articleCategories = await prisma.category_Article.createMany({
    data: [
      { id: 1, name: "Technology" },
      { id: 2, name: "AI & Data" },
      { id: 3, name: "Design" },
      { id: 4, name: "Branding" },
      { id: 5, name: "Development" },
    ],
    skipDuplicates: true,
  });

  console.log(`${articleCategories.count} article categories seeded`);

  // 4. Seed Users (dengan password hash)
  await prisma.user.deleteMany({});

  const hashedPassword = await bcrypt.hash("password123", 10);

  const users = await prisma.user.createMany({
    data: [
      {
        name: "Admin User",
        email: "admin@talentadigital.com",
        password: hashedPassword,
        role_id: 1,
      },
    ],
    skipDuplicates: true,
  });

  console.log(`${users.count} users seeded`);

  await prisma.techStack.deleteMany({});

  const techStack = await prisma.techStack.createMany({
    data: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "TypeScript" },
      { id: 4, name: "Tailwind CSS" },
      { id: 5, name: "Node.js" },
      { id: 6, name: "Express" },
      { id: 7, name: "MongoDB" },
      { id: 8, name: "PostgreSQL" },
      { id: 9, name: "Firebase" },
      { id: 10, name: "AWS" },
      { id: 11, name: "Docker" },
      { id: 12, name: "GraphQL" },
    ],
    skipDuplicates: true,
  });

  console.log("Seeding finished! ✅");
}

main()
  .catch((e) => {
    console.error("Error seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
