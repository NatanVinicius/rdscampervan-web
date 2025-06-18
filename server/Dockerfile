# Usamos uma imagem com Node pré-instalado
FROM node:20

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos do projeto para dentro do container
COPY package*.json ./

# Instala as dependências
RUN npm install --legacy-peer-deps --include=dev


# Copia o restante do projeto
COPY . .

# Expõe a porta que o app vai rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "dev"]
