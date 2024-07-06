import { useEffect, useState } from 'react';
import ApartmentImageCard2 from '../ApartmentImageCard2';
import { getAllProperties } from '../../services/apartment/ApartmentService';

function PropertyListing() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProperties() {
      try {
        const response = await getAllProperties();
        setProperties(response.pageItems);
      } catch (e) {
        console.error('Error fetching property listing', e);
        setError('Failed to load properties');
      } finally {
        setLoading(false);
      }
    }

    fetchProperties();
  }, []);

  if (loading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="space-y-4">
      {properties.map((property, index) => (
        <div className="h-[130px] py-4 flex flex-row gap-5" key={property.id || index}>
          <div className="w-[130.3px] h-[162px] mx-3">
            <ApartmentImageCard2 imgUrl={property.imageUrl} />
          </div>
          <div className="flex-1 h-[162px]">
            <h2 className='font-acumin text-1xl font-bold leading-9 text-left'>{property.name}</h2>
            <h5 className='text-[#98A2B3]'>{property.address}</h5>
            <p className='text-[#12B76A]'>{property.noOfRooms} rooms available</p>
          </div>
          <div className="flex flex-row items-center mx-10">
            <svg className="w-[5px] h-[16px] fill-none" viewBox="0 0 5 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.29883 4C3.39883 4 4.29883 3.1 4.29883 2C4.29883 0.9 3.39883 0 2.29883 0C1.19883 0 0.298828 0.9 0.298828 2C0.298828 3.1 1.19883 4 2.29883 4ZM2.29883 6C1.19883 6 0.298828 6.9 0.298828 8C0.298828 9.1 1.19883 10 2.29883 10C3.39883 10 4.29883 9.1 4.29883 8C4.29883 6.9 3.39883 6 2.29883 6ZM2.29883 12C1.19883 12 0.298828 12.9 0.298828 14C0.298828 15.1 1.19883 16 2.29883 16C3.39883 16 4.29883 15.1 4.29883 14C4.29883 12.9 3.39883 12 2.29883 12Z" className="fill-[#323232]" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PropertyListing;
