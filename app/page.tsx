import { ThemeProvider } from './components/theme/ThemeProvider';
import { PortfolioPageClient } from './components/PortfolioPageClient';

export default function WebDeveloperPortfolio() {
	return (
		<ThemeProvider>
			<PortfolioPageClient />
		</ThemeProvider>
	);
}
