import Head from "next/head";
import Meta from "../Meta";

const Layout = ({ children }) => {
	return (
		<div>
			{/* title e metatags do site */}
			<Head>
				{/* <title>Facebook - Inicia sessão ou regista-te</title> */}
				<link
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
					rel="Stylesheet"
				/>
				{/* <Meta /> */}
			</Head>
			{/* navbar */}
			{children}
			{/* volte ao inicio da tella */}
			{/* <Flexa /> */}
			{/* rodapé/footer */}
			{/* <Footer /> */}
		</div>
	);
};

export default Layout;
