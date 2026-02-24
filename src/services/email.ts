// This would ideally be a server-side route, but here we provide a client-side wrapper
// that should call a backend function to avoid exposing the API key.

export async function sendContactEmail(formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}) {
  // In a real application, you would call your own API endpoint:
  // const response = await fetch('/api/send', { ... })

  // For training/demonstration purposes, we will mock the Resend call or
  // explain how to integrate it with a service like Formspree (which handles Resend)

  console.log("Sending email via Resend placeholder:", formData);

  // Example of what the body would look like for a Resend API call (SERVER SIDE):
  /*
  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: 'A.S.S Security <onboarding@resend.dev>',
    to: ['info@ass-security.de'],
    subject: `Neue Anfrage: ${formData.firstName} ${formData.lastName}`,
    html: `<p>Name: ${formData.firstName} ${formData.lastName}</p>
           <p>Email: ${formData.email}</p>
           <p>Telefon: ${formData.phone || 'N/A'}</p>
           <p>Nachricht: ${formData.message}</p>`
  });
  */

  // Using a 1.5s delay to simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return { success: true };
}
