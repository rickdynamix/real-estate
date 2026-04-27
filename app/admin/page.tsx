'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Check if admin is logged in
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!isLoggedIn) {
      router.push('/admin/login');
      return;
    }

    // Get all enquiries
    const storedEnquiries = JSON.parse(localStorage.getItem('enquiries') || '[]');
    setEnquiries(storedEnquiries);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    router.push('/');
  };

  return (
    <main className="page-shell dashboard-shell">
      <div className="dashboard-header">
        <div>
          <p className="eyebrow">Admin panel</p>
          <h1>Control center</h1>
        </div>
        <button onClick={handleLogout} className="button secondary">Logout</button>
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
          <strong>{enquiries.length}</strong>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <h2>All enquiries</h2>
        </div>
        <div className="table-card">
          <div className="table-row header-row">
            <span>Property ID</span>
            <span>Buyer</span>
            <span>Message</span>
            <span>Date</span>
          </div>
          {enquiries.map((enquiry: any, index: number) => (
            <div key={index} className="table-row">
              <span>{enquiry.propertyId}</span>
              <span>{enquiry.name} ({enquiry.email})</span>
              <span>{enquiry.message}</span>
              <span>{new Date(enquiry.date).toLocaleDateString()}</span>
            </div>
          ))}
          {enquiries.length === 0 && (
            <div className="table-row">
              <div style={{ gridColumn: '1 / -1', textAlign: 'center' }}>No enquiries</div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
