FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy source code
COPY . .

# Compile Tailwind CSS
RUN npx tailwindcss -i ./src/styles/globals.css -o ./public/tailwind.css --minify

# Expose port
EXPOSE 3000

# Direct command to start development with Tailwind watch
CMD sh -c "npx tailwindcss -i ./src/styles/globals.css -o ./public/tailwind.css --watch & npm run dev"
