'use client';

import { useState } from 'react';

export default function EnquiryForm({ propertyId }: { propertyId: string }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store in localStorage as simulation
    const enquiry = { propertyId, name, email, message, date: new Date().toISOString() };
    const enquiries = JSON.parse(localStorage.getItem('enquiries') || '[]');
    enquiries.push(enquiry);
    localStorage.setItem('enquiries', JSON.stringify(enquiries));
    setSubmitted(true);
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
  };

  if (submitted) {
    return <p className="success-message">Enquiry sent successfully! The seller will contact you soon.</p>;
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Email
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Message
        <textarea
          rows={4}
          placeholder="I am interested in this property."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </label>
      <button type="submit" className="button primary">Send enquiry</button>
    </form>
  );
}