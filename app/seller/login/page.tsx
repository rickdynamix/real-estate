import Link from 'next/link';

export default function SellerLoginPage() {
  return (
    <main className="page-shell form-shell">
      <div className="auth-card">
        <p className="eyebrow">Seller access</p>
        <h1>Seller login</h1>
        <p>Access your listing dashboard, manage properties, and review enquiries.</p>
        <form className="auth-form">
          <label>
            Email
            <input type="email" placeholder="seller@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="••••••••" />
          </label>
          <button type="button" className="button primary">Sign in</button>
          <p className="form-footer">
            No account yet? <Link href="/seller/register">Register as seller</Link>
          </p>
        </form>
      </div>
    </main>
  );
}
