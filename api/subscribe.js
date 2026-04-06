/**
 * Vercel serverless function — book download form
 * POST /api/subscribe
 * Body: { email: string }
 * Subscribes the email to the ConvertKit book form.
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { email } = req.body ?? {}

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ message: 'A valid email address is required.' })
  }

  const apiKey = process.env.VITE_CONVERTKIT_API_KEY
  const formId = process.env.VITE_CONVERTKIT_BOOK_FORM_ID

  if (!apiKey || !formId) {
    console.error('Missing ConvertKit environment variables')
    return res.status(500).json({ message: 'Server configuration error.' })
  }

  try {
    const ckRes = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ api_key: apiKey, email }),
    })

    if (!ckRes.ok) {
      const body = await ckRes.json().catch(() => ({}))
      console.error('ConvertKit error:', body)
      return res.status(502).json({ message: 'Could not subscribe. Please try again.' })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('subscribe handler error:', err)
    return res.status(500).json({ message: 'Server error. Please try again.' })
  }
}
