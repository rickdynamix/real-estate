'use client';

import { useMemo, useState } from 'react';
import { Property } from '../lib/properties';
import PropertyList from './PropertyList';

const typeOptions = ['All', 'Apartment', 'Villa', 'Condo'];
const cityOptions = ['All', 'Mumbai', 'Bengaluru', 'Chennai'];

export default function PropertyFilter({ initialProperties }: { initialProperties: Property[] }) {
  const [city, setCity] = useState('All');
  const [type, setType] = useState('All');
  const [status, setStatus] = useState('All');

  const filtered = useMemo(() => {
    return initialProperties.filter((property) => {
      const cityMatch = city === 'All' || property.city === city;
      const typeMatch = type === 'All' || property.type === type;
      const statusMatch = status === 'All' || property.status === status;
      return cityMatch && typeMatch && statusMatch;
    });
  }, [city, type, status, initialProperties]);

  return (
    <div>
      <div className="filter-panel">
        <div className="filter-group">
          <label htmlFor="city-select">City</label>
          <select id="city-select" value={city} onChange={(event) => setCity(event.target.value)}>
            {cityOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="type-select">Type</label>
          <select id="type-select" value={type} onChange={(event) => setType(event.target.value)}>
            {typeOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="status-select">Status</label>
          <select id="status-select" value={status} onChange={(event) => setStatus(event.target.value)}>
            {['All', 'Active', 'Sold', 'Rented'].map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
      <PropertyList properties={filtered} />
    </div>
  );
}
