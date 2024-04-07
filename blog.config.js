const BLOG = {
  title: 'PR!NC€ - Workfolio',
  author: 'Developed by Elavarasan',
  email: 'contact@elavarasan.me',
  link: 'https://elavarasan.me',
  newsletter: 'Prince Weekly',
  description: 'A static blog build on top of Notion and Next.js',
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  timezone: 'Asia/Calcutta', // See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for all options.
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#F6F8FA', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#212936', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy  in a folder
  since: 2024, // If leave this empty, current year will be used.
  postsPerPage: 10,
  sortByDate: true,
  pagesShow: {
    newsletter: true,
    notes: true,
    projects: true,
    contact: true,
    books: true,
    friends: true
  },
  showWeChatPay: true,
  previewImagesEnabled: true,
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateHost: 'og-zl.vercel.app', // The link to generate OG image, don't end with a slash
  defaultCover: '/cover.jpg',
  socialLink: {
    twitter: 'https://twitter.com/elavarasan_me',
    github: 'https://github.com/follow-prince',
    telegram: 'https://t.me/follow_prince'
  },
  seo: {
    keywords: ['Elavarasan', 'Prince', 'Blog', 'Developer', 'Portfolio', 'Workfolio', 'Next.js', 'Notion', 'Vercel', 'Tailwind CSS', 'SEO', 'Web Development', 'Frontend', 'Backend', 'Fullstack', 'React', 'Node.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SASS', 'SCSS', 'Markdown', 'API', 'GraphQL', 'REST', 'Database', 'MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Supabase', 'Serverless', 'Cloud', 'AWS', 'GCP', 'Azure', 'Netlify', 'Heroku', 'DigitalOcean', 'Vercel', 'GitHub', 'GitLab', 'Bitbucket', 'JAMstack', 'PWA', 'SPA', 'SSR', 'CSR', 'SEO', 'Sitemap', 'RSS', 'Web Vitals', 'Lighthouse', 'Performance', 'Accessibility', 'Best Practices', 'SEO', 'PWA', 'Web Development', 'Frontend', 'Backend', 'Fullstack', 'React', 'Node.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SASS', 'SCSS', 'Markdown', 'API', 'GraphQL', 'REST', 'Database', 'MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Supabase', 'Serverless', 'Cloud', 'AWS', 'GCP', 'Azure', 'Netlify', 'Heroku', 'DigitalOcean', 'Vercel', 'GitHub', 'GitLab', 'Bitbucket', 'JAMstack', 'PWA', 'SPA', 'SSR', 'CSR', 'SEO', 'Sitemap', 'RSS', 'Web Vitals', 'Lighthouse', 'Performance', 'Accessibility', 'Best Practices', 'SEO', 'PWA', 'Web Development', 'Frontend', 'Backend', 'Fullstack', 'React', 'Node.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SASS', 'SCSS', 'Markdown', 'API', 'GraphQL', 'REST', 'Database', 'MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Supabase', 'Serverless', 'Cloud', 'AWS', 'GCP', 'Azure', 'Netlify', 'Heroku', 'DigitalOcean', 'Vercel', 'GitHub', 'GitLab', 'Bitbucket', 'JAMstack', 'PWA', 'SPA', 'SSR', 'CSR', 'SEO'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS! Edit .env file!
  notionSpacesId: process.env.NOTION_SPACES_ID, // DO NOT CHANGE THIS! Edit .env file!
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  notionDomain: 'follow-prince.notion.site',
  telegramToken: process.env.TELEGRAM_TOKEN, // The token of your Telegram bot
  telegramChatId: '7069540511', // The chat id of your Telegram bot
  telegramChannelUrl: 'https://t.me/follow_prince_channel', // The link of your Telegram channel
  telegramChannelName: 'follow_prince_channel', // The name of your Telegram channel
  craftConfigShareUrl: 'https://follow-prince.craft.me/Y5LSHEHieO7inL', // The link to share your craft config
  analytics: {
    provider: 'ga', // Currently we support Google Analytics, Ackee, Umami and Cloudflare Insights, please fill with 'ga' or 'ackee' or 'umami' or 'cf', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.example.com/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.example.com , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    cfConfig: {
      scriptUrl: 'https://static.cloudflareinsights.com/beacon.min.js', // Default
      token: '' // Like '{"token": "xxxxxxxxxxxxxxxxxx"}'
    },
    gaConfig: {
      measurementId: 'G-5W1H07XLKR' // e.g: G-XXXXXXXXXX
    },
    umamiConfig: {
      scriptUrl: '', // The url of your Umami script
      websiteId: '' // The website id of your Umami instance
    }
  },
  comment: {
    // support provider: utterances, supacomments
    provider: 'supacomments', // leave it empty if you don't need any comment plugin
    supaCommentsConfig: {
      supabaseUrl: 'https://wyoojspfzyvsotutatbi.supabase.co', // The url of your Supabase instance
      supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5b29qc3Bmenl2c290dXRhdGJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzNzg3MjksImV4cCI6MjAyNzk1NDcyOX0.CQzwlfKMAgmUC3PtEbhzziwB01Cpstwevz2iKe-WAjE'
    },
    utterancesConfig: {
      repo: ''
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
// export default BLOG
module.exports = BLOG
