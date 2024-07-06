import Footer from '../components/Footer'
import FooterNav from '../components/FooterNav'
import ApartmentNavbar from "../components/ApartmentNavbar"
import TopContainer from '../components/TopContainer'
import Apartment2 from '../components/Apartment2'
import ProfileNav from '../components/ProfileNav'

function ApartmentPage() {
  return (
    <div>
        <ProfileNav />
        <TopContainer />
        <Apartment2 />
        <Footer />
        <FooterNav /> 
    </div>
  )
}


export default ApartmentPage;