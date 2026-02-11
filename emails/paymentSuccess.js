export function paymentSuccessEmail({ name, amount, paymentId }) {
  return `
    <h2>Hello ${name},</h2>
    <p>Your payment for <strong>₹${amount / 100}</strong> was successful.</p>
    <p><strong>Payment ID:</strong> ${paymentId}</p>
    <br/>
    <p>Thank you for your purchase!</p>
  `;
}
