import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const quickLinks = [
		{ name: "Inicio", href: "#home" },
		{ name: "Sobre mí", href: "#about" },
		{ name: "Habilidades", href: "#skills" },
		{ name: "Proyectos", href: "#projects" },
		{ name: "Contacto", href: "#contact" },
	];

	const socialLinks = [
		{ name: "GitHub", href: "https://github.com/ArielMichelli" },
		{
			name: "LinkedIn",
			href: "https://www.linkedin.com/in/ariel-michelli/",
		},
		{ name: "Twitter", href: "#" },
		{ name: "Instagram", href: "#" },
	];

	return (
		<footer className="bg-gray-900 text-white relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-10">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					}}
				/>
			</div>

			<div className="relative z-10">
				{/* Main Footer Content */}
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Brand & Description */}
						<motion.div
							className="lg:col-span-2"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<div className="mb-6">
								<h3 className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-4">
									A.M Portfolio
								</h3>
								<p className="text-gray-300 text-lg max-w-md">
									Desarrollador Frontend especializado en
									crear experiencias digitales excepcionales
									con tecnologías modernas.
								</p>
							</div>

							<div className="flex space-x-4">
								{socialLinks.map((social, index) => (
									<motion.a
										key={social.name}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 transition-all duration-300"
										initial={{ opacity: 0, scale: 0 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{
											delay: index * 0.1,
											duration: 0.4,
										}}
										viewport={{ once: true }}
										whileHover={{ scale: 1.1, y: -2 }}
									>
										<span className="text-sm font-semibold">
											{social.name.charAt(0)}
										</span>
									</motion.a>
								))}
							</div>
						</motion.div>

						{/* Quick Links */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, duration: 0.6 }}
							viewport={{ once: true }}
						>
							<h4 className="text-xl font-semibold mb-6">
								Enlaces Rápidos
							</h4>
							<ul className="space-y-3">
								{quickLinks.map((link, index) => (
									<motion.li
										key={link.name}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{
											delay: index * 0.1,
											duration: 0.4,
										}}
										viewport={{ once: true }}
									>
										<a
											href={link.href}
											className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
										>
											{link.name}
										</a>
									</motion.li>
								))}
							</ul>
						</motion.div>

						{/* Contact Info */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4, duration: 0.6 }}
							viewport={{ once: true }}
						>
							<h4 className="text-xl font-semibold mb-6">
								Contacto
							</h4>
							<div className="space-y-3 text-gray-300">
								<p>arielm-04@hotmail.com</p>
								<p>+1 (555) 123-4567</p>
								<p>CABA, Argentina</p>
							</div>

							<motion.div
								className="mt-6"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<a
									href="#contact"
									className="inline-block bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-accent-600 transition-all duration-300"
								>
									Trabajemos Juntos
								</a>
							</motion.div>
						</motion.div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-gray-800">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
						<div className="flex flex-col md:flex-row justify-between items-center">
							<motion.div
								className="flex items-center space-x-1 text-gray-300 mb-4 md:mb-0"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 0.6 }}
								viewport={{ once: true }}
							>
								<span>
									© {currentYear} A.M Portfolio. Hecho con
								</span>
								<motion.div
									animate={{
										scale: [1, 1.2, 1],
										rotate: [0, 5, -5, 0],
									}}
									transition={{
										duration: 2,
										repeat: Infinity,
										ease: "easeInOut",
									}}
								>
									<Heart className="w-4 h-4 text-red-500 fill-current" />
								</motion.div>
								<span>y React</span>
							</motion.div>

							<motion.div
								className="flex items-center space-x-4"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ delay: 0.2, duration: 0.6 }}
								viewport={{ once: true }}
							>
								<span className="text-gray-400 text-sm">
									Diseñado y desarrollado por A.M
								</span>
							</motion.div>
						</div>
					</div>
				</div>
			</div>

			{/* Scroll to Top Button */}
			<motion.button
				onClick={scrollToTop}
				className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50"
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				whileHover={{ scale: 1.1, y: -2 }}
				whileTap={{ scale: 0.9 }}
				transition={{ type: "spring", stiffness: 300 }}
			>
				<ArrowUp className="w-6 h-6" />
			</motion.button>
		</footer>
	);
};

export default Footer;
