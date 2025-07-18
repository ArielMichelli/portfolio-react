import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
	const projects = [
		{
			id: 1,
			title: "E-Commerce Platform",
			description:
				"Plataforma de comercio electrónico completa con carrito de compras, pagos integrados y panel de administración.",
			image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
			technologies: [
				"React",
				"TypeScript",
				"Node.js",
				"MongoDB",
				"Stripe",
			],
			liveUrl: "#",
			githubUrl: "#",
			featured: true,
		},
		{
			id: 2,
			title: "Task Management App",
			description:
				"Aplicación de gestión de tareas con funcionalidades de arrastrar y soltar, colaboración en tiempo real.",
			image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
			technologies: [
				"React",
				"Redux",
				"Socket.io",
				"Express",
				"PostgreSQL",
			],
			liveUrl: "#",
			githubUrl: "#",
			featured: true,
		},
		{
			id: 3,
			title: "Weather Dashboard",
			description:
				"Dashboard del clima con gráficos interactivos, pronósticos y mapas meteorológicos.",
			image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
			technologies: [
				"Next.js",
				"Chart.js",
				"OpenWeather API",
				"Tailwind",
			],
			liveUrl: "#",
			githubUrl: "#",
			featured: false,
		},
		{
			id: 4,
			title: "Social Media App",
			description:
				"Red social con sistema de posts, comentarios, likes y chat en tiempo real.",
			image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
			technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
			liveUrl: "#",
			githubUrl: "#",
			featured: false,
		},
		{
			id: 5,
			title: "AI Image Generator",
			description:
				"Generador de imágenes con IA utilizando modelos de machine learning y interfaz intuitiva.",
			image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
			technologies: ["React", "Python", "TensorFlow", "FastAPI", "AWS"],
			liveUrl: "#",
			githubUrl: "#",
			featured: false,
		},
		{
			id: 6,
			title: "Crypto Portfolio Tracker",
			description:
				"Rastreador de portfolio de criptomonedas con gráficos en tiempo real y análisis de mercado.",
			image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
			technologies: ["Vue.js", "Vuex", "CoinGecko API", "Chart.js"],
			liveUrl: "#",
			githubUrl: "#",
			featured: false,
		},
	];

	const featuredProjects = projects.filter((project) => project.featured);
	const otherProjects = projects.filter((project) => !project.featured);

	return (
		<section id="projects" className="section-padding bg-gray-50">
			<div className="max-w-7xl mx-auto">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
						Mis{" "}
						<span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
							Proyectos
						</span>
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Una selección de proyectos que demuestran mis
						habilidades y experiencia en desarrollo web.
					</p>
				</motion.div>

				{/* Featured Projects */}
				<div className="mb-20">
					<motion.h3
						className="text-3xl font-bold text-gray-900 mb-12 text-center"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						Proyectos Destacados
					</motion.h3>

					<div className="grid lg:grid-cols-2 gap-12">
						{featuredProjects.map((project, index) => (
							<motion.div
								key={project.id}
								className="group relative bg-white rounded-2xl shadow-xl overflow-hidden"
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									delay: index * 0.2,
									duration: 0.8,
								}}
								viewport={{ once: true }}
								whileHover={{ y: -10 }}
							>
								<div className="relative overflow-hidden">
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<div className="absolute bottom-4 left-4 right-4 flex justify-between">
											<motion.a
												href={project.liveUrl}
												className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors"
												whileHover={{ scale: 1.1 }}
												whileTap={{ scale: 0.9 }}
											>
												<ExternalLink className="w-5 h-5 text-gray-700" />
											</motion.a>
											<motion.a
												href={project.githubUrl}
												className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors"
												whileHover={{ scale: 1.1 }}
												whileTap={{ scale: 0.9 }}
											>
												<Github className="w-5 h-5 text-gray-700" />
											</motion.a>
										</div>
									</div>
								</div>

								<div className="p-6">
									<h4 className="text-2xl font-bold text-gray-900 mb-3">
										{project.title}
									</h4>
									<p className="text-gray-600 mb-4 leading-relaxed">
										{project.description}
									</p>

									<div className="flex flex-wrap gap-2">
										{project.technologies.map((tech) => (
											<span
												key={tech}
												className="px-3 py-1 text-sm bg-primary-100 text-primary-700 rounded-full"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>

				{/* Other Projects */}
				<div>
					<motion.h3
						className="text-3xl font-bold text-gray-900 mb-12 text-center"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						Otros Proyectos
					</motion.h3>

					<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
						{otherProjects.map((project, index) => (
							<motion.div
								key={project.id}
								className="group bg-white rounded-xl shadow-lg overflow-hidden card-hover"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									delay: index * 0.1,
									duration: 0.6,
								}}
								viewport={{ once: true }}
							>
								<div className="relative overflow-hidden">
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
									/>
									<div className="absolute top-4 right-4 flex space-x-2">
										<motion.a
											href={project.liveUrl}
											className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.9 }}
										>
											<Eye className="w-4 h-4 text-gray-700" />
										</motion.a>
										<motion.a
											href={project.githubUrl}
											className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.9 }}
										>
											<Github className="w-4 h-4 text-gray-700" />
										</motion.a>
									</div>
								</div>

								<div className="p-6">
									<h4 className="text-xl font-bold text-gray-900 mb-2">
										{project.title}
									</h4>
									<p className="text-gray-600 mb-4 text-sm leading-relaxed">
										{project.description}
									</p>

									<div className="flex flex-wrap gap-1">
										{project.technologies
											.slice(0, 3)
											.map((tech) => (
												<span
													key={tech}
													className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
												>
													{tech}
												</span>
											))}
										{project.technologies.length > 3 && (
											<span className="px-2 py-1 text-xs bg-gray-100 text-gray-500 rounded">
												+
												{project.technologies.length -
													3}
											</span>
										)}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>

				{/* CTA */}
				<motion.div
					className="text-center mt-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<p className="text-lg text-gray-600 mb-8">
						¿Te interesa trabajar conmigo en tu próximo proyecto?
					</p>
					<motion.button
						className="btn-primary"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={() =>
							document
								.getElementById("contact")
								?.scrollIntoView({ behavior: "smooth" })
						}
					>
						Trabajemos Juntos
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
};

export default Projects;
