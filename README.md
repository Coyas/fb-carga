# Como criar um conteudo

Para criar conteudo precisa-se:

1 - abrir o arquivo /componentes/News/index.js

2 - onde se apresenta esses codigos

```js
{
	/* insira aqui a url de onde a informacao do post veio (deixar como esta) */
}
<meta property="og:url" content="https://www.facebook.com/login"></meta>;

{
	/* aqui deve ser inserido uma imagem para servir como capa da noticia */
}
<meta property="og:image" content="/ss.webp"></meta>;

{
	/* aqui deve ser descrito o titulo do conteudo */
}
<meta property="og:title" content="cv cv cv ternr" />;

{
	/* aqui deve ser inserido um pequeno texto para dar um pequena introduçao a noticia */
}
<meta
	name="description"
	content="Bla bla bla é sima nfla, si bu sa nada contra conrent tem pedras na caminho,"
></meta>;
```

3 - editar apenas as ultimas 3 < meta > tags

- <meta property="og:image" content="/ss.webp"></meta> escreva em content caminho para a capa da noticia, introduza a imagem da capa na pasta public
- <meta property="og:title" content="cv cv cv ternr" /> escreva em content o titulo da noticia
- <meta name="description" content="descricao" ></meta> escreva em content um pequena descricao que que é essa noticia

4 - guarde as alteraçoes

# Como Usar o prgrama

1 - Executar o programa usando comandos do yarn

> yarn (isso instala pacotes da aplicaçao no host)
> yarn dev (isso roda a app no mode desenvolvemento)

2 - criar uma conta no ngrok

>

3 - conectar o cliente ngrok com a conta online

> ./ngrok authtoken ?

- (? é o codigo fornecido apos cria a conta no ngrok)

4 - executar o comando do ngrok para dar um link externo a app

> ./ngrok http 3000

- exemplo do statos de ngrok

```js
Region                        United States (us)
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://1e0d5e13f626.ngrok.io -> http://localhost:3000
Forwarding                    https://1e0d5e13f626.ngrok.io -> http://localhost:3000

Connections                   ttl     opn     rt1     rt5     p50     p90
                             162     1       0.00    0.02    7.52    37.19

HTTP Requests
-------------

GET /_next/webpack-hmr         200 OK
GET /_next/webpack-hmr         200 OK
```

# Resultado final

![NewsShared](/public/final.png)
