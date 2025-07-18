import { motion } from "framer-motion";

const Skills = () => {
	const skillCategories = [
		{
			title: "Frontend",
			skills: [
				{
					name: "React",
					level: 95,
					color: "from-blue-500 to-blue-600",
				},
				{
					name: "TypeScript",
					level: 90,
					color: "from-blue-700 to-blue-800",
				},
				{
					name: "Next.js",
					level: 85,
					color: "from-gray-700 to-gray-800",
				},
				{
					name: "Tailwind CSS",
					level: 92,
					color: "from-cyan-500 to-cyan-600",
				},
				{
					name: "JavaScript",
					level: 95,
					color: "from-yellow-500 to-yellow-600",
				},
			],
		},
		{
			title: "Backend",
			skills: [
				{
					name: "Node.js",
					level: 88,
					color: "from-green-500 to-green-600",
				},
				{
					name: "Express",
					level: 85,
					color: "from-gray-600 to-gray-700",
				},
				{
					name: "MySQL",
					level: 85,
					color: "from-green-600 to-green-700",
				},
				{
					name: "PostgreSQL",
					level: 75,
					color: "from-blue-600 to-blue-700",
				},
				{
					name: "REST APIs",
					level: 90,
					color: "from-orange-500 to-orange-600",
				},
			],
		},
		{
			title: "Herramientas",
			skills: [
				{ name: "Git", level: 90, color: "from-red-500 to-red-600" },
				{
					name: "Docker",
					level: 75,
					color: "from-blue-500 to-blue-600",
				},
				{
					name: "AWS",
					level: 70,
					color: "from-orange-600 to-orange-700",
				},
				{
					name: "Figma",
					level: 85,
					color: "from-purple-500 to-purple-600",
				},
				{
					name: "VS Code",
					level: 95,
					color: "from-blue-600 to-blue-700",
				},
			],
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.6,
			},
		},
	};

	return (
		<section id="skills" className="section-padding bg-white">
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
							Habilidades
						</span>
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Tecnologías y herramientas que domino para crear
						soluciones web modernas y efectivas.
					</p>
				</motion.div>

				<motion.div
					className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{skillCategories.map((category, categoryIndex) => (
						<motion.div
							key={category.title}
							className="bg-gray-50 p-8 rounded-2xl shadow-lg"
							variants={itemVariants}
							whileHover={{ y: -10 }}
							style={{
								boxShadow:
									"0 25px 50px -12px rgba(0, 0, 0, 0.25)",
							}}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
								{category.title}
							</h3>

							<div className="space-y-6">
								{category.skills.map((skill, skillIndex) => (
									<motion.div
										key={skill.name}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{
											delay:
												categoryIndex * 0.2 +
												skillIndex * 0.1,
											duration: 0.6,
										}}
										viewport={{ once: true }}
									>
										<div className="flex justify-between items-center mb-2">
											<span className="font-semibold text-gray-800">
												{skill.name}
											</span>
											<span className="text-sm font-medium text-gray-600">
												{skill.level}%
											</span>
										</div>

										<div className="w-full bg-gray-200 rounded-full h-3">
											<motion.div
												className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
												initial={{ width: 0 }}
												whileInView={{
													width: `${skill.level}%`,
												}}
												transition={{
													delay:
														categoryIndex * 0.2 +
														skillIndex * 0.1 +
														0.3,
													duration: 1,
													ease: "easeOut",
												}}
												viewport={{ once: true }}
											/>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Certificates & Learning */}
				<motion.div
					className="mt-20 grid md:grid-cols-2 gap-8"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl">
						<h3 className="text-2xl font-bold text-gray-900 mb-4">
							🎓 Certificaciones
						</h3>
						<ul className="space-y-3 text-gray-700">
							<li className="flex items-center">
								<span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
								Analista Universitario de Sistemas.(UTN FRBA)
							</li>
                            <li className="flex items-center">
								<span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
								Developer Front End con React.
                                (240 hs Gobierno de la Ciudad)
							</li>
							<li className="flex items-center">
								<span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
								Professional Front End Developer(250 horas UTN FRBA)
							</li>
							<li className="flex items-center">
								<span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
								AWS Cloud Practitioner(100 horas Amazon)
							</li>
						</ul>
					</div>

					<div className="bg-gradient-to-br from-accent-50 to-accent-100 p-8 rounded-2xl">
						<h3 className="text-2xl font-bold text-gray-900 mb-4">
							📚 El aprendizaje nunca para!
						</h3>
						<p className="text-gray-700 mb-4">
							Siempre estoy aprendiendo nuevas tecnologías y
							mejorando mis habilidades existentes.
						</p>
						<div className="text-sm text-gray-600">
							<span className="inline-block bg-white px-3 py-1 rounded-full mr-2 mb-2">
								Java 
							</span>
							<span className="inline-block bg-white px-3 py-1 rounded-full mr-2 mb-2">
								Spring Boot
							</span>
							<span className="inline-block bg-white px-3 py-1 rounded-full mr-2 mb-2">
								Maven
							</span>
                            <span className="inline-block bg-white px-3 py-1 rounded-full mr-2 mb-2">
								Angular
							</span>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Skills;
