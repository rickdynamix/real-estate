import Link from 'next/link';
import { Property } from '../lib/properties';

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="property-card">
      <Link href={`/properties/${property.slug}`}>
        <div className="property-image" style={{ backgroundImage: `url('${property.image}')` }} />
        <div className="property-body">
          <div className="property-meta">
            <span>{property.city}</span>
            <span>{property.type}</span>
          </div>
          <h3>{property.title}</h3>
          <p>{property.bedrooms} bed · {property.bathrooms} bath · {property.area} sqft</p>
          <div className="property-footer">
            <strong>₹{property.price.toLocaleString()}</strong>
            <span className={`status-pill status-${property.status.toLowerCase()}`}>
              {property.status}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
