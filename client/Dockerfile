# client/Dockerfile.dev

FROM node:20

WORKDIR /app

# Copia apenas os arquivos essenciais primeiro (para cache)
COPY package.json package-lock.json* ./

RUN npm install

# Copia o restante do projeto
COPY . .

# Expor a porta do Vite
EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
