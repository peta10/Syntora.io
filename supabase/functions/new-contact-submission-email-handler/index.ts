// Supabase Edge Function: new-contact-submission-email-handler (using Resend)

const TO_EMAIL = "parker@syntora.io"; // Destination email address

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
  const RESEND_FROM_EMAIL = Deno.env.get("RESEND_FROM_EMAIL");

  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY secret is not set.");
    return new Response(JSON.stringify({ error: "Resend API key is not configured." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
  if (!RESEND_FROM_EMAIL) {
    console.error("RESEND_FROM_EMAIL secret is not set.");
    return new Response(JSON.stringify({ error: "Resend from email is not configured." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const payload = await req.json();
    console.log("Received webhook payload for contact_submissions:", JSON.stringify(payload, null, 2));

    if (payload.type !== "INSERT" || !payload.record) {
      console.error("Invalid payload structure or not an INSERT event for contact_submissions:", payload);
      return new Response("Invalid payload", { status: 400 });
    }

    const submission = payload.record;

    const subject = `New Contact Form Submission: ${submission.first_name || ""} ${submission.last_name || ""}`;
    const bodyText = `
A new contact form has been submitted:

Name: ${submission.first_name || "N/A"} ${submission.last_name || "N/A"}
Company: ${submission.company_name || "N/A"}
Email: ${submission.email || "N/A"}
Contact Number: ${submission.contact_number || "N/A"}
Automation Request: ${submission.automation_request || "N/A"}

Submitted At: ${submission.created_at || new Date().toISOString()}
    `;

    const emailPayload = {
      from: RESEND_FROM_EMAIL,
      to: [TO_EMAIL],
      subject: subject,
      text: bodyText,
    };

    console.log("Sending email via Resend with payload:", JSON.stringify(emailPayload));

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailPayload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error sending email via Resend:", response.status, JSON.stringify(errorData));
      throw new Error(`Resend API error: ${errorData.message || response.statusText}`);
    }

    const data = await response.json();
    console.log(`Email sent successfully via Resend, ID: ${data.id} for contact submission ID: ${submission.id || "Unknown ID"}`);
    return new Response(JSON.stringify({ message: "Email sent successfully via Resend", resend_id: data.id }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    console.error("Error processing contact_submission request or sending email:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}); 