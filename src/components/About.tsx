import { motion } from "framer-motion";
import { Code, Palette, Rocket, Heart } from "lucide-react";

const About = () => {
	const features = [
		{
			icon: Code,
			title: "Desarrollo Limpio",
			description:
				"Escribo código limpio, escalable y bien documentado siguiendo las mejores prácticas.",
		},
		{
			icon: Palette,
			title: "Diseño Centrado en Usuario",
			description:
				"Creo interfaces intuitivas y atractivas que mejoran la experiencia del usuario.",
		},
		{
			icon: Rocket,
			title: "Rendimiento Optimizado",
			description:
				"Optimizo aplicaciones para obtener el máximo rendimiento y velocidad de carga.",
		},
		{
			icon: Heart,
			title: "Pasión por la Tecnología",
			description:
				"Me mantengo actualizado con las últimas tendencias y tecnologías del desarrollo web.",
		},
	];

	return (
		<section id="about" className="section-padding bg-gray-50">
			<div className="max-w-7xl mx-auto">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
						Sobre{" "}
						<span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
							Mí
						</span>
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Soy un desarrollador apasionado con más de 3 años de
						experiencia creando aplicaciones web modernas y
						soluciones digitales innovadoras.
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
					{/* Left Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<h3 className="text-3xl font-bold text-gray-900 mb-6">
							Mi Historia
						</h3>
						<div className="space-y-4 text-gray-600">
							<p>
								Comencé mi viaje en el desarrollo web hace
								varios años, motivado por la curiosidad de crear
								cosas increíbles en internet. Desde entonces, he
								trabajado en proyectos diversos que van desde
								aplicaciones web hasta sistemas complejos.
							</p>
							<p>
								Me especializo en tecnologías modernas como
								React, TypeScript, y Node.js. Mi enfoque está en
								crear experiencias de usuario excepcionales
								mientras mantengo un código limpio y escalable.
							</p>
							<p>
								Cuando no estoy programando, me gusta explorar
								nuevas tecnologías, contribuir a proyectos open
								source y compartir conocimiento con la
								comunidad.
							</p>
						</div>

						<motion.div
							className="mt-8"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3, duration: 0.8 }}
							viewport={{ once: true }}
						>
							<button 
								className="btn-primary"
								onClick={() => {
									const link = document.createElement('a');
									link.href = '/CV-Ariel-Michelli.pdf';
									link.download = 'CV-Ariel-Michelli.pdf';
									document.body.appendChild(link);
									link.click();
									document.body.removeChild(link);
								}}
							>
								Descargar CV
							</button>
						</motion.div>
					</motion.div>

					{/* Right Content - Stats */}
					<motion.div
						className="grid grid-cols-2 gap-8"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						{[
							{ number: "50+", label: "Proyectos Completados" },
							{ number: "3+", label: "Años de Experiencia" },
							{ number: "20+", label: "Clientes Satisfechos" },
							{ number: "100%", label: "Compromiso" },
						].map((stat, index) => (
							<motion.div
								key={stat.label}
								className="text-center p-6 bg-white rounded-xl shadow-lg card-hover"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									delay: index * 0.1,
									duration: 0.6,
								}}
								viewport={{ once: true }}
							>
								<motion.div
									className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent mb-2"
									initial={{ scale: 0 }}
									whileInView={{ scale: 1 }}
									transition={{
										delay: index * 0.1 + 0.3,
										type: "spring",
										stiffness: 100,
									}}
									viewport={{ once: true }}
								>
									{stat.number}
								</motion.div>
								<p className="text-gray-600 font-medium">
									{stat.label}
								</p>
							</motion.div>
						))}
					</motion.div>
				</div>

				{/* Features */}
				<motion.div
					className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					{features.map((feature, index) => (
						<motion.div
							key={feature.title}
							className="text-center p-6 bg-white rounded-xl shadow-lg card-hover"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1, duration: 0.6 }}
							viewport={{ once: true }}
							whileHover={{ y: -10 }}
						>
							<motion.div
								className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4"
								whileHover={{ rotate: 360 }}
								transition={{ duration: 0.6 }}
							>
								<feature.icon className="w-8 h-8 text-white" />
							</motion.div>
							<h4 className="text-xl font-semibold text-gray-900 mb-3">
								{feature.title}
							</h4>
							<p className="text-gray-600">
								{feature.description}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default About;
