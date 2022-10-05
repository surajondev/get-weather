#Importing Base Image
FROM node:alpine

# settig up enviroment variable
ENV NODE_OPTIONS=--openssl-legacy-provider

#Working Directory
WORKDIR /get-weather-app


COPY package.json .

#Installing npm
RUN npm install --silent

#Copying all other files
COPY . .

EXPOSE 3000

#Execution
CMD ["npm", "start"]

#To run this docker container, use commmand "docker run -p 3010:3000 -it <Image-Name>"
#Open "localhost:3010"