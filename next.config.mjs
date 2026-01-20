import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode
  reactStrictMode: true,

  // Output as static site (for SSG) - only for production builds
  ...(process.env.NODE_ENV === 'production' && { output: 'export' }),

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Configure trailing slashes to match current setup
  trailingSlash: false,

  // Remove console logs and debugger in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Turbopack configuration (Next.js 16+)
  turbopack: {},

  // Legacy webpack config (for non-Turbopack builds)
  webpack: (config, { dev }) => {
    if (dev) {
      // Comprehensive fix for Windows watchpack issues
      config.watchOptions = {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: ['**/node_modules/**', '**/.git/**', '**/.next/**'],
      };

      // Override snapshot options
      config.snapshot = {
        ...config.snapshot,
        managedPaths: [],
        immutablePaths: [],
        buildDependencies: {
          ...config.snapshot?.buildDependencies,
        },
      };

      // Ensure output path is absolute
      if (!path.isAbsolute(config.output.path)) {
        config.output.path = path.resolve(__dirname, config.output.path);
      }
    }

    return config;
  },
};

export default nextConfig;
