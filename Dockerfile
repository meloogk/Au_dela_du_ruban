# Étape 1 : build de l'application React
FROM node:20-alpine AS build
WORKDIR /app

# Copier le package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source
COPY . .

# Construire l'application pour la production
RUN npm run build

# Étape 2 : serveur Nginx pour servir les fichiers statiques
FROM nginx:alpine

# Copier la config Nginx (on créera nginx.conf juste après)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier les fichiers build de l'étape précédente
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
