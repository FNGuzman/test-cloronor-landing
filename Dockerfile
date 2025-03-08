# Etapa 1: Construcción
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar únicamente los archivos necesarios para las dependencias
COPY package.json package-lock.json ./

# Limpiar dependencias previas (si hay alguna) y reinstalar
RUN rm -rf node_modules && npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Etapa 2: Contenedor Final para Ejecución
FROM node:18-alpine AS runner

WORKDIR /app

# Copiar los resultados de la etapa de construcción
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/public /app/public
COPY --from=builder /app/.next /app/.next

# Exponer el puerto
EXPOSE 3000

# Comando de inicio
CMD ["npm", "start"]
