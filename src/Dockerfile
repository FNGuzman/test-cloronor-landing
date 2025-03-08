# Stage 1: Build the application
FROM node:20-alpine AS builder

# Setup environment variables
ENV NEXT_TELEMETRY_DISABLED=1 \
    NODE_ENV=production \
    YARN_VERSION=4.2.2

# Update dependencies and install necessary packages
RUN apk update && apk upgrade && \
    apk add --no-cache libc6-compat dumb-init

# Install and use yarn 4.x
RUN corepack enable && corepack prepare yarn@${YARN_VERSION}

# Create necessary user and group
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Set the working directory
WORKDIR /app

# Copy dependency files
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn

# Install dependencies
RUN yarn install --immutable

# Copy the rest of the application
COPY . .

# Build the application
RUN yarn build

# Stage 2: Run the application
FROM node:20-alpine AS runner

# Setup environment variables
ENV NEXT_TELEMETRY_DISABLED=1 \
    NODE_ENV=production \
    PORT=3000

# Update dependencies and install necessary packages
RUN apk update && apk upgrade && \
    apk add --no-cache libc6-compat dumb-init

# Create necessary user and group
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Set the working directory
WORKDIR /app

# Copy built application from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set the user to the created user
USER nextjs

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["dumb-init", "yarn", "dev"]
