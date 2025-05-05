import { Client } from '@notionhq/client'

if (!process.env.NOTION_SECRET_DATABASE_KEY || !process.env.NOTION_DATABASE_ID) {
  throw new Error('Notion environment variables are not properly set')
}

const notion = new Client({ auth: process.env.NOTION_SECRET_DATABASE_KEY })
const databaseId = process.env.NOTION_DATABASE_CONTACT_ID

export async function createContactMessage({ name, email, message, purpose }) {
  return await notion.pages.create({
    parent: { database_id: databaseId },
    properties: {
      Name: {
        title: [{ text: { content: name } }]
      },
      Email: {
        rich_text: [{ text: { content: email } }]
      },
      Purpose: {
        select: { name: purpose }
      },
      Message: {
        rich_text: [{ text: { content: message } }]
      }
    }
  })
}
