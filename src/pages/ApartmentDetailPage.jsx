import React, { useEffect, useState } from 'react'
import ApartmentImage2 from '../components/ApartmentImage2'
import Footer from '../components/Footer'
import FooterNav from '../components/FooterNav'
import PagePath from '../components/PagePath'
import ApartmentImage1 from '../components/ApartmentImage1'
import AptDescription from '../components/AptDescription'
import AvailableRooms from '../components/AvailableRooms'
import ProfileNav from '../components/ProfileNav'
import { getApartmentsByid } from '../services/apartment/ApartmentService'
import { useLocation } from 'react-router'

const ApartmentDetailPage = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [images, setImages] = useState([]);
  const [noOfBeds, setNoOfBeds] = useState(0);
  const [address, setAddress] = useState(" ");
  const [ownerId, setOwnerId] = useState(" ");
  const [ownerName, setownerName] = useState(" ");
  const [ownerEmail, setownerEmail] = useState(" ");
  const [ownerPhone, setownerPhone] = useState(" ");
  const [rent, setrent] = useState(0);

  const params = new URLSearchParams(useLocation().search);
  const apartmentId = params.get("id");

  useEffect(() => {
    async function fetchApartmentsid() {
      try {
        setLoading(true);
        const response = await getApartmentsByid(apartmentId);

        setName(response.name)
        setImages(response.imageUrls);
        setNoOfBeds(response.numberOfRooms);
        setrent(response.price);
        setAddress(response.address)
        setOwnerId(response.ownerId);
        setownerName(response.ownerName);
        setownerEmail(response.ownerEmail)
        setownerPhone(response.ownerPhone)

      } catch (error) {
        console.error('Error fetching apartments:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchApartmentsid();
  }, [apartmentId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <ProfileNav />
    <PagePath apartmentName={name}/>
    <ApartmentImage1 images={images}/>
    <AptDescription apartmentId={apartmentId} noOfBeds={noOfBeds} address={address} rent={rent} ownerId={ownerId} ownerName={ownerName} ownerEmail={ownerEmail} ownerPhone={ownerPhone}  />
    <AvailableRooms/>
    <ApartmentImage2/>
    <Footer />
    <FooterNav /> 
    </>
  )
}

export default ApartmentDetailPage