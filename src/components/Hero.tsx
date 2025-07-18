import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
	const [currentRole, setCurrentRole] = useState(0);

	const roles = [
		"Desarrollador Frontend",
		"Desarrollador React",
		"Diseñador UI/UX",
		"Desarrollador Full Stack",
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentRole((prev) => (prev + 1) % roles.length);
		}, 3000);
		return () => clearInterval(interval);
	}, [roles.length]);

	const scrollToNextSection = () => {
		document
			.getElementById("about")
			?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section id="home" className="min-h-screen relative overflow-hidden">
			{/* Background Gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50"></div>

			{/* Animated Background Elements */}
			<div className="absolute inset-0">
				{[...Array(20)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute w-2 h-2 bg-primary-200 rounded-full"
						initial={{
							x: Math.random() * window.innerWidth,
							y: Math.random() * window.innerHeight,
						}}
						animate={{
							y: [0, -30, 0],
							opacity: [0.3, 0.8, 0.3],
						}}
						transition={{
							duration: 3 + Math.random() * 2,
							repeat: Infinity,
							delay: Math.random() * 2,
						}}
					/>
				))}
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
				<div className="w-full">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						{/* Left Content */}
						<motion.div
							className="text-center lg:text-left"
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
						>
							<motion.h1
								className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2, duration: 0.8 }}
							>
								Hola, soy{" "}
								<span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
									Ariel
								</span>
							</motion.h1>

							<motion.div
								className="h-16 mb-8"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.4 }}
							>
								<motion.h2
									key={currentRole}
									className="text-2xl lg:text-3xl font-semibold text-gray-700"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.5 }}
								>
									{roles[currentRole]}
								</motion.h2>
							</motion.div>

							<motion.p
								className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.6, duration: 0.8 }}
							>
								Creo experiencias digitales increíbles con
								tecnologías modernas. Especializado en React,
								TypeScript y diseño centrado en el usuario.
							</motion.p>

							<motion.div
								className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.8, duration: 0.8 }}
							>
								<motion.button
									className="btn-primary"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									onClick={() =>
										document
											.getElementById("contact")
											?.scrollIntoView({
												behavior: "smooth",
											})
									}
								>
									Contáctame
								</motion.button>

								<motion.button
									className="btn-secondary"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									onClick={() =>
										document
											.getElementById("projects")
											?.scrollIntoView({
												behavior: "smooth",
											})
									}
								>
									Ver Proyectos
								</motion.button>
							</motion.div>

							{/* Social Links */}
							<motion.div
								className="flex justify-center lg:justify-start space-x-6"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1, duration: 0.8 }}
							>
								{[
									{
										Icon: Github,
										href: "#",
										label: "GitHub",
									},
									{
										Icon: Linkedin,
										href: "#",
										label: "LinkedIn",
									},
									{
										Icon: Mail,
										href: "#contact",
										label: "Email",
									},
								].map(({ Icon, href, label }) => (
									<motion.a
										key={label}
										href={href}
										className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
										whileHover={{ scale: 1.1, y: -5 }}
										whileTap={{ scale: 0.9 }}
									>
										<Icon className="w-6 h-6 text-gray-700" />
									</motion.a>
								))}
							</motion.div>
						</motion.div>

						{/* Right Content - Avatar/Image */}
						<motion.div
							className="flex justify-center lg:justify-end"
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.4, duration: 0.8 }}
						>
							<motion.div
								className="relative"
								whileHover={{ scale: 1.05 }}
								transition={{ type: "spring", stiffness: 300 }}
							>
								<div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 p-2">
									<div className="w-full h-full rounded-full bg-white flex items-center justify-center">
										<div className="w-72 h-72 lg:w-88 lg:h-88 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
											<span className="text-6xl lg:text-8xl">
												👨‍💻
											</span>
										</div>
									</div>
								</div>

								{/* Floating Elements */}
								<motion.div
									className="absolute -top-4 -right-4 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white text-xl"
									animate={{ rotate: 360 }}
									transition={{
										duration: 20,
										repeat: Infinity,
										ease: "linear",
									}}
								>
									⚛️
								</motion.div>

								<motion.div
									className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-white text-xl"
									animate={{ rotate: -360 }}
									transition={{
										duration: 15,
										repeat: Infinity,
										ease: "linear",
									}}
								>
									💻
								</motion.div>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.2, duration: 0.8 }}
				onClick={scrollToNextSection}
			>
				<motion.div
					className="flex flex-col items-center text-gray-600"
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity }}
				>
					<span className="text-sm mb-2">Scroll</span>
					<ChevronDown className="w-6 h-6" />
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Hero;
