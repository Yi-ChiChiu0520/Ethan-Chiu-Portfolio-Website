'use client';

import { useTheme } from './theme/ThemeProvider';
import { HeroSection } from './HeroSection';
import { SkillsSection } from './SkillsSection';
import { ProjectsSection } from './ProjectsSection';
import { WebCapabilitiesSection } from './WebCapabilitiesSection';
import { ContactSection } from './ContactSection';
import { ThemeToggle } from './theme/ThemeToggle';

export function PortfolioPageClient() {
	const { theme } = useTheme();

	return (
		<div className={theme}>
			<main className="min-h-screen bg-white text-gray-900 dark:bg-[#0D1117] dark:text-white">
				<ThemeToggle />
				<HeroSection />
				<SkillsSection />
				<ProjectsSection />
				<WebCapabilitiesSection />
				<ContactSection />
			</main>
		</div>
	);
}
