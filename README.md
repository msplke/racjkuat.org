# RacJkuat.org

> The Rotaract Club of JKUAT (Rac Jkuat in short) is part of a global network of [Rotaract clubs](https://www.rotary.org/en/get-involved/rotaract-clubs) that bring together people ages 18 and older to exchange ideas, develop professional and leadership skills, and have fun through service.
>
> This project is aimed at building a Community Management System for Rac Jkuat that _showcases what the club is all about_, _facilitates member management & engagement_, and _acts as an official communication channel_.

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
- Zod for schema declaration and validation

## Tools Used

- Git & GitHub for version control and collaboration
- TypeScript, ESLint and Prettier for typesafe code and best practices
- GitHub Actions for automated `format`, `lint` and `typecheck` CI steps
- Renovate for automated dependency updates
- UploadThing for file uploads
- Vercel for Deployment

## Features (WIP)

1. Informative Club Website:

   - Provide a comprehensive overview of what the club is all about.
   - Showcase club activities, events, projects and achievements through multimedia content.

2. Blog Platform:

   - A blog section for official club announcements, updates, and communication.
   - Members can contribute to the blog, sharing their experiences, insights, and project highlights.

3. Member Profiles:

   - User profiles for each member, providing a platform for personal and professional branding.
   - Members can showcase their skills, achievements, and experiences, enhancing visibility and discoverability to potential employers and clients.
   - Privacy controls allowing members to manage the visibility of their profiles.

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

## Todo

- [x] Upgrade Blog page
- [ ] Complete Landing page
- [ ] Create profile feature
- [ ] Individual profile page view
- [ ] Update About page
- [ ] Update README.md
- [ ] Implement Guides
- [ ] Implement Docs
