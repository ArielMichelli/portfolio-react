import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 2000));

		setIsSubmitting(false);
		setIsSubmitted(true);
		setFormData({ name: "", email: "", subject: "", message: "" });

		// Reset success message after 5 seconds
		setTimeout(() => setIsSubmitted(false), 5000);
	};

	const contactInfo = [
		{
			icon: Mail,
			title: "Email",
			value: "arielm-04@hotmail.com",
			href: "mailto:arielm-04@hotmail.com",
		},
		{
			icon: Phone,
			title: "Teléfono",
			value: "+1 (555) 123-4567",
			href: "tel:+15551234567",
		},
		{
			icon: MapPin,
			title: "Ubicación",
			value: "CABA, Argentina",
			href: "#",
		},
	];

	return (
		<section id="contact" className="section-padding bg-white">
			<div className="max-w-7xl mx-auto">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
						Ponte en{" "}
						<span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
							Contacto
						</span>
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						¿Tienes un proyecto en mente? Me encantaría escuchar tus
						ideas y ver cómo podemos trabajar juntos para hacerlas
						realidad.
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-16">
					{/* Contact Info */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<h3 className="text-3xl font-bold text-gray-900 mb-8">
							Hablemos
						</h3>
						<p className="text-gray-600 mb-8 text-lg">
							Estoy siempre abierto a discutir nuevas
							oportunidades, proyectos interesantes y
							colaboraciones creativas.
						</p>

						<div className="space-y-6">
							{contactInfo.map((info, index) => (
								<motion.a
									key={info.title}
									href={info.href}
									className="flex items-center group"
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{
										delay: index * 0.1,
										duration: 0.6,
									}}
									viewport={{ once: true }}
									whileHover={{ x: 10 }}
								>
									<div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mr-4">
										<info.icon className="w-6 h-6 text-white" />
									</div>
									<div>
										<h4 className="font-semibold text-gray-900 group-hover:text-primary-500 transition-colors">
											{info.title}
										</h4>
										<p className="text-gray-600">
											{info.value}
										</p>
									</div>
								</motion.a>
							))}
						</div>

						{/* Social Links */}
						<motion.div
							className="mt-12"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4, duration: 0.8 }}
							viewport={{ once: true }}
						>
							<h4 className="text-xl font-semibold text-gray-900 mb-4">
								Sígueme en:
							</h4>
							<div className="flex space-x-4">
								{[
									{
										name: "GitHub",
										href: "https://github.com/ArielMichelli",
										color: "from-gray-700 to-gray-800",
									},
									{
										name: "LinkedIn",
										href: "https://www.linkedin.com/in/ariel-michelli/",
										color: "from-blue-600 to-blue-700",
									},
									{
										name: "Twitter",
										href: "#",
										color: "from-blue-400 to-blue-500",
									},
								].map((social) => (
									<motion.a
										key={social.name}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className={`px-6 py-3 bg-gradient-to-r ${social.color} text-white rounded-lg font-medium hover:shadow-lg transition-shadow`}
										whileHover={{ scale: 1.05, y: -2 }}
										whileTap={{ scale: 0.95 }}
									>
										{social.name}
									</motion.a>
								))}
							</div>
						</motion.div>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<div className="bg-gray-50 p-8 rounded-2xl">
							<h3 className="text-2xl font-bold text-gray-900 mb-6">
								Envíame un mensaje
							</h3>

							{isSubmitted ? (
								<motion.div
									className="text-center py-12"
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.6 }}
								>
									<CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
									<h4 className="text-2xl font-bold text-gray-900 mb-2">
										¡Mensaje Enviado!
									</h4>
									<p className="text-gray-600">
										Gracias por contactarme. Te responderé
										pronto.
									</p>
								</motion.div>
							) : (
								<form
									onSubmit={handleSubmit}
									className="space-y-6"
								>
									<div className="grid md:grid-cols-2 gap-6">
										<motion.div
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{
												delay: 0.1,
												duration: 0.6,
											}}
											viewport={{ once: true }}
										>
											<label
												htmlFor="name"
												className="block text-sm font-medium text-gray-700 mb-2"
											>
												Nombre *
											</label>
											<input
												type="text"
												id="name"
												name="name"
												value={formData.name}
												onChange={handleChange}
												required
												className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
												placeholder="Tu nombre"
											/>
										</motion.div>

										<motion.div
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{
												delay: 0.2,
												duration: 0.6,
											}}
											viewport={{ once: true }}
										>
											<label
												htmlFor="email"
												className="block text-sm font-medium text-gray-700 mb-2"
											>
												Email *
											</label>
											<input
												type="email"
												id="email"
												name="email"
												value={formData.email}
												onChange={handleChange}
												required
												className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
												placeholder="tu@email.com"
											/>
										</motion.div>
									</div>

									<motion.div
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{
											delay: 0.3,
											duration: 0.6,
										}}
										viewport={{ once: true }}
									>
										<label
											htmlFor="subject"
											className="block text-sm font-medium text-gray-700 mb-2"
										>
											Asunto *
										</label>
										<input
											type="text"
											id="subject"
											name="subject"
											value={formData.subject}
											onChange={handleChange}
											required
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
											placeholder="¿En qué puedo ayudarte?"
										/>
									</motion.div>

									<motion.div
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{
											delay: 0.4,
											duration: 0.6,
										}}
										viewport={{ once: true }}
									>
										<label
											htmlFor="message"
											className="block text-sm font-medium text-gray-700 mb-2"
										>
											Mensaje *
										</label>
										<textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleChange}
											required
											rows={6}
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
											placeholder="Cuéntame sobre tu proyecto..."
										/>
									</motion.div>

									<motion.button
										type="submit"
										disabled={isSubmitting}
										className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:from-primary-600 hover:to-accent-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{
											delay: 0.5,
											duration: 0.6,
										}}
										viewport={{ once: true }}
										whileHover={{
											scale: isSubmitting ? 1 : 1.02,
										}}
										whileTap={{
											scale: isSubmitting ? 1 : 0.98,
										}}
									>
										{isSubmitting ? (
											<>
												<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
												<span>Enviando...</span>
											</>
										) : (
											<>
												<Send className="w-5 h-5" />
												<span>Enviar Mensaje</span>
											</>
										)}
									</motion.button>
								</form>
							)}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
