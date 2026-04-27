import PropertyFilter from '../components/PropertyFilter';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../lib/properties';

export default function HomePage() {
  // Get featured properties (first 3 active properties)
  const featuredProperties = properties.filter(p => p.status === 'Active').slice(0, 3);
  return (
    <main className="page-shell">
      {/* Hero Section with Background Image */}
      <section className="hero-section" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2000&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-overlay">
          <div className="hero-copy">
            <p className="eyebrow">🏠 PropEase Real Estate</p>
            <h1>Find Your Dream Home in India's Best Cities</h1>
            <p className="lead">
              Discover premium properties in Mumbai, Bengaluru, and Chennai. With over 15 years of experience,
              Rohan Gupta and his team provide personalized service to help you find the perfect property.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#featured-properties">
                <span>🔍</span> Explore Properties
              </a>
              <a className="button secondary" href="/seller/login">
                <span>📝</span> List Your Property
              </a>
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
        </div>
      </section>

      {/* About Section */}
      <section className="section-block about-section">
        <div className="about-grid">
          <div className="about-content">
            <h2>Why Choose PropEase?</h2>
            <p>
              Founded in 2011, PropEase has been at the forefront of real estate innovation in India.
              Our founder, Rohan Gupta, brings decades of industry experience to ensure every client
              receives personalized attention and expert guidance.
            </p>
            <div className="features-list">
              <div className="feature-item">
                <strong>🏠 Expert Market Knowledge</strong>
                <span>In-depth understanding of local markets and pricing trends</span>
              </div>
              <div className="feature-item">
                <strong>🤝 End-to-End Support</strong>
                <span>From property search to final handover, we're with you every step</span>
              </div>
              <div className="feature-item">
                <strong>✅ Verified Properties</strong>
                <span>All listings are thoroughly verified for authenticity and legal compliance</span>
              </div>
              <div className="feature-item">
                <strong>📞 24/7 Customer Care</strong>
                <span>Dedicated support team available round the clock</span>
              </div>
            </div>
          </div>
          <div className="owner-card">
            <div className="owner-image">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" alt="Rohan Gupta - Founder & CEO" />
            </div>
            <div className="owner-info">
              <h3>Rohan Gupta</h3>
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

      {/* Services Section */}
      <section className="section-grid">
        <div>
          <h2>Our Comprehensive Services</h2>
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

      {/* Testimonials Section */}
      <section className="section-block testimonials-section">
        <div className="section-heading">
          <h2>What Our Clients Say</h2>
          <p>Real experiences from satisfied customers</p>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"Rohan helped us find our dream home in just 2 weeks! His knowledge of the Mumbai market is exceptional."</p>
              <div className="testimonial-author">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&q=80" alt="Priya Sharma" />
                <div>
                  <strong>Priya Sharma</strong>
                  <span>Mumbai, Maharashtra</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"Professional service from start to finish. The property documentation was handled perfectly."</p>
              <div className="testimonial-author">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Amit Patel" />
                <div>
                  <strong>Amit Patel</strong>
                  <span>Bengaluru, Karnataka</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"Found our investment property through PropEase. Excellent ROI and transparent dealings."</p>
              <div className="testimonial-author">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" alt="Sneha Reddy" />
                <div>
                  <strong>Sneha Reddy</strong>
                  <span>Chennai, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section id="featured-properties" className="section-block">
        <div className="section-heading">
          <h2>Featured Properties</h2>
          <p>Handpicked premium listings with exceptional value</p>
        </div>
        <div className="featured-properties-grid">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <div className="view-all-container">
          <a href="/properties" className="button primary">View All Properties</a>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-block cta-section">
        <div className="cta-content">
          <h2>Ready to Find Your Dream Home?</h2>
          <p>Join hundreds of satisfied customers who found their perfect property with PropEase. Let's start your journey today!</p>
          <div className="cta-actions">
            <a className="button primary" href="#featured-properties">
              <span>🏠</span> Start Your Search
            </a>
            <a className="button secondary" href="/seller/login">
              <span>💼</span> List Your Property
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-block contact-section">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>Have questions? We're here to help you every step of the way.</p>
            <div className="contact-details">
              <div className="contact-item">
                <span>📞</span>
                <div>
                  <strong>Call Us</strong>
                  <p>+91 91234 56789</p>
                </div>
              </div>
              <div className="contact-item">
                <span>📧</span>
                <div>
                  <strong>Email Us</strong>
                  <p>hello@propease.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span>📍</span>
                <div>
                  <strong>Visit Us</strong>
                  <p>Mumbai, Bengaluru, Chennai</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form className="enquiry-form">
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={4} placeholder="Tell us about your requirements..."></textarea>
              </div>
              <button type="submit" className="button primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
