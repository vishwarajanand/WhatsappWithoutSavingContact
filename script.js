function generateLink() {
  const phoneNumber = document.getElementById('phoneNumber').value.trim();
  
  if (phoneNumber && /^\d+$/.test(phoneNumber)) { // Basic check for numeric input
    const link = `https://wa.me/${phoneNumber}`;
    document.getElementById('result').innerHTML = `<a href="${link}" target="_blank">Click here to chat on WhatsApp</a>`;
  } else {
    document.getElementById('result').innerHTML = `<p style="color: red;">Please enter a valid phone number.</p>`;
  }
}
