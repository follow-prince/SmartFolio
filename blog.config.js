const BLOG = {
  title: 'PR!NC€ - Workfolio',
  author: 'Crafted by Prince',
  email: 'elavarasa.003@gmail.com',
  link: 'https://princey.me',
  newsletter: 'Prince Weekly',
  description: "a Software Engineer, Proficient in JavaScript, oops concepts and NextJs/ReactJs",
  lang: 'en-US', 
  timezone: 'Asia/Calcutta', 
  appearance: 'light', 
  font: 'sans-serif', 
  lightBackground: '#e8e8e8',
  darkBackground: '#212936', 
  path: '',
  since: 2023, 
  postsPerPage: 10,
  sortByDate: true,
  smtp_host : '`smtp.hostinger.com`', 
  smtp_user : '1@princey.tech', 
  smtp_passwd : process.env.SMTP_PASSWD,
  pagesShow: {
    about: true,
    notes: false,
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
    telegram: 'https://t.me/the_princey',
    gmail: 'mailto:elavarasa.003@gmail.com',
    leetcode: 'https://leetcode.com/iam-prince',
    blueSky:'https://bsky.app/profile/princey.me'
  },
  seo: {
    keywords: ['Elavarasan', 'Prince', 'Blog', 'Software Engineer', 'Portfolio'],
    googleSiteVerification: '' 
  },
  notionPageId: process.env.NOTION_PAGE_ID, 
  notionSpacesId: process.env.NOTION_SPACES_ID, 
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, 
  notionDomain: 'follow-prince.notion.site',
  telegramToken: process.env.TELEGRAM_TOKEN, 
  telegramChatId: '7069540511', 
  telegramChannelUrl: 'https://t.me/the_princey', 
  telegramChannelName: 'they_princey', 
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
    provider: 'utterances', 
    utterancesConfig: {
      repo: 'follow-prince/follow-prince'
    }
  },

 landingPageCarousel: [
  {
    title: "The Growth Mindset",
    subtitle: "Curious. Persistent. Evolving.",
    image: "CodingJourney",
    description: "From a non-tech background to full-stack development — my journey is built on curiosity, grit, and constant self-improvement."
  },
  {
    title: "End-to-End Developer",
    subtitle: "Frontend. Backend. Cloud.",
    image: "FullStack",
    description: "I design user interfaces, write backend logic, and deploy to scalable cloud infrastructure — building seamless experiences across the stack."
  },
  {
    title: "Build With Purpose",
    subtitle: "Build. Automate. Improve.",
    image: "Systems",
    description: "I believe in creating systems that not only work — but evolve, automate repetitive tasks, and become smarter over time."
  },
  {
    title: "Open Source DNA",
    subtitle: "Share. Reuse. Scale.",
    image: "OpenSource",
    description: "I contribute to and maintain open-source tools, believing in collaboration, transparency, and reusable design systems for scale."
  },
  {
    title: "Community First",
    subtitle: "Mentor. Volunteer. Listener.",
    image: "Community",
    description: "Whether it's guiding beginners or collaborating at dev meetups, I stay active in the developer community to share and grow together."
  },
  {
    title: "Always Learning",
    subtitle: "Read. Reflect. Learn.",
    image: "Learning",
    description: "I explore new ideas through books, blogs, and real-world projects — always upgrading my mindset and skillset."
  },
  {
    title: "Tech Storyteller",
    subtitle: "Write. Speak. Inspire.",
    image: "TechStoryteller",
    description: "I turn complex ideas into simple words — through blog posts, tutorials, and meaningful conversations in tech spaces."
  },
  {
    title: "Solutions That Matter",
    subtitle: "Understand. Simplify. Deliver.",
    image: "ProblemSolver",
    description: "I solve real-world problems by listening deeply, breaking complexity down, and delivering efficient, thoughtful solutions."
  }
],





  isProd: process.env.VERCEL_ENV === 'production' 
}
// export default BLOG
module.exports = BLOG
