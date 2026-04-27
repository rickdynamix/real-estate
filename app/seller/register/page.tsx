import Link from 'next/link';

export default function SellerRegisterPage() {
  return (
    <main className="page-shell form-shell">
      <div className="auth-card">
        <p className="eyebrow">Seller registration</p>
        <h1>Create your seller account</h1>
        <p>Register to add listings, upload photos, and manage enquiries.</p>
        <form className="auth-form">
          <label>
            Full name
            <input type="text" placeholder="Your full name" />
          </label>
          <label>
            Agency name
            <input type="text" placeholder="Agency name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="seller@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="••••••••" />
          </label>
          <button type="button" className="button primary">Register account</button>
          <p className="form-footer">
            Already registered? <Link href="/seller/login">Sign in</Link>
          </p>
        </form>
      </div>
    </main>
  );
}
