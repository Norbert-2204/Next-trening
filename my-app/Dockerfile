# 1. Używamy Node 20
FROM node:20-alpine

# 2. Ustawiamy katalog roboczy w kontenerze
WORKDIR /app

# 3. Kopiujemy package.json i package-lock.json (albo pnpm-lock.yaml/yarn.lock)
COPY package*.json ./

# 4. Instalujemy zależności
RUN npm install

# 5. Kopiujemy resztę plików
COPY . .

# 6. Budujemy aplikację (dla produkcji)
RUN npm run build

# 7. Eksponujemy port 3000
EXPOSE 3000

# 8. Komenda uruchamiająca aplikację
CMD ["npm", "start"]