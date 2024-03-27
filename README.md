# Read me

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Scripts

Run these scripts from the command line to manage your project:

### Development

Starts the development server, allowing live reloading for a smoother development experience.

```bash
npm run dev
```

Access the development server at http://localhost:3000.

### Build

Compiles the application into static output files optimized for production.

```bash
npm run build
```

### Start

Runs the compiled app in production mode. Remember to build your app with `npm run build` first.

```bash
npm run start
```

### Lint

Runs the linter to catch issues and enforce code style guidelines.

```bash
npm run lint
```

## Environment Variables

Configure your project with environment variables in a `.env.local` file at the root:

```plaintext
# Production API
# NEXT_PUBLIC_API_HOST="https://ziti.io:8080"

# Development API
NEXT_PUBLIC_API_HOST="http://localhost:3001"

# Site URL. Used for sitemap
SITE_URL="https://ziti.io"

# Mixpanel Token
NEXT_PUBLIC_MIXPANEL_TOKEN=""
```

Uncomment the relevant line for your development or production environment.

## Docker Deployment

Build a Docker image for the project using:

```shell
docker build -t ziti.io:latest .
```

## Coding Standards

Begin all files with a comment specifying the path and filename, enhancing readability and maintainability:

```javascript
// src/path/to/file/filename.js
```

## Documentation

Access the documentation at: https://ziti.atlassian.net/wiki/spaces/ZAD/overview?homepageId=12648669
