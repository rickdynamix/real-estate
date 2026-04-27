import Link from 'next/link';

export default function SellerDashboardPage() {
  // Simulate logged in seller
  const sellerEmail = 'rohan@propease.com'; // In real app, from auth

  // Get enquiries for this seller's properties
  const enquiries = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('enquiries') || '[]') : [];

  return (
    <main className="page-shell dashboard-shell">
      <div className="dashboard-header">
        <div>
          <p className="eyebrow">Seller dashboard</p>
          <h1>Manage your listings</h1>
        </div>
        <Link href="/seller/login" className="button secondary">Sign out</Link>
      </div>

      <section className="dashboard-grid">
        <div className="stat-card">
          <p>Total Listings</p>
          <strong>12</strong>
        </div>
        <div className="stat-card">
          <p>Active enquiries</p>
          <strong>{enquiries.length}</strong>
        </div>
        <div className="stat-card">
          <p>Properties live</p>
          <strong>8</strong>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <h2>Your latest listings</h2>
        </div>
        <div className="table-card">
          <div className="table-row header-row">
            <span>Title</span>
            <span>Status</span>
            <span>Price</span>
            <span>Actions</span>
          </div>
          <div className="table-row">
            <span>Sunlit 3BHK near Central Park</span>
            <span>Active</span>
            <span>₹14,500,000</span>
            <span><Link href="/properties/sunlit-3bhk-near-central-park">View</Link></span>
          </div>
          <div className="table-row">
            <span>Luxury 4BHK Villa with Pool</span>
            <span>Active</span>
            <span>₹32,000,000</span>
            <span><Link href="/properties/luxury-4bhk-villa-with-pool">View</Link></span>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <h2>Recent enquiries</h2>
        </div>
        <div className="table-card">
          <div className="table-row header-row">
            <span>Property</span>
            <span>Buyer</span>
            <span>Message</span>
            <span>Date</span>
          </div>
          {enquiries.map((enquiry: any, index: number) => (
            <div key={index} className="table-row">
              <span>Property {enquiry.propertyId}</span>
              <span>{enquiry.name} ({enquiry.email})</span>
              <span>{enquiry.message}</span>
              <span>{new Date(enquiry.date).toLocaleDateString()}</span>
            </div>
          ))}
          {enquiries.length === 0 && (
            <div className="table-row">
              <span colSpan={4}>No enquiries yet</span>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
