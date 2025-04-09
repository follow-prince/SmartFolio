const BLOG = {
  title: 'PR!NC€ - Workfolio',
  author: 'Crafted by Prince',
  email: 'elavarasa.003@gmail.com',
  link: 'https://princey.vercel.app',
  newsletter: 'Prince Weekly',
  description: "a React developer, Proficient in JavaScript, oops concepts and NextJs/ReactJs",
  lang: 'en-US', 
  timezone: 'Asia/Calcutta', 
  appearance: 'dark', 
  font: 'appleFont', 
  lightBackground: '#F6F8FA',
  darkBackground: '#212936', 
  path: '',
  since: 2023, 
  postsPerPage: 100000,
  sortByDate: true,
  smtp_host : '`smtp.hostinger.com`', 
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
    keywords: ['Elavarasan', 'Prince', 'Blog', 'Developer', 'Portfolio', 'React', 'NextJs'],
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
      measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    },
    umamiConfig: {
      scriptUrl: '',
      websiteId: '' 
    }
  },
  comment: {
    provider: 'supacomments', 
    supaCommentsConfig: {
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL, 
      supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    },
    utterancesConfig: {
      repo: 'follow-prince/follow-prince'
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' 
}
// export default BLOG
module.exports = BLOG
