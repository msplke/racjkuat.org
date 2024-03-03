# RacJkuat.org

> The Rotaract Club of JKUAT (Rac Jkuat in short) is part of a global network of [Rotaract clubs](https://www.rotary.org/en/get-involved/rotaract-clubs) that bring together people ages 18 and older to exchange ideas, develop professional and leadership skills, and have fun through service.
>
> This project is aimed at building a Community Management System for Rac Jkuat that will showcase what the club is about, facilitate member management, act as an official communication channel, and improve member engagement.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Tools Used](#tools-used)
- [Features](#features-wip)
- [Quickstart](#quickstart)
- [Project Status](#project-status)
- [Acknowledgements](#acknowledgements)

## Technologies Used

- React 18 & Next.js 14
- Shadcn UI for a beautiful, modern, accessible UI
- Tailwind CSS for styling
- Clerk for authentication
- Tanstack React Query for data fetching and mutation
- Drizzle ORM for database queries and mutations
- tRPC for server-side logic
- Zod for schema declarations and validations

## Tools Used

- Git & GitHub for version control and collaboration
- TypeScript, ESLint and Prettier for typesafe code and best practices
- GitHub Actions for automated `format`, `lint` and `typecheck` CI steps
- Renovate for automated dependency updates
- UploadThing to handle file uploads
- Vercel for Deployment

## Features (WIP)

1. Informative Club Website:

   - Provide a comprehensive overview of what the club is all about; highlight the mission, vision, and values of the club.
   - Display of club activities, events, and achievements through multimedia content.
   - Highlight the impact created through various service projects and events.

2. Blog Platform:

   - A blog section for official club announcements, updates, and communication.
   - Members can contribute to the blog, sharing their experiences, insights, and project highlights.

3. Member Profiles:

   - User profiles for each member, providing a platform for personal and professional branding.
   - Members can showcase their skills, achievements, and experiences, enhancing visibility and discoverability to potential employers and clients.
   - Privacy controls allowing members to manage the visibility of their profiles.

4. User-Generated Content:

   - Members can create and publish posts, fostering a sense of community and engagement.
   - Posts can include images, videos, and other multimedia elements to enrich content.
   - Moderation features to ensure the content aligns with the club's values and guidelines.

5. Donation Platform:

   - Integration of a secure donation system for individuals or organizations interested in supporting the club financially.
   - Transparent reporting on the use of donations to build trust among contributors.
   - Options for one-time and recurring donations.

6. User-Friendly Design:

   - Develop an intuitive and visually appealing website layout.
   - Ensure a seamless user experience for members and visitors.
   - Implement responsive design for compatibility across various devices.

## Quickstart

> **NOTE:**
> This project uses [pnpm](https://pnpm.io) as the package manager. You can install it by following the instructions [here](https://pnpm.io/installation).

To run it locally, follow the steps below:

1. Clone the repository and install the dependencies:

   ```bash
   # Clone repository
   git clone git@github.com:msplke/racjkuat.org.git

   # Install dependencies
   pnpm i
   ```

2. Copy `.env.example` to `.env` and update the variables accordingly.

   ```bash
   cp .env.example .env
   ```

3. Sync the Drizzle schema with your database

   ```bash
   pnpm db:push
   ```

4. Start the development server:

   ```bash
   pnpm dev
   ```

## Project Status

Project is: _in progress_.

## Acknowledgements

- This is a [T3 Stack](https://create.t3.gg) project bootstrapped with `create-t3-app`.
