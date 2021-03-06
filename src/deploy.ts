import { runAndExit } from '@carnesen/run-and-exit';
import { deployApp } from '@carnesen/google-cloud';

runAndExit(deployApp, {
	projectId: 'carnesen-209303',
	zoneName: 'carnesen',
	defaultSite: {
		siteType: 'nodejs',
		packageId: '@carnesen/redirector',
	},
	otherSites: [
		{
			siteType: 'nodejs',
			siteName: 'cli',
			packageId: '@carnesen/cli-website-server',
		},
		{
			siteType: 'nodejs',
			siteName: 'www',
			packageId: '@carnesen/www',
		},
		{
			siteType: 'nodejs',
			siteName: 'reveal-me',
			packageId: '@carnesen/reveal-me',
		},
		{
			siteType: 'nodejs',
			siteName: 'buzz',
			packageId: '@carnesen/buzz',
		},
		{
			siteType: 'nodejs',
			siteName: 'mathjs',
			packageId: '@carnesen/mathjs-app',
		},
		{
			siteType: 'nodejs',
			siteName: 'meme-me',
			packageId: '@carnesen/meme-me',
		},
	],
	requireResolve: require.resolve,
});
