import Link from 'next/link';
import { Property } from '../lib/properties';

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="property-card">
      <Link href={`/properties/${property.slug}`}>
        <div className="property-image" style={{ backgroundImage: `url('${property.image}')` }} />
      </Link>
      <div className="property-body">
        <div className="property-meta">
          <span>{property.city}</span>
          <span>{property.type}</span>
        </div>
        <Link href={`/properties/${property.slug}`}>
          <h3>{property.title}</h3>
        </Link>
        <p>{property.bedrooms} bed · {property.bathrooms} bath · {property.area} sqft</p>
        <div className="property-footer">
          <strong>₹{property.price.toLocaleString()}</strong>
          <span className={`status-pill status-${property.status.toLowerCase()}`}>
            {property.status}
          </span>
        </div>
      </div>
    </article>
  );
}
