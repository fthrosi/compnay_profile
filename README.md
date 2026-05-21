# Dynamic Company Profile Website
A full-stack dynamic company profile website built for a real client, allowing content updates without redeploying the frontend.
## My Role
- Developed Fullstack using Next.js and MySQL
- Designed database structure for dynamic content management
- Helped deliver a responsive production-ready website
## Architecture Overview
The application uses Next.js App Router architecture with integrated frontend rendering and backend API handling. Server-side logic communicates with MySQL through Prisma ORM for dynamic content management and database operations. The application is deployed in a production VPS environment using Docker, PM2, and Nginx reverse proxy configuration.
## Notes
This project was developed for a real client. Some credentials, environment variables, and sensitive data are excluded from the repository.
## Live Demo
Production: 
## Tech Stack
### Fullstack
- Next.js
- TypeScript
- Tailwind CSS
- Prisma ORM
- MySQL
- Cloudinary
## Database Management
- Prisma ORM for database access and schema management
- Prisma Migration for database versioning
- Seeder scripts for initial data population
### DevOps & Services
- Docker
- VPS Deployment
- Nginx
- PM2
## Features
- Dynamic company profile content management
- CRUD for homepage/content sections
- Responsive landing page
- Admin-side content management
- Production deployment
## Production Features
- Dynamic content updates without redeployment
- Production deployment using Docker and Nginx
- Environment-based configuration
- Responsive multi-device support
- Structured backend architecture
## Project Structure
### Project Structure Front-end

```bash
src/
├── animations/      # Animation assets
├── app/             # Next.js App Router pages
├── components/      # Reusable UI components
├── const/           # Static constants
├── icons/           # SVG/icon assets
├── libs/            # Utility libraries & helpers
├── schema/          # Validation schemas
├── store/           # Global state management
├── types/           # TypeScript interfaces/types
├── middleware.ts    # Route middleware
└── seed.ts          # Database seeder
```

```bash
prisma/
├── migrations/      # Prisma migration history
└── schema.prisma    # Database schema definition
```
## Installation
### Fullstack
```bash
npm install
npx prisma generate
```
#### Create .env File
```bash
DATABASE_URL=
NEXTAUTH_SECRET=
NODE_ENV=
RESEND_API_KEY=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```
#### Run Prisma Migration
```bash
npx prisma migrate dev
```
#### Run Seeder
```bash
npx prisma db seed
```
#### Start Backend
```bash
npm run dev
```
## License
This project is intended for portfolio and educational purposes only.
