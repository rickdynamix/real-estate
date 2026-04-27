'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate admin login - hardcoded credentials
    if (email === 'admin@propease.com' && password === 'admin123') {
      localStorage.setItem('adminLoggedIn', 'true');
      router.push('/admin');
    } else {
      setError('Invalid admin credentials');
    }
  };

  return (
    <main className="page-shell form-shell">
      <div className="auth-card">
        <p className="eyebrow">Admin access</p>
        <h1>Admin login</h1>
        <p>Access the admin control panel to manage sellers and monitor enquiries.</p>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              placeholder="admin@propease.com"
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
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="button primary">Sign in as admin</button>
          <p className="form-footer">
            <Link href="/">Return to marketplace</Link>
          </p>
        </form>
      </div>
    </main>
  );
}