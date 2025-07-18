import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const menuItems = [
		{ name: "Inicio", href: "#home" },
		{ name: "Sobre mí", href: "#about" },
		{ name: "Habilidades", href: "#skills" },
		{ name: "Proyectos", href: "#projects" },
		{ name: "Contacto", href: "#contact" },
	];

	return (
		<motion.header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? "bg-white/95 backdrop-blur-md shadow-lg"
					: "bg-transparent"
			}`}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6 }}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-4">
					{/* Logo */}
					<motion.div
						className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent"
						whileHover={{ scale: 1.05 }}
						transition={{ type: "spring", stiffness: 300 }}
					>
						Portfolio
					</motion.div>

					{/* Desktop Menu */}
					<nav className="hidden md:flex space-x-8">
						{menuItems.map((item, index) => (
							<motion.a
								key={item.name}
								href={item.href}
								className={`font-medium transition-colors duration-200 ${
									scrolled
										? "text-gray-700 hover:text-primary-500"
										: "text-white hover:text-primary-300"
								}`}
								whileHover={{ y: -2 }}
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
							>
								{item.name}
							</motion.a>
						))}
					</nav>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className={`p-2 rounded-md ${
								scrolled ? "text-gray-700" : "text-white"
							}`}
						>
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<motion.div
					className="md:hidden bg-white/95 backdrop-blur-md border-t"
					initial={{ opacity: 0, height: 0 }}
					animate={{ opacity: 1, height: "auto" }}
					exit={{ opacity: 0, height: 0 }}
				>
					<div className="px-4 py-6 space-y-4">
						{menuItems.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="block text-gray-700 hover:text-primary-500 font-medium"
								onClick={() => setIsOpen(false)}
							>
								{item.name}
							</a>
						))}
					</div>
				</motion.div>
			)}
		</motion.header>
	);
};

export default Header;
