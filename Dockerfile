# Imagem de Origem
FROM node:16

# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /app

# Adicionando `/app/node_modules/.bin` para o $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Instalando dependências da aplicação e armazenando em cache.
COPY package.json /app/package.json
# RUN yarn add react-scripts@3.4.1 --global
RUN yarn install

# Inicializa a aplicação
CMD ["yarn", "start"]

# BUILD IMAGE
# docker build -t react-forms:lab-frontend .

# EXECUTE
# docker run -it -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm react-forms:lab-frontend