import PropertyFilter from '../components/PropertyFilter';
import { properties } from '../lib/properties';

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">PropEase</p>
          <h1>Modern real estate browsing for buyers and sellers.</h1>
          <p className="lead">
            Discover homes, create listings, manage properties, and share offers with a powerful Next.js experience.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/properties/sunlit-3bhk-near-central-park">Browse Listings</a>
            <a className="button secondary" href="/seller/login">Seller Login</a>
          </div>
        </div>
        <div className="hero-panel">
          <div className="stat-card">
            <h2>350+</h2>
            <p>Trusted properties</p>
          </div>
          <div className="stat-card">
            <h2>24/7</h2>
            <p>Buyer enquiries supported</p>
          </div>
          <div className="stat-card">
            <h2>15+</h2>
            <p>Nearby amenities shown</p>
          </div>
        </div>
      </section>

      <section className="section-grid">
        <div>
          <h2>Search, filter, and find your next property fast</h2>
          <p>
            Built for modern mobile-first browsing, PropEase delivers curated property cards, detailed listings,
            and intuitive search filters without delay.
          </p>
        </div>
        <div className="feature-grid">
          <div className="feature-card">
            <strong>Property browsing</strong>
            <span>Grid view with price, location, and type.</span>
          </div>
          <div className="feature-card">
            <strong>Seller dashboard</strong>
            <span>Manage listings, enquiries, and status.</span>
          </div>
          <div className="feature-card">
            <strong>360° tours</strong>
            <span>Embed virtual tours and interactive maps.</span>
          </div>
          <div className="feature-card">
            <strong>Admin tools</strong>
            <span>Monitor sellers, approve accounts, and remove listings.</span>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <h2>Featured properties</h2>
          <p>Filter by location, budget, bedrooms, and property type.</p>
        </div>
        <PropertyFilter initialProperties={properties} />
      </section>
    </main>
  );
}
