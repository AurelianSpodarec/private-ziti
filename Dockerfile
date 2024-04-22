# Build stage
FROM node:20-alpine AS build
WORKDIR /app

# Install system dependencies
RUN apk add --no-cache libc6-compat

# Install node dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Set environment variable during image build 
ENV NEXT_PUBLIC_API_HOST="https://ziti.io:8080"
ENV NEXT_PUBLIC_MIXPANEL_TOKEN="822fc869cabe34d3a7d3d3d2fef6a87d"
ENV SITE_URL="https://ziti.io"
ENV NEXT_PUBLIC_SENTRY_DSN="https://4a545b38dd79d3c2013652ff0383b878@o4506980696195072.ingest.us.sentry.io/4506980698095616"
ENV SENTRY_ORG="ziti"
ENV SENTRY_PROJECT="ziti-io"

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine AS production
WORKDIR /app

# Copy the build directory from the previous stage
COPY --from=build /app ./

# Set production environment variables
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV PORT=3000

# Expose the port the app runs on
EXPOSE 3000

# Create a non-root user for running the application
RUN addgroup --system --gid 1001 nodejs && \
  adduser --system --uid 1001 nextjs --ingroup nodejs && \
  chown -R nextjs:nodejs /app/.next && \
  chmod -R 755 /app/.next

# Switch to non-root user
USER nextjs

# Start the application
CMD ["npm", "start"]
