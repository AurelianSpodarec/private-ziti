# Build stage
FROM node:20-alpine AS build
WORKDIR /app

# Install system dependencies
RUN apk add --no-cache libc6-compat

# Install node dependencies
COPY package.json package-lock.json ./
RUN npm ci

ARG NEXT_PUBLIC_API_HOST
ARG NEXT_PUBLIC_MIXPANEL_TOKEN
ARG SITE_URL
ARG NEXT_PUBLIC_SENTRY_DSN
ARG SENTRY_ORG
ARG SENTRY_PROJECT
ARG SENTRY_AUTH_TOKEN
ARG IS_ACTUAL_PRODUCTION

ENV NEXT_PUBLIC_API_HOST=${NEXT_PUBLIC_API_HOST}
ENV NEXT_PUBLIC_MIXPANEL_TOKEN=${NEXT_PUBLIC_MIXPANEL_TOKEN}
ENV SITE_URL=${SITE_URL}
ENV NEXT_PUBLIC_SENTRY_DSN=${NEXT_PUBLIC_SENTRY_DSN}
ENV SENTRY_ORG=${SENTRY_ORG}
ENV SENTRY_PROJECT=${SENTRY_PROJECT}
ENV SENTRY_AUTH_TOKEN=${SENTRY_AUTH_TOKEN}
ENV IS_ACTUAL_PRODUCTION=${IS_ACTUAL_PRODUCTION}

RUN echo "This is actual production: ${IS_ACTUAL_PRODUCTION}"

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
