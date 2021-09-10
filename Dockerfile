# Set builder
FROM node:14-alpine as builder

WORKDIR /app/loveunicorns

# Copy package.json and install dependencies
COPY package*.json /app/loveunicorns/
RUN npm install --only=production

# Set runner
FROM node:14-alpine as runner

WORKDIR /app/loveunicorns

# Copy dependencies from builder
COPY --from=builder /app/loveunicorns/node_modules ./node_modules
COPY . .

# Expose port and start app
EXPOSE 3000
ENTRYPOINT ["node", "server.js"]