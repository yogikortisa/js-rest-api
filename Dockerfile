# Step 1: Get image from Docker Hub
FROM oven/bun:distroless

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: for using cached if not any changes on dependencies (for optimizations)
COPY package*.json /app

# Step 4: Install dependencies
RUN bun install

# Step 5: Copy the current directory contents into the container at /app
COPY . /app

# Step 6: Expose the port the app will run on (optional, just for documentation purposes)
EXPOSE 3000

# Step 7: Run the command at the WORKDIR (only when container is running)
CMD ["bun", "start"]