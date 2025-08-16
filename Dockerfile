# ---- build stage ----
FROM node:22-alpine AS build
WORKDIR /app

# Only install dependencies first for better layer caching
COPY package*.json ./
RUN npm ci

# Build
COPY . .
# If your build uses devDependencies (most do), keep them for build then prune
RUN npm run build && npm prune --omit=dev

# ---- runtime stage ----
FROM nginx:1.27-alpine

# Install curl for HEALTHCHECK (nginx:alpine doesn't have wget)
RUN apk add --no-cache curl

# Copy nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built assets with correct ownership
COPY --from=build --chown=nginx:nginx /app/dist /usr/share/nginx/html

EXPOSE 80

# Faster/safer healthcheck using curl (-f fails on non-2xx/3xx)
HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
  CMD curl -fsS http://localhost/health || exit 1
