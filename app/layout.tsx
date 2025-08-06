import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Ethan Chiu – Web Developer',
	description:
		"I'm Ethan Chiu, a full-stack developer focused on building modern, responsive, and AI-powered web experiences using technologies like React, Next.js, and LangChain.",
	keywords: [
		'Web Developer',
		'Full-Stack Developer',
		'React',
		'Next.js',
		'TypeScript',
		'JavaScript',
		'LangChain',
		'LLMs',
		'ChromaDB',
		'FastAPI',
		'Responsive Design',
		'AI-Powered Apps',
		'Modern Web Development',
	],
	authors: [{ name: 'Ethan Chiu' }],
	creator: 'Ethan Chiu',
	openGraph: {
		title: 'Ethan Chiu – Web Developer Portfolio',
		description:
			"Hi, I'm Ethan Chiu. Welcome to my portfolio — I create intelligent, interactive web apps powered by the latest AI and frontend tech.",
		url: 'https://your-domain.com', // Replace with your actual domain
		siteName: 'Ethan Chiu Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Ethan Chiu – Web Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Ethan Chiu – Web Developer',
		description:
			"I'm Ethan Chiu, a developer who crafts AI-integrated web experiences. Check out my work built with React, Next.js, and more.",
		creator: '@ethanchiu0520',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
