import PropertyFilter from '../components/PropertyFilter';
import { properties } from '../lib/properties';

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">PropEase</p>
          <h1>Your trusted partner in real estate excellence</h1>
          <p className="lead">
            With over 15 years of experience in Mumbai, Bengaluru, and Chennai, PropEase connects buyers
            with their dream homes through personalized service and market expertise.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/properties/sunlit-3bhk-near-central-park">Browse Properties</a>
            <a className="button secondary" href="/seller/login">List Your Property</a>
          </div>
        </div>
        <div className="hero-panel">
          <div className="stat-card">
            <h2>500+</h2>
            <p>Happy families settled</p>
          </div>
          <div className="stat-card">
            <h2>15+</h2>
            <p>Years of experience</p>
          </div>
          <div className="stat-card">
            <h2>98%</h2>
            <p>Client satisfaction</p>
          </div>
        </div>
      </section>

      <section className="section-block about-section">
        <div className="about-grid">
          <div className="about-content">
            <h2>Why Choose PropEase?</h2>
            <p>
              Founded in 2011, PropEase has been at the forefront of real estate innovation in India.
              Our founder, Rajesh Kumar, brings decades of industry experience to ensure every client
              receives personalized attention and expert guidance.
            </p>
            <div className="features-list">
              <div className="feature-item">
                <strong>Expert Market Knowledge</strong>
                <span>In-depth understanding of local markets and pricing trends</span>
              </div>
              <div className="feature-item">
                <strong>End-to-End Support</strong>
                <span>From property search to final handover, we're with you every step</span>
              </div>
              <div className="feature-item">
                <strong>Verified Properties</strong>
                <span>All listings are thoroughly verified for authenticity and legal compliance</span>
              </div>
              <div className="feature-item">
                <strong>24/7 Customer Care</strong>
                <span>Dedicated support team available round the clock</span>
              </div>
            </div>
          </div>
          <div className="owner-card">
            <div className="owner-image">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" alt="Rajesh Kumar - Founder & CEO" />
            </div>
            <div className="owner-info">
              <h3>Rajesh Kumar</h3>
              <p>Founder & CEO</p>
              <p>"Our mission is to make property buying and selling a seamless, transparent experience for everyone."</p>
              <div className="owner-credentials">
                <span>📚 MBA in Real Estate</span>
                <span>🏆 Top Agent 2023</span>
                <span>⭐ 4.9/5 Client Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-grid">
        <div>
          <h2>Discover premium properties across major cities</h2>
          <p>
            From luxury villas in Bengaluru to modern apartments in Mumbai, explore our curated collection
            of verified properties. Filter by location, budget, and preferences to find your perfect match.
          </p>
        </div>
        <div className="feature-grid">
          <div className="feature-card">
            <strong>🏙️ Prime Locations</strong>
            <span>Properties in Mumbai, Bengaluru, and Chennai</span>
          </div>
          <div className="feature-card">
            <strong>✅ Verified Listings</strong>
            <span>All properties legally verified and documented</span>
          </div>
          <div className="feature-card">
            <strong>📱 Mobile-First</strong>
            <span>Seamless browsing on any device</span>
          </div>
          <div className="feature-card">
            <strong>🤝 Personal Service</strong>
            <span>Dedicated relationship managers for each client</span>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <h2>Featured Properties</h2>
          <p>Handpicked premium listings with exceptional value</p>
        </div>
        <PropertyFilter initialProperties={properties} />
      </section>

      <section className="section-block cta-section">
        <div className="cta-content">
          <h2>Ready to find your dream home?</h2>
          <p>Join hundreds of satisfied customers who found their perfect property with PropEase.</p>
          <div className="cta-actions">
            <a className="button primary" href="/properties/sunlit-3bhk-near-central-park">Start Browsing</a>
            <a className="button secondary" href="/seller/register">List Your Property</a>
          </div>
        </div>
      </section>
    </main>
  );
}
