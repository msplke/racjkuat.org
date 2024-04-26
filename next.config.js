/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */

import { withContentlayer } from "next-contentlayer";

// Importing env files here to validate on build
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  images: { domains: ["utfs.io"] },

  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default withContentlayer(config);
