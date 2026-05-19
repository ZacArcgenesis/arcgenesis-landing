/**
 * Vercel serverless function — founding cohort application form
 * POST /api/apply
 * Body: { name: string, email: string, currentApproach: string, winDefinition: string }
 * Subscribes the advisor to the ConvertKit cohort form with custom fields.
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, currentApproach, winDefinition } = req.body ?? {}

  if (!name || typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ message: 'Name is required.' })
  }
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ message: 'A valid email address is required.' })
  }
  if (!currentApproach || typeof currentApproach !== 'string' || !currentApproach.trim()) {
    return res.status(400).json({ message: 'Please describe your current heir outreach approach.' })
  }
  if (!winDefinition || typeof winDefinition !== 'string' || !winDefinition.trim()) {
    return res.status(400).json({ message: 'Please describe what a win looks like for you.' })
  }

  const apiKey = process.env.VITE_CONVERTKIT_API_KEY
  const formId = process.env.VITE_CONVERTKIT_COHORT_FORM_ID

  if (!apiKey || !formId) {
    console.error('Missing ConvertKit environment variables')
    return res.status(500).json({ message: 'Server configuration error.' })
  }

  try {
    const ckRes = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: apiKey,
        email,
        first_name: name.trim(),
        fields: {
          current_heir_approach: currentApproach.trim(),
          win_definition: winDefinition.trim(),
        },
      }),
    })

    if (!ckRes.ok) {
      const body = await ckRes.json().catch(() => ({}))
      console.error('ConvertKit error:', body)
      return res.status(502).json({ message: 'Could not submit application. Please try again.' })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('apply handler error:', err)
    return res.status(500).json({ message: 'Server error. Please try again.' })
  }
}
