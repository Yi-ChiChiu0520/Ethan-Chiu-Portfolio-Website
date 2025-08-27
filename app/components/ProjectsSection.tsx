import React from 'react';
import Image from 'next/image';

export const ProjectsSection = () => {
	return (
		<section id="work" className="py-12 sm:py-20 px-4 bg-white dark:bg-[#161B22] scroll-mt-20">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900 dark:text-white">Featured Projects</h2>
				<div className="space-y-8 sm:space-y-12">
					{[
						{
							title: 'Syllabus RAG Assistant',
							description: 'AI-powered academic assistant that answers questions about course syllabi with instant, accurate responses from uploaded materials.',
							metrics: {
								accuracy: 95,
								speed: 98,
								relevance: 94,
							},
							techDetails: [
								'OpenAI GPT-4o with RAG (Retrieval-Augmented Generation)',
								'FastAPI backend with document processing pipeline',
								'ChromaDB vector database for semantic search',
								'Next.js frontend with real-time chat interface',
							],
							image: '/syllabus-rag-assistant-preview.png',
							link: 'https://syllabus-rag-assistant.vercel.app/',
						},
						{
							title: 'Calendar AI Agent',
							description: 'Natural language scheduling assistant powered by LLMs and Google Calendar integration.',
							metrics: {
								performance: 96,
								accessibility: 100,
								seo: 100,
							},
							techDetails: [
								'FastAPI backend with OpenAI GPT-4o',
								'Google Calendar + Email integration',
								'JWT auth & CORS-secured API',
								'React + Tailwind frontend deployed on Vercel',
							],
							image: '/calendar-ai-preview.png',
							link: 'https://calendar-ai-agent-web-app.vercel.app',
						},
					].map((project) => (
						<a
							key={project.title}
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="block transform transition duration-300 hover:scale-[1.02] bg-gray-100 dark:bg-[#21262D] rounded-lg overflow-hidden shadow-sm hover:shadow-md"
						>
							<div className="grid grid-cols-1 lg:grid-cols-2">
								<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
									<h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
									<p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{project.description}</p>

									{/* Performance Metrics */}
									<div className="space-y-3">
										<h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Performance Metrics</h4>
										<div className="grid grid-cols-3 gap-2 sm:gap-4">
											{Object.entries(project.metrics).map(([key, value]) => (
												<div key={key} className="text-center">
													<div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{value}</div>
													<div className="text-sm text-gray-600 dark:text-gray-400 capitalize">{key}</div>
												</div>
											))}
										</div>
									</div>

									{/* Technical Implementation */}
									<div>
										<h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-white">Technical Implementation</h4>
										<ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
											{project.techDetails.map((detail) => (
												<li key={detail} className="flex items-center gap-2">
													<span className="text-green-600 dark:text-green-400">▹</span>
													<span className="text-gray-700 dark:text-gray-300">{detail}</span>
												</li>
											))}
										</ul>
									</div>

									{/* Visit Button */}
									<div>
										<a
											href={project.link}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-block mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition"
										>
											Visit Site ↗
										</a>
									</div>
								</div>

								<div className="relative h-full min-h-[300px] lg:min-h-full">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover"
										sizes="(max-width: 1024px) 100vw, 50vw"
									/>
									<div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-gray-100 dark:from-[#21262D] via-transparent to-transparent lg:via-gray-50/20 dark:lg:via-[#21262D]/20 lg:to-gray dark:lg:to-[#21262D]/40"></div>
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
};