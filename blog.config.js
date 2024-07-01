const BLOG = {
  title: 'PR!NC€ - Workfolio',
  author: 'Crafted by Prince',
  email: 'contact@elavarasan.me',
  link: 'https://elavarasan.me',
  newsletter: 'Prince Weekly',
  description: "a software developer, Proficient in JavaScript, oops concepts and ReactJs, he excel in front-end, app, and web development.",
  lang: 'en-US', 
  timezone: 'Asia/Calcutta', 
  appearance: 'dark', 
  font: 'sans-serif', 
  lightBackground: '#F6F8FA',
  darkBackground: '#212936', 
  path: '',
  since: 2024, 
  postsPerPage: 10,
  sortByDate: true,
  smtp_host : 'smtp.hostinger.com', 
  smtp_user : '1@princey.tech', 
  smtp_passwd : process.env.SMTP_PASSWD,
  pagesShow: {
    about: true,
    notes: true,
    projects: true,
    contact: true,
    books: true,
    gallery: true
  },
  showWeChatPay: true,
  previewImagesEnabled: true,
  autoCollapsedNavBar: false, 
  ogImageGenerateHost: process.env.COVER_LINK, 
  defaultCover: '/cover.jpg',
  socialLink: {
    linkedin: 'https://linkedin.com/in/elavarasa003',
    github: 'https://github.com/follow-prince',
    telegram: 'https://t.me/follow_prince',
    gmail: 'mailto:contact@elavarasan.me',
    leetcode: 'https://leetcode.com/iam-prince/',
  },
  seo: {
    keywords: ['Elavarasan', 'Prince', 'Blog', 'Developer', 'Portfolio', 'Workfolio', 'Next.js', 'Notion', 'Vercel', 'Tailwind CSS', 'SEO', 'Web Development', 'Frontend', 'Backend', 'Fullstack', 'React', 'Node.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SASS', 'SCSS', 'Markdown', 'API', 'GraphQL', 'REST', 'Database', 'MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Supabase', 'Serverless', 'Cloud', 'AWS', 'GCP', 'Azure', 'Netlify', 'Heroku', 'DigitalOcean', 'Vercel', 'GitHub', 'GitLab', 'Bitbucket', 'JAMstack', 'PWA', 'SPA', 'SSR', 'CSR', 'SEO', 'Sitemap', 'RSS', 'Web Vitals', 'Lighthouse', 'Performance', 'Accessibility', 'Best Practices', 'SEO', 'PWA', 'Web Development', 'Frontend', 'Backend', 'Fullstack', 'React', 'Node.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SASS', 'SCSS', 'Markdown', 'API', 'GraphQL', 'REST', 'Database', 'MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Supabase', 'Serverless', 'Cloud', 'AWS', 'GCP', 'Azure', 'Netlify', 'Heroku', 'DigitalOcean', 'Vercel', 'GitHub', 'GitLab', 'Bitbucket', 'JAMstack', 'PWA', 'SPA', 'SSR', 'CSR', 'SEO', 'Sitemap', 'RSS', 'Web Vitals', 'Lighthouse', 'Performance', 'Accessibility', 'Best Practices', 'SEO', 'PWA', 'Web Development', 'Frontend', 'Backend', 'Fullstack', 'React', 'Node.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SASS', 'SCSS', 'Markdown', 'API', 'GraphQL', 'REST', 'Database', 'MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Supabase', 'Serverless', 'Cloud', 'AWS', 'GCP', 'Azure', 'Netlify', 'Heroku', 'DigitalOcean', 'Vercel', 'GitHub', 'GitLab', 'Bitbucket', 'JAMstack', 'PWA', 'SPA', 'SSR', 'CSR', 'SEO'],
    googleSiteVerification: '' 
  },
  notionPageId: process.env.NOTION_PAGE_ID, 
  notionSpacesId: process.env.NOTION_SPACES_ID, 
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, 
  notionDomain: 'follow-prince.notion.site',
  telegramToken: process.env.TELEGRAM_TOKEN, 
  telegramChatId: '7069540511', 
  telegramChannelUrl: 'https://t.me/follow_prince_channel', 
  telegramChannelName: 'follow_prince_channel', 
  craftConfigShareUrl: 'https://follow-prince.craft.me/Y5LSHEHieO7inL', 
  analytics: {
    provider: 'ga', 
    ackeeConfig: {
      tracker: '', 
      dataAckeeServer: '', 
      domainId: '' 
    },
    cfConfig: {
      scriptUrl: 'https://static.cloudflareinsights.com/beacon.min.js', 
      token: '' 
    },
    gaConfig: {
      measurementId: 'G-5W1H07XLKR'
    },
    umamiConfig: {
      scriptUrl: '',
      websiteId: '' 
    }
  },
  comment: {
    provider: 'supacomments', 
    supaCommentsConfig: {
      supabaseUrl: 'https://wyoojspfzyvsotutatbi.supabase.co', 
      supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5b29qc3Bmenl2c290dXRhdGJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzNzg3MjksImV4cCI6MjAyNzk1NDcyOX0.CQzwlfKMAgmUC3PtEbhzziwB01Cpstwevz2iKe-WAjE'
    },
    utterancesConfig: {
      repo: 'follow-prince/follow-prince'
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' 
}
// export default BLOG
module.exports = BLOG
