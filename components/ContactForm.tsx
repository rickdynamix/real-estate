'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store in localStorage as simulation
    const enquiry = { name, email, phone, message, date: new Date().toISOString(), type: 'contact' };
    const enquiries = JSON.parse(localStorage.getItem('enquiries') || '[]');
    enquiries.push(enquiry);
    localStorage.setItem('enquiries', JSON.stringify(enquiries));
    setSubmitted(true);
    // Reset form
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  if (submitted) {
    return <p className="success-message">Message sent successfully! We'll get back to you soon.</p>;
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="contact-phone">Phone</label>
        <input
          id="contact-phone"
          type="tel"
          placeholder="Your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          rows={4}
          placeholder="Tell us about your requirements..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" className="button primary">Send Message</button>
    </form>
  );
}