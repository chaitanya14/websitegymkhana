# # Stage 0, "build-stage", based on Node.js, to build and compile the frontend
# FROM node:10.13 as build-stage
# WORKDIR /app
# COPY package*.json /app/
# RUN npm install
# COPY ./ /app/
# ARG configuration=production
# RUN npm run build -- --output-path=./dist/out --configuration $configuration

# # Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
# FROM nginx:1.15
# #Copy ci-dashboard-dist
# COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
# #Copy default nginx configuration
# COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf


# FROM node:latest as node
# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm run build --production

# FROM nginx:alpine
# COPY --from=node /app/dist/websitegymkhana /usr/share/nginx/html


# FROM node:13.3.0 AS compile-image

# RUN npm install -g yarn

# WORKDIR /opt/ng
# COPY .npmrc package.json yarn.lock ./
# RUN yarn install

# ENV PATH="./node_modules/.bin:$PATH" 

# COPY . ./
# RUN ng build --prod

# FROM nginx
# COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=compile-image /opt/ng/dist/websitegymkhana /usr/share/nginx/html

### STAGE 1: Build ###
FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/app/dist/websitegymkhana /usr/share/nginx/html