import { google } from 'googleapis'

export default async function handler(req, res) {
  try {
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_CREDS) {
      throw new Error('GOOGLE_SERVICE_ACCOUNT_CREDS not set')
    }

    const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_CREDS)

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/drive.readonly']
    })

    const authClient = await auth.getClient()
    const drive = google.drive({ version: 'v3', auth: authClient })

    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID
    if (!folderId || typeof folderId !== 'string' || folderId.trim() === '') {
      throw new Error('Invalid or missing GOOGLE_DRIVE_FOLDER_ID')
    }

    const response = await drive.files.list({
      q: `'${folderId}' in parents and trashed = false`,
      fields: 'files(id, name, mimeType)'
    })

    const files = (response.data.files || [])
      .map((file) => ({
        id: file.id,
        fileName: file.name.replace(/\s/g, ''),
        fileType: file.mimeType,
        url: `https://lh3.googleusercontent.com/d/${file.id}`
      }))
      .sort((a, b) =>
        a.fileName.localeCompare(b.fileName, undefined, {
          numeric: true,
          sensitivity: 'base'
        })
      )

    res.status(200).json(files)
  } catch (error) {
    console.error('Error fetching files:', error)
    res.status(500).json({ error: error.message })
  }
}
