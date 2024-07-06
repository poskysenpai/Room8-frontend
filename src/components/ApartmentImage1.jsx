import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ApartmentImage1 ({ images = []})  {

  return (
    <div className='w-full p-10 h-[450px] md:h-[550px] mb-10'>
      {/* Grid Layout for Large Screens */}
      <div className='hidden lg:grid grid-cols-3 justify-items-stretch items-stretch gap-3'>
        {images.slice(0, 5).map((url, index) => (
          <img
            key={index}
            className={`w-full ${index === 1 ? 'row-span-2 h-auto' : 'h-[271px]'}`}
            src={url}
            alt={`Apartment ${index + 1}`}
          />
        ))}
      </div>

      {/* Carousel for Medium Screens */}
      <div className='block lg:hidden'>
        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
          {images.map((url, index) => (
            <div key={index}>
              <img className='max-h-[550px] object-contain' src={url} alt={`Apartment ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ApartmentImage1;
