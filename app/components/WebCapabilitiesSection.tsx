import React from 'react';

export const WebCapabilitiesSection = () => {
  const categories = [
    {
      title: 'AI / RAG Systems',
      icon: '🧠',
      features: [
        'LangChain tool-calling & memory',
        'ChromaDB vector search',
        'BGE embeddings & reranker',
        'Prompt engineering & eval'
      ],
    },
    {
      title: 'Backend & APIs',
      icon: '🧩',
      features: [
        'Python FastAPI microservices',
        'REST endpoints & OpenAPI',
        'CORS, health checks, HTTPS',
        'ASP.NET / Blazor (C#)'
      ],
    },
    {
      title: 'Frontend',
      icon: '🎨',
      features: [
        'React / Next.js',
        'TypeScript',
        'Tailwind CSS UI',
        'Vercel deploys'
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      features: [
        'AWS EC2 deployment',
        'Nginx reverse proxy (TLS)',
        'CI basics',
        'Logging & metrics'
      ],
    },
    {
      title: 'Data & Storage',
      icon: '🗂️',
      features: [
        'Azure SQL Server',
        'SQL & schema design',
        'PDF/DOCX ingestion',
        'Vector stores (ChromaDB)'
      ],
    },
    {
      title: 'Testing & Quality',
      icon: '✅',
      features: [
        'Jest integration tests',
        'Cucumber E2E',
        'Coverage targets (100%)',
        'Benchmarking latency/accuracy'
      ],
    },
    {
      title: 'AR / VR',
      icon: '🕶️',
      features: [
        'Unity + ARKit',
        'Gesture & multi-object UX',
        'Apple Vision Pro',
        'Input latency profiling'
      ],
    },
    {
      title: 'Collaboration',
      icon: '🏃',
      features: [
        'Git / GitHub Projects',
        'Scrum (biweekly sprints)',
        'Backlog & retros',
        'Docs & runbooks'
      ],
    },
  ];

  return (
    <section className="py-12 sm:py-20 px-4 bg-gray-100 dark:bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900 dark:text-white">
          What I Build With
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group bg-white dark:bg-[#161B22] p-6 rounded-lg hover:bg-gray-100 dark:hover:bg-[#21262D] transition-all shadow-sm hover:shadow-md"
            >
              <div className="text-3xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{category.title}</h3>
              <ul className="space-y-2">
                {category.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
