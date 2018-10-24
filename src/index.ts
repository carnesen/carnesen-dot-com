import { App, runAndExit, SiteType } from '@carnesen/google-cloud';

const projectId = 'carnesen-tmp';
const zoneName = 'carnesen-tmp-com';

const app = new App({
  context: {
    projectId,
    requireResolve: require.resolve,
  },
  props: [
    {
      zoneName,
      siteType: SiteType.nodejs,
      siteName: 'default',
      packageName: '@carnesen/redirector',
    },
    {
      zoneName,
      siteType: SiteType.nodejs,
      siteName: 'reveal-me',
      packageName: '@carnesen/reveal-me',
    },
    {
      zoneName,
      siteType: SiteType.nodejs,
      siteName: 'buzz',
      packageName: '@carnesen/buzz',
    },
    {
      zoneName,
      siteType: SiteType.nodejs,
      siteName: 'mathjs',
      packageName: '@carnesen/mathjs-app',
    },
    {
      zoneName,
      siteType: SiteType.static,
      siteName: 'www',
      packageName: '@carnesen/www',
    },
    {
      zoneName,
      siteType: SiteType.nodejs,
      siteName: 'meme-me',
      packageName: '@carnesen/meme-me',
    },
  ],
});

if (require.main === module) {
  runAndExit(async () => {
    await app.create();
  });
}
