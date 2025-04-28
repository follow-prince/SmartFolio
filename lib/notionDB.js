import { Client } from '@notionhq/client';

// Initialize Notion client
const notion = new Client({ auth: process.env.NOTION_SECRET_DATABASE_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

// Helper function to validate environment variables
function validateEnv() {
  if (!process.env.NOTION_SECRET_DATABASE_KEY) {
    throw new Error('NOTION_SECRET_DATABASE_KEY is not set in environment variables');
  }
  if (!process.env.NOTION_DATABASE_ID) {
    throw new Error('NOTION_DATABASE_ID is not set in environment variables');
  }
}

// Helper function for retrying on rate limits
async function withRetry(fn, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (error.status === 429 && i < retries - 1) {
        await new Promise((resolve) => setTimeout(resolve, delay * (i + 1)));
        continue;
      }
      throw error;
    }
  }
}

// Fetch preferences
export async function getPreferences() {
  try {
    validateEnv();
    const response = await withRetry(() =>
      notion.databases.query({
        database_id: databaseId,
      })
    );
    return response.results.map((page) => ({
      id: page.id,
      'Created time': page.properties['Created time'].created_time,
      Type: page.properties.Type.select?.name || null,
      Value: page.properties.Value.rich_text[0]?.plain_text || '',
      Setting: page.properties.Setting.title[0]?.plain_text || '',
    }));
  } catch (error) {
    throw new Error(`Notion API error: ${error.message}${error.status ? ` (Status: ${error.status})` : ''}`);
  }
}

// Create preference
export async function createPreference(data) {
  try {
    validateEnv();
    return await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Setting: { title: [{ text: { content: data.setting } }] },
        Value: { rich_text: [{ text: { content: data.value } }] },
        ...(data.type && { Type: { select: { name: data.type } } }),
      },
    });
  } catch (error) {
    throw new Error(`Failed to create preference: ${error.message}`);
  }
}

// Update preference
export async function updatePreference(id, value) {
  try {
    validateEnv();
    return await notion.pages.update({
      page_id: id,
      properties: {
        Value: { rich_text: [{ text: { content: value } }] },
      },
    });
  } catch (error) {
    throw new Error(`Failed to update preference: ${error.message}`);
  }
}

// Delete preference
export async function deletePreference(id) {
  try {
    validateEnv();
    return await notion.pages.update({
      page_id: id,
      archived: true,
    });
  } catch (error) {
    throw new Error(`Failed to delete preference: ${error.message}`);
  }
}