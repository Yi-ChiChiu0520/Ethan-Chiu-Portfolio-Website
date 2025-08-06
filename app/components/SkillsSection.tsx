import React from 'react';

export const SkillsSection = () => {
	return (
		<section className="py-12 sm:py-20 px-4 bg-gray-100 dark:bg-[#161B22]">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center text-gray-900 dark:text-white">Technical Expertise</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
					{[
						{
							category: 'Full-Stack & Frontend',
							skills: [
								{ name: 'React & Next.js', level: 95 },
								{ name: 'TypeScript & JSX', level: 90 },
								{ name: 'Tailwind CSS', level: 90 },
								{ name: 'Responsive UI Design', level: 92 },
							],
							icon: '💻',
							color: 'from-blue-500 to-blue-700',
						},
						{
							category: 'Backend & DevOps',
							skills: [
								{ name: 'FastAPI (Python)', level: 93 },
								{ name: 'REST API Design', level: 90 },
								{ name: 'AWS EC2', level: 88 },
								{ name: 'Vercel Deployment', level: 90 },
							],
							icon: '⚙️',
							color: 'from-green-500 to-green-700',
						},
						{
							category: 'AI & LLM Integration',
							skills: [
								{ name: 'LangChain & LangGraph', level: 95 },
								{ name: 'OpenAI API (GPT-4o)', level: 95 },
								{ name: 'ChromaDB (Vector Store)', level: 90 },
								{ name: 'AI Agent Architecture', level: 93 },
							],
							icon: '🧠',
							color: 'from-purple-500 to-purple-700',
						},
					].map((category) => (
						<div
							key={category.category}
							className="bg-white dark:bg-[#21262D] rounded-lg p-6 transform hover:scale-[1.02] transition-all shadow-sm hover:shadow-md"
						>
							<div className="flex items-center gap-3 mb-6">
								<span className="text-3xl">{category.icon}</span>
								<h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.category}</h3>
							</div>
							<div className="space-y-4">
								{category.skills.map((skill) => (
									<div key={skill.name}>
										<div className="flex justify-between text-sm mb-1">
											<span className="text-gray-700 dark:text-white">{skill.name}</span>
											<span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
										</div>
										<div className="h-2 bg-gray-100 dark:bg-[#30363D] rounded-full overflow-hidden">
											<div className={`h-full bg-gradient-to-r ${category.color} animate-expand origin-left`} style={{ width: `${skill.level}%` }}></div>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
