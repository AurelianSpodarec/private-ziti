# Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN apk add --no-cache libc6-compat
RUN npm ci
COPY . .
# Set environment variable during image build 
ENV NEXT_PUBLIC_API_HOST="https://ziti.io:8080/api/v1"
ENV NEXT_PUBLIC_MIXPANEL_TOKEN="822fc869cabe34d3a7d3d3d2fef6a87d"
ENV SITE_URL="https://ziti.io"
RUN npm run build

# Production stage
FROM node:20-alpine AS production
WORKDIR /app
COPY --from=build /app ./
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

# Create a non-root user for running the application
RUN addgroup --system --gid 1001 nodejs && \
  adduser --system --uid 1001 nextjs --ingroup nodejs && \
  chown -R nextjs:nodejs /app/.next && \
  chmod -R 755 /app/.next

USER nextjs
CMD ["npm", "start"]
