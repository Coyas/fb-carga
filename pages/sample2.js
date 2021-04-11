import Layout from "../componentes/Layout";
import Image from "next/image";
// import Footer from "../componentes/Footer";

function HomePage() {
	return (
		<Layout>
			<div className="container mx-auto bg-yllow-300">
				<div className="w-full flex flex-col md:flex-row lg:flex-row">
					<div className="container ">
						<Image src="/fb.svg" width="199" height="70" />
						<div
							className="text-black text-2xl ml-5"
							style={{
								fontFamily:
									"SFProDisplay-Regular, Helvetica, Arial, sans-serif",
							}}
						>
							Acessos recentes
						</div>
						<div
							className="ml-5"
							style={{
								color: "#606770",
								fontFamily:
									"SFProDisplay-Regular, Helvetica, Arial, sans-serif",
							}}
						>
							Clica na tua foto ou adiciona uma conta.
						</div>
						<div className="card ml-5 w-40 rounded-lg border  mt-5 hover:shadow-lg ease-in">
							<a href="#" className="">
								<div
									className="h-40 flex justify-center "
									style={{ backgroundColor: "#f5f6f7" }}
								>
									<Image src="/add.svg" width="45" height="45" />
								</div>
								<div className="text-blue-500 p-3 text-center bg-white rounded-b-lg text-base">
									Adicionar Conta
								</div>
							</a>
						</div>
					</div>
					<div className="container bg-blue-700">formulario</div>
				</div>
			</div>
		</Layout>
	);
}

export default HomePage;
