import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const CLINIC_EMAIL = 'motivebuilders@gmail.com'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS Preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { 
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }

  try {
    const payload = await req.json()
    const record = payload.record || payload // Handle both raw JSON and Supabase Webhook payload

    if (!record) {
      throw new Error("No record data found in request")
    }

    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured")
    }

    // Mapping fields to be robust (handles both snake_case from DB and camelCase from potential direct calls)
    const ownerName = record.owner_name || record.ownerName || 'Valued Client'
    const petName = record.pet_name || record.petName || 'Your Pet'
    const petType = record.pet_type || record.petType || 'N/A'
    const petAge = record.pet_age || record.petAge || 'N/A'
    const phone = record.phone || 'N/A'
    const email = record.email || 'N/A'
    const service = record.service || 'General Consultation'
    const preferredDate = record.preferred_date || record.preferredDate || 'TBD'
    const preferredTime = record.preferred_time || record.preferredTime || 'TBD'
    const notes = record.notes || 'No special requirements mentioned.'

    console.log(`Sending notification for appointment: ${petName} (${ownerName})`)

    // Setup Resend request
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Petwell Clinic <onboarding@resend.dev>',
        to: [CLINIC_EMAIL],
        subject: `🐾 New Appointment: ${petName} (${ownerName})`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                .container { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #E9E6E2; padding: 20px 0; }
                .email-card { background-color: #FFFFFF; border-radius: 12px; overflow: hidden; margin: 0 20px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
                .header { background-color: #0F2F4B; padding: 40px 32px; text-align: center; color: #FFFFFF; }
                .header h1 { margin: 0; font-size: 22px; font-weight: 300; letter-spacing: 4px; text-transform: uppercase; color: white; }
                .header .tagline { margin-top: 10px; font-size: 11px; font-weight: 600; opacity: 0.8; letter-spacing: 2px; color: white; }
                .body { padding: 40px 32px; }
                .section-header { margin-bottom: 24px; display: flex; align-items: center; }
                .section-header span { font-size: 11px; font-weight: 800; color: #2D9C64; text-transform: uppercase; letter-spacing: 2px; }
                .section-header .line { flex: 1; height: 1px; background-color: #E9E6E2; margin-left: 15px; }
                .info-row { display: flex; margin-bottom: 15px; }
                .info-label { width: 120px; font-size: 12px; font-weight: 600; color: #9FB1C1; text-transform: uppercase; }
                .info-value { flex: 1; font-size: 14px; font-weight: 500; color: #0F2F4B; }
                .highlight-box { background-color: #FDF8F3; border-radius: 8px; padding: 20px; margin-top: 30px; border-left: 4px solid #2D9C64; }
                .highlight-title { font-size: 11px; font-weight: 800; color: #2D9C64; margin-bottom: 10px; text-transform: uppercase; }
                .highlight-text { font-size: 13px; color: #0F2F4B; line-height: 1.6; }
                .service-pill { display: inline-block; padding: 4px 12px; background-color: #0F2F4B; color: white; border-radius: 20px; font-size: 12px; font-weight: 700; }
                .footer { text-align: center; padding: 30px; }
                .footer-text { font-size: 10px; color: #9FB1C1; letter-spacing: 1px; line-height: 1.8; text-transform: uppercase; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="email-card">
                  <div class="header">
                    <h1>Petwell Clinic</h1>
                    <div class="tagline">CARE • HEAL • THRIVE</div>
                  </div>
                  <div class="body">
                    <div class="section-header">
                      <span>Client Details</span>
                      <div class="line"></div>
                    </div>
                    <div class="info-row"><div class="info-label">Name</div><div class="info-value">${ownerName}</div></div>
                    <div class="info-row"><div class="info-label">Contact</div><div class="info-value" style="color: #2D9C64; font-weight: 700;">${phone}</div></div>
                    <div class="info-row"><div class="info-label">Email</div><div class="info-value">${email}</div></div>

                    <div class="section-header" style="margin-top: 40px;">
                      <span>Pet Information</span>
                      <div class="line"></div>
                    </div>
                    <div class="info-row"><div class="info-label">Pet Name</div><div class="info-value" style="color: #0F2F4B; font-weight: 700;">${petName}</div></div>
                    <div class="info-row"><div class="info-label">Species</div><div class="info-value" style="text-transform: capitalize;">${petType} (${petAge})</div></div>

                    <div class="section-header" style="margin-top: 40px;">
                      <span>Appointment</span>
                      <div class="line"></div>
                    </div>
                    <div class="info-row"><div class="info-label">Service</div><div class="info-value"><div class="service-pill">${service}</div></div></div>
                    <div class="info-row"><div class="info-label">Schedule</div><div class="info-value">${preferredDate} @ ${preferredTime}</div></div>

                    <div class="highlight-box">
                      <div class="highlight-title">Additional Notes</div>
                      <div class="highlight-text">${notes}</div>
                    </div>
                  </div>
                </div>
                <div class="footer">
                  <div class="footer-text">
                    PETWELL CLINIC • HYDERABAD<br/>
                    Professional Veterinary Services<br/>
                    © 2026
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
      }),
    })

    const data = await res.json()

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: res.ok ? 200 : res.status,
    })
  } catch (error) {
    console.error('Function error:', error.message)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})