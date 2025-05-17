import Document, { Html, Head, Main, NextScript } from 'next/document'
import BLOG from '@/blog.config'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang={BLOG.lang}>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
          <link rel='apple-touch-icon' sizes='192x192' href='/favicon.png' />
          <link rel='alternate' type='application/rss+xml' title='RSS 2.0' href='/feed' />
          
          <link
            rel='preload'
            as='style'
            href='https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap'
            media='all'
          />
          <noscript>
            <link
              rel='stylesheet'
              href='https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap'
            />
          </noscript>
          <script defer src="https://info.princey.me/script.js" data-website-id="293c1cac-e0ed-4d83-be38-c8e1c2bcda8d"></script>

          {BLOG.appearance === 'auto' ? (
            <>
              <meta
                name='theme-color'
                content={BLOG.lightBackground}
                media='(prefers-color-scheme: light)'
              />
              <meta
                name='theme-color'
                content={BLOG.darkBackground}
                media='(prefers-color-scheme: dark)'
              />
            </>
          ) : (
            <meta
              name='theme-color'
              content={
                BLOG.appearance === 'dark'
                  ? BLOG.darkBackground
                  : BLOG.lightBackground
              }
            />
          )}
        </Head>
        <body className='bg-day dark:bg-night scroll-smooth'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
