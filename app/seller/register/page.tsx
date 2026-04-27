'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SellerRegisterPage() {
  const [name, setName] = useState('');
  const [agency, setAgency] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate registration
    localStorage.setItem('sellerRegistered', JSON.stringify({ name, agency, email, password }));
    setSuccess(true);
    setTimeout(() => router.push('/seller/login'), 2000);
  };

  if (success) {
    return (
      <main className="page-shell form-shell">
        <div className="auth-card">
          <h1>Registration successful!</h1>
          <p>Redirecting to login...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="page-shell form-shell">
      <div className="auth-card">
        <p className="eyebrow">Seller registration</p>
        <h1>Create your seller account</h1>
        <p>Register to add listings, upload photos, and manage enquiries.</p>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Full name
            <input
              type="text"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Agency name
            <input
              type="text"
              placeholder="Agency name"
              value={agency}
              onChange={(e) => setAgency(e.target.value)}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              placeholder="seller@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="button primary">Register account</button>
          <p className="form-footer">
            Already registered? <Link href="/seller/login">Sign in</Link>
          </p>
        </form>
      </div>
    </main>
  );
}
