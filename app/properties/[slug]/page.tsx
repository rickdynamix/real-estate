import Link from 'next/link';
import { properties } from '../../../lib/properties';
import { notFound } from 'next/navigation';
import EnquiryForm from '../../../components/EnquiryForm';

interface Props {
  params: { slug: string };
}

export default function PropertyDetailPage({ params }: Props) {
  const property = properties.find((item) => item.slug === params.slug);

  if (!property) {
    notFound();
  }

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
            <h2>Overview</h2>
            <p>{property.description}</p>
            <div className="detail-stats">
              <div><strong>{property.bedrooms}</strong><span>Bedrooms</span></div>
              <div><strong>{property.bathrooms}</strong><span>Bathrooms</span></div>
              <div><strong>{property.area} sqft</strong><span>Area</span></div>
            </div>
          </section>
          <section className="detail-block">
            <h2>Nearby amenities</h2>
            <ul className="amenity-list">
              {property.amenities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="detail-sidebar">
          <div className="info-card">
            <h3>Location</h3>
            <p>{property.address}</p>
            <div className="map-placeholder">Map placeholder</div>
          </div>
          <div className="info-card">
            <h3>Seller contact</h3>
            <p>{property.seller.name}</p>
            <p>{property.seller.phone}</p>
            <p>{property.seller.email}</p>
          </div>
          <div className="info-card">
            <h3>Enquiry</h3>
            <EnquiryForm propertyId={property.id} />
          </div>
        </aside>
      </div>
    </main>
  );
}
