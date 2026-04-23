import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const payload = await req.json()
    const { record, type, table, schema } = payload

    console.log(`Received ${type} event on ${schema}.${table}`)
    console.log('Appointment Data:', record)

    // Here you would integrate with a service like Resend, Twilio, or SendGrid
    // Example: Sending an email confirmation to the pet owner
    
    /*
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
      },
      body: JSON.stringify({
        from: 'Petwell Clinic <notifications@petwellclinic.com>',
        to: [record.email],
        subject: 'Appointment Confirmed - Petwell Clinic',
        html: `<strong>Hello ${record.owner_name},</strong><p>Your appointment for ${record.pet_name} on ${record.appointment_date} at ${record.appointment_time} is confirmed.</p>`,
      }),
    })
    */

    return new Response(
      JSON.stringify({ message: "Notification processed successfully", data: record }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400 
      }
    )
  }
})
