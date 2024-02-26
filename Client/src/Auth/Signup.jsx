// Main imports for authentification
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
// Icon for design
import { BsCheck2Circle } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
// Import Firebase authentification
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import { getDatabase, ref, set } from "firebase/database";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const onRegister = async (e) => {
		e.preventDefault();
		await createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				const db = getDatabase();
				set(ref(db, `users/${user.uid}`), {
					email: email,
					id: user.uid,
				});
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
			<section className="flex flex-col w-[30%] h-2/5">
				<p className="text-2xl py-4">Essayez gratuitement</p>
				<section className="flex flex-col justify-around h-4/5">
					<div className="flex items-center gap-2">
						<span className="text-2xl">
							<BsCheck2Circle />
						</span>
						<p>
							Jusqu'à <span className="text-[#9f54ff] font-semibold">5</span>{" "}
							PDFs par mois
						</p>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-2xl">
							<BsCheck2Circle />
						</span>
						<p>
							Possibilité de poser{" "}
							<span className="text-[#9f54ff] font-semibold">10</span> questions
							sur les PDF
						</p>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-2xl">
							<BsCheck2Circle />
						</span>
						<p>
							Accès à{" "}
							<span className="text-[#9f54ff] font-semibold">
								l'analyse conversationnelle
							</span>{" "}
							des documents
						</p>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-2xl">
							<BsCheck2Circle />
						</span>
						<p>
							Stockage cloud limité à{" "}
							<span className="text-[#9f54ff] font-semibold">100 Mo</span>
						</p>
					</div>
					<span className="w-full h-[0.5px] bg-[#969696]"></span>
					<p>
						Explorez d'autres plans: <span className="font-semibold">Pro</span>,{" "}
						<span className="font-semibold">Premium</span> :
					</p>
					<a
						href=""
						className="text-[#9f54ff] font-semibold hover:underline w-1/2">
						Voir les différentes formules
					</a>
				</section>
			</section>

			<section className="bg-[#f0f0f0] m-10 h-[55%] w-[28%] rounded-3xl shadow-sm">
				<div className="bg-white m-1.5 p-6 h-[90%] rounded-3xl">
					<div className="flex flex-col justify-center items-center mt-5">
						<Link to="/" className="pb-5">
							<picture>
								<img src="./Img/logo-big.svg" alt="MyGeniusPDF's logo" />
							</picture>
						</Link>
						<h1 className="flex justify-center font-semibold text-2xl">
							S'inscrire
						</h1>
						<p className="text-[#969696] text-sm text-center pb-4">
							Inscrivez-vous pour bénéficier des avantages
						</p>
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
							type="submit"
							onClick={onRegister}
							className="w-full bg-black text-white p-2 mt-4 rounded-lg hover:opacity-80 active:translate-y-0.5">
							S'enregistrer
						</button>

						{/* Other option for registration */}
						<div className="flex flex-col justify-center items-center mt-5">
							<p className="text-sm mb-4 text-[#969696]">Ou continuer avec</p>
							<button className="flex justify-center items-center p-1 text-3xl w-24 rounded-lg border border-[#f5f5f5] shadow-lg hover:opacity-70">
								<FcGoogle />
							</button>
						</div>
					</form>
				</div>

				{/* Redirection if the user has an account */}
				<p className="flex justify-center items-center gap-1 text-[#969696] font-light">
					Vous avez déjà un compte?
					<NavLink to="/login">
						<span className="text-black font-normal hover:underline">
							Se connecter
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

export default Signup;
