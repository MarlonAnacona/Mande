# Usar una imagen base de Node.js
FROM node:14

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos necesarios para la instalación de dependencias
COPY package*.json ./

# Instalar las dependencias
RUN npm install --force

# Copiar el resto de los archivos de la aplicación
COPY . .

# Especificar el comando para ejecutar la aplicación
CMD [ "npm", "start" ]