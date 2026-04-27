import Link from 'next/link';
import { properties } from '../../../lib/properties';
import { notFound } from 'next/navigation';
import EnquiryForm from '../../../components/EnquiryForm';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = properties.find((item) => item.slug === slug);

  if (!property) {
    return {
      title: 'Property Not Found | PropEase',
    };
  }

  return {
    title: `${property.title} | PropEase Real Estate`,
    description: property.description,
    openGraph: {
      title: property.title,
      description: property.description,
      images: [property.image],
    },
  };
}

export default async function PropertyDetailPage({ params }: Props) {
  const { slug } = await params;
  const property = properties.find((item) => item.slug === slug);

  if (!property) {
    notFound();
  }

  const propertyFeatures = [
    'Air Conditioning',
    'Swimming Pool',
    'Gymnasium',
    '24/7 Security',
    'Power Backup',
    'Parking',
    'Garden',
    'Modular Kitchen',
    'Wardrobes',
    'Balcony'
  ];

  return (
    <main className="page-shell">
      <div className="detail-header">
        <div>
          <Link href="/" className="back-link">← Back to marketplace</Link>
          <p className="eyebrow">Property Detail</p>
          <h1>{property.title}</h1>
          <p className="detail-meta">{property.city} · {property.type} · ₹{property.price.toLocaleString()}</p>
        </div>
      </div>

      <div className="detail-grid">
        <div className="detail-main">
          <div className="detail-image" style={{ backgroundImage: `url('${property.image}')` }} />
          
          <section className="detail-block">
            <h2>Property Overview</h2>
            <p>{property.description}</p>
            <div className="detail-stats">
              <div><strong>{property.bedrooms}</strong><span>Bedrooms</span></div>
              <div><strong>{property.bathrooms}</strong><span>Bathrooms</span></div>
              <div><strong>{property.area} sqft</strong><span>Area</span></div>
            </div>
          </section>

          <section className="detail-block">
            <h2>Key Features</h2>
            <div className="features-grid">
              {propertyFeatures.map((feature) => (
                <div key={feature} className="feature-tag">
                  ✓ {feature}
                </div>
              ))}
            </div>
          </section>

          <section className="detail-block">
            <h2>Floor Plan</h2>
            <div className="floor-plan-placeholder">
              <div className="placeholder-content">
                <h3>Floor Plan Coming Soon</h3>
                <p>Detailed floor plan with dimensions will be available upon request.</p>
                <button className="button secondary">Request Floor Plan</button>
              </div>
            </div>
          </section>

          <section className="detail-block">
            <h2>360° Virtual Tour</h2>
            <div className="virtual-tour-placeholder">
              <div className="placeholder-content">
                <h3>Virtual Tour Available</h3>
                <p>Experience this property through our immersive 360° virtual tour.</p>
                <button className="button primary">Start Virtual Tour</button>
              </div>
            </div>
          </section>

          <section className="detail-block">
            <h2>Nearby Amenities</h2>
            <div className="amenities-grid">
              {property.amenities.map((amenity) => (
                <div key={amenity} className="amenity-item">
                  <div className="amenity-icon">
                    {amenity === 'Hospital' && '🏥'}
                    {amenity === 'School' && '🏫'}
                    {amenity === 'Market' && '🛒'}
                  </div>
                  <div>
                    <strong>{amenity}</strong>
                    <p>Within 2km distance</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="detail-block">
            <h2>Property Documents</h2>
            <div className="documents-list">
              <div className="document-item">
                <span>📄 Property Title Deed</span>
                <span>Available</span>
              </div>
              <div className="document-item">
                <span>🏛️ Encumbrance Certificate</span>
                <span>Available</span>
              </div>
              <div className="document-item">
                <span>💰 Tax Receipts</span>
                <span>Available</span>
              </div>
              <div className="document-item">
                <span>📋 Building Plan Approval</span>
                <span>Available</span>
              </div>
            </div>
          </section>
        </div>

        <aside className="detail-sidebar">
          <div className="info-card price-card">
            <h3>₹{property.price.toLocaleString()}</h3>
            <p>Negotiable price</p>
            <div className="price-breakdown">
              <div>
                <span>Base Price</span>
                <strong>₹{(property.price * 0.8).toLocaleString()}</strong>
              </div>
              <div>
                <span>Registration & Stamp Duty</span>
                <strong>₹{(property.price * 0.15).toLocaleString()}</strong>
              </div>
              <div>
                <span>Other Charges</span>
                <strong>₹{(property.price * 0.05).toLocaleString()}</strong>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h3>Location</h3>
            <p>{property.address}</p>
            <div className="map-placeholder">
              <div className="map-content">
                <h4>📍 Property Location</h4>
                <p>Interactive map with nearby amenities</p>
                <button className="button secondary">View on Map</button>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h3>Seller Information</h3>
            <div className="seller-profile">
              <div className="seller-avatar">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80" alt={property.seller.name} />
              </div>
              <div>
                <h4>{property.seller.name}</h4>
                <p>Verified Seller</p>
                <div className="seller-rating">
                  ⭐⭐⭐⭐⭐ <span>(4.8/5)</span>
                </div>
              </div>
            </div>
            <div className="contact-info">
              <p>📞 {property.seller.phone}</p>
              <p>✉️ {property.seller.email}</p>
            </div>
          </div>

          <div className="info-card">
            <h3>Send Enquiry</h3>
            <EnquiryForm propertyId={property.id} />
          </div>
        </aside>
      </div>
    </main>
  );
}
