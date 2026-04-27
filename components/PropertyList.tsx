import { Property } from '../lib/properties';
import PropertyCard from './PropertyCard';

export default function PropertyList({ properties }: { properties: Property[] }) {
  return (
    <div className="property-grid">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
