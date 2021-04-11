const News = () => {
	return (
		<>
			<meta property="og:site_name" content="Facebook"></meta>
			{/* insira aqui a url de onde a informacao do post veio */}
			<meta property="og:url" content="https://www.facebook.com/login"></meta>
			{/* aqui deve ser inserido uma imagem para servir como capa da noticia */}
			<meta property="og:image" content="/ss.webp"></meta>
			{/* aqui deve ser descrito o titulo do conteudo */}
			<meta property="og:title" content="cv cv cv ternr" />
			{/* aqui deve ser inserido um pequeno texto para dar um pequena introduçao a noticia */}
			<meta
				name="description"
				content="Bla bla bla é sima nfla, si bu sa nada contra conrent tem pedras na caminho,"
			></meta>
		</>
	);
};

export default News;
