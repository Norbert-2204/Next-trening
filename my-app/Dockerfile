# 1. Node 20 Alpine
FROM node:20-alpine

# 2. Katalog roboczy
WORKDIR /app

# 3. Kopiujemy package.json / package-lock.json
COPY package*.json ./

# 4. Instalujemy zależności
RUN npm install

# 5. Kopiujemy resztę plików
COPY . .

# 6. Generujemy Prisma Client (dla Linux + Windows)
RUN npx prisma generate

# 7. Budujemy aplikację
RUN npm run build

# 8. Eksponujemy port
EXPOSE 3000

# 9. Uruchamiamy aplikację
CMD ["npm", "run", "start"]