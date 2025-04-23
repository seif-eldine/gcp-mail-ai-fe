# Stage 1: Build the Angular application
FROM node:alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# RUN npm run build --prod
RUN ng build
 
# Stage 2: Serve the application using Nginx
FROM nginx:alpine
COPY --from=build /usr/src/app/dist/mail-reader/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

