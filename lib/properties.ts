export type Property = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  status: 'Active' | 'Sold' | 'Rented';
  description: string;
  image: string;
  address: string;
  amenities: string[];
  seller: {
    name: string;
    phone: string;
    email: string;
  };
};

export const properties: Property[] = [
  {
    id: '1',
    title: 'Sunlit 3BHK near Central Park',
    type: 'Apartment',
    price: 14500000,
    city: 'Mumbai',
    bedrooms: 3,
    bathrooms: 2,
    area: 1200,
    status: 'Active',
    description: 'Bright and modern 3-bedroom apartment with landscaped garden views, premium amenities, and quick access to schools and transport.',
    image: 'https://images.unsplash.com/photo-1572120360610-d971b9b6392d?auto=format&fit=crop&w=1200&q=80',
    address: 'Sector 15A, Andheri East, Mumbai',
    amenities: ['Hospital', 'School', 'Market'],
    seller: {
      name: 'Ayesha Patel',
      phone: '+91 98765 43210',
      email: 'ayesha@propease.com'
    }
  },
  {
    id: '2',
    title: 'Luxury 4BHK Villa with Pool',
    type: 'Villa',
    price: 32000000,
    city: 'Bengaluru',
    bedrooms: 4,
    bathrooms: 4,
    area: 2800,
    status: 'Active',
    description: 'Spacious villa featuring a private pool, open-plan living, landscaped yard, and premium interior finishes.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    address: 'Whitefield Main Road, Bengaluru',
    amenities: ['Hospital', 'School', 'Market'],
    seller: {
      name: 'Rohan Gupta',
      phone: '+91 91234 56789',
      email: 'rohan@propease.com'
    }
  },
  {
    id: '3',
    title: 'Cozy 2BHK in downtown locality',
    type: 'Condo',
    price: 8800000,
    city: 'Chennai',
    bedrooms: 2,
    bathrooms: 2,
    area: 900,
    status: 'Sold',
    description: 'Well-maintained condo with city views, walking distance to shopping, transport, and hospitality services.',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    address: 'Anna Salai, Chennai',
    amenities: ['Hospital', 'School', 'Market'],
    seller: {
      name: 'Priya Nair',
      phone: '+91 99876 54321',
      email: 'priya@propease.com'
    }
  }
];
