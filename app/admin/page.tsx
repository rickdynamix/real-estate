import Link from 'next/link';

export default function AdminPage() {
  return (
    <main className="page-shell dashboard-shell">
      <div className="dashboard-header">
        <div>
          <p className="eyebrow">Admin panel</p>
          <h1>Control center</h1>
        </div>
        <Link href="/" className="button secondary">Return to marketplace</Link>
      </div>

      <section className="dashboard-grid">
        <div className="stat-card">
          <p>Total sellers</p>
          <strong>42</strong>
        </div>
        <div className="stat-card">
          <p>Total properties</p>
          <strong>118</strong>
        </div>
        <div className="stat-card">
          <p>Open enquiries</p>
          <strong>37</strong>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <h2>Action items</h2>
        </div>
        <ul className="admin-actions">
          <li>Approve new seller accounts</li>
          <li>Review suspicious listings</li>
          <li>Disable inactive or inappropriate properties</li>
        </ul>
      </section>
    </main>
  );
}
