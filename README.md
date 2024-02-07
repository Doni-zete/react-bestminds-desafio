
# DESAFIO EVERYMIND - Best Minds

Neste desafio a pessoa candidata terá total liberdade de usar as ferramentas e linguagens que está mais familiarizado.

O objetivo principal será identificar sua criatividade e a capacidade de resolver um problema, principalmente o potencial de implementação, qualidade de código, organização, boas práticas, conceitos de Clean Code SOLID e preocupação com desenvolvimento para grandes volumes transacionais.

Os requisitos necessários para a entrega são:

Ter uma base de dados com uma tabela produtos com os campos:
**Nome do produto**
**Código de produto**
**Descrição do produto**
**Preço do produto**
**Criar uma página web na tecnologia de sua preferência para o CRUD de produtos.**

**Nessa página o usuário deverá ter a habilidade de exibir,** **deletar, criar, e editar produtos que estão salvos na base.**
**Todas as ações na página deverão refletir no banco de dados.**


## Video de apresentação do projeto em execução
![Projeto finalizado]([https://github.com/Doni-zete/react-bestminds-desafio/blob/main/img/baixado.png](https://github.com/Doni-zete/react-bestminds-desafio/blob/main/img/projeto%20finalizado.mp4)

## Stack utilizada

**Front-end:** React, TailwindCSS.

**Back-end:** Node, Express, MySql.


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/Doni-zete/react-bestminds-desafio
```


Entre no diretório do projeto. Há dois projetos: um backend-crud-mysql e outro frontend-react. 
![Projeto](https://github.com/Doni-zete/react-bestminds-desafio/blob/main/img/baixado.png)


Execute os passos abaixo no terminal:

```bash
  cd backend-crud-mysql
```

Instale as dependências

```bash
  npm install
```

```bash
  cd ..
```


```bash
  cd frontend-react
```

Instale as dependências

```bash
  npm install
```

Após executar os comandos acima, irão aparecer duas pastas com o nome "node_modules".

![Dependencia instalada](https://github.com/Doni-zete/react-bestminds-desafio/blob/main/img/dependencias.png)

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`DB_HOST=`

`DB_USER=`

`DB_PORT=`

`DB_PASSWORD=`

`DB_DATABASE=`

Há um arquivo na raiz do projeto "backend-crud-mysql", denominado ".env_exemplo". Lembre-se de renomeá-lo para ".env" e coloque as variáveis para se conectar com o seu banco MySql.


![Dotenv](https://github.com/Doni-zete/react-bestminds-desafio/blob/main/img/dot.png)




Você irá precisar de dois terminais abertos: um para executar o projeto do frontend e outro para o backend.

Inicie o servidor para o backend-crud-mysql. Lembre-se de estar dentro da pasta utilizando o comando 

```bash
cd backend-crud-mysql
```
Inicie o servidor
```bash
  npm run start
```

Se tudo ocoreu bem ira aparecer a mensagem abaixo:
![Rodando](https://github.com/Doni-zete/react-bestminds-desafio/blob/main/img/rodar.png)


Se aparecer essa outra mensagem, significa que as variáveis de ambiente não foram configuradas.
![Dotenv não configurado](https://github.com/Doni-zete/react-bestminds-desafio/blob/main/img/erro.png)




No outro terminal, lembre-se de estar dentro da pasta correspondente.

```bash
cd frontend-react
```
Inicie aplicação
```bash
  npm start
```

## Portas
Se tudo ocorreu bem você tera dois terminais iguais abaixo um para o backend e outra para o frontend.
![Sucesso backend e frontend rodando](https://github.com/Doni-zete/react-bestminds-desafio/blob/main/img/dois-rodando.png)


O backend-crud-mysql esta rodando na porta:

```bash
  http://localhost:3000
```

O frontend-react esta rodando na porta:

```bash
  http://localhost:3001
```




## Feedback

Se você tiver algum feedback, por favor nos deixe saber por meio de fake@fake.com

