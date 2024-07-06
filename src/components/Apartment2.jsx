import React, { useEffect, useState } from 'react';
import ApartmentImageCard from './ApartmentImageCard'
import { getAllApartments } from '../services/apartment/ApartmentService';

function Apartment2() {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchApartments() {
      setLoading(true)
      try {
        const response = await getAllApartments(pageNumber, pageSize);
        setApartments(response.pageItems);
        setLoading(false)
        setNumberOfPages(response.numberOfPages);
      } catch (error) {
        setError(error.message)
        console.error('Error fetching apartments:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchApartments();
  }, [pageNumber, pageSize]);

  if (loading) return <div>Loading...</div>;
  if (error) { return <div>Error: {error}</div>; }

  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {apartments.map((apartment) => (
          <div key={apartment.id} className="row-span-1">
            <ApartmentImageCard
              id={apartment.id}
              imgUrl={apartment.imageUrl}
              name={apartment.name}
              address={apartment.address}
              noOfRooms={apartment.numberOfRooms}
              postedBy={apartment.ownerName}
              price={apartment.price}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 mb-4 space-x-4">
        <button
          onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
          disabled={pageNumber === 1}
          className="px-4 py-2 bg-customTeal cursor-pointer hover:bg-teal-500 text-white font-semibold rounded-md shadow-md"
        >
          Previous
        </button>
        <button
          onClick={() => setPageNumber((prev) => prev + 1)}
          className="px-4 py-2 bg-customTeal cursor-pointer hover:bg-teal-500 text-white font-semibold rounded-md shadow-md"
          disabled={pageNumber === numberOfPages}
        >
          Next
        </button>
      </div>
    </>
  );

}

export default Apartment2;