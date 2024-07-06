import React, { useEffect, useState } from 'react';
import { getSavedApartments } from '../../services/apartment/ApartmentService';
import { Link } from 'react-router-dom';

const SavedModal = () => {
  
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    async function fetchSavedApartments() {
      try {
        const response = await getSavedApartments(pageNumber, pageSize);
        setApartments(response.pageItems);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchSavedApartments();
  }, [pageNumber, pageSize]);

  const handleNextPage = () => {
    setPageNumber(prevPageNumber => prevPageNumber + 1);
  };

  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(prevPageNumber => prevPageNumber - 1);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Saved</h1>
      {apartments.map((apartment, index) => (
        <div key={index} className="flex items-center mb-6">
          <img src={apartment.imageUrl} alt="Apartment" className="w-32 h-32 object-cover mr-4" />
          <div className="flex-1">
            <h2 className="text-lg font-medium">{apartment.name}</h2>
            <p className="text-sm text-gray-600">{apartment.description}</p>
            <p className="text-green-600 font-semibold">{apartment.price} Negotiable</p>
          </div>
          <Link to={`/apartment-details?id=${apartment.id}`} className="px-4 py-2 bg-[#7FDBCA] hover:bg-teal-500 text-white rounded-md">
            View More
          </Link>
        </div>
      ))}
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={pageNumber === 1}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-500 text-white cursor-pointer rounded-md"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          className="px-4 py-2 bg-[#7FDBCA] hover:bg-teal-500 text-white rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SavedModal;
