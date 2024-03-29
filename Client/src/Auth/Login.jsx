import React, { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
// Icon for design
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
// Import for Firebase authentification
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const auth = getAuth();

	const onLogin = async (e) => {
		e.preventDefault();
		await signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
				navigate("/");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
	};

	return (
		<main className="h-screen w-screen flex justify-center items-center gap-5 relative">
			<section className="bg-[#f0f0f0] m-10 h-[55%] w-[28%] rounded-3xl shadow-sm">
				<div className="bg-white m-1.5 p-6 h-[90%] rounded-3xl">
					<div className="flex flex-col justify-center items-center mt-5">
						<Link to="/" className="pb-5">
							<picture>
								<img src="./Img/logo-big.svg" alt="MyGeniusPDF's logo" />
							</picture>
						</Link>
						<h1 className="flex justify-center font-semibold text-2xl pb-4">
							Se connecter
						</h1>
					</div>
					<form>
						{/* --- Adresse mail --- */}
						<div className="relative pb-2">
							<input
								type="email"
								label="Email address"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								placeholder="Email..."
								autoComplete="current-email"
								className="p-1.5 w-full rounded-lg pl-12 bg-[#f1f1f2] placeholder:text-[#969696] outline-[#969696]"
							/>
							<div className="absolute top-0.5 left-2 text-3xl text-[#969696]">
								<CiMail />
							</div>
						</div>

						{/* --- Mot de passe --- */}
						<div className="relative">
							<input
								type="password"
								label="Create password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								placeholder="Mot de passe..."
								autoComplete="current-password"
								className="p-1.5 w-full rounded-lg pl-12 bg-[#f1f1f2] placeholder:text-[#969696] outline-[#969696]"
							/>
							<div className="absolute top-0.5 left-2 text-3xl text-[#969696]">
								<CiLock />
							</div>
						</div>

						<button
							onClick={onLogin}
							type="submit"
							className="w-full bg-black text-white p-2 mt-4 rounded-lg hover:opacity-80 active:translate-y-0.5">
							Se connecter
						</button>

						{/* Other option for registration */}
						<div className="flex flex-col justify-center items-center my-6">
							<p className="text-sm mb-6 text-[#969696]">Ou continuer avec</p>
							<button className="flex justify-center items-center p-1 text-3xl w-24 rounded-lg border border-[#f5f5f5] shadow-lg hover:opacity-70">
								<FcGoogle />
							</button>
						</div>
					</form>
				</div>

				{/* Redirection if the user has an account */}
				<p className="flex justify-center items-center gap-1 text-[#969696] font-light">
					Vous n'avez pas de compte?
					<NavLink to="/signup">
						<span className="text-black font-normal hover:underline">
							S'inscrire
						</span>
					</NavLink>
				</p>
			</section>

			{/* Styling img */}
			<picture>
				<img src="./Img/ellipse.svg" alt="" className="absolute top-0 left-0" />
				<img
					src="./Img/gridbackground.svg"
					alt=""
					className="absolute top-0 left-0  -z-50"
				/>
			</picture>
		</main>
	);
};
export default Login;
