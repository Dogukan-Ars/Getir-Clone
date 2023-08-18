import { register } from 'swiper/element/bundle';
import ReactFlagsSelect from "react-flags-select";
import { useState } from 'react';
import { FaFacebook } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay, A11y } from 'swiper/modules';
import { useWindowWidth } from '@react-hook/window-size'


export const HeroSection = () => {
  const [selected, setSelected] = useState("TR");

  const windowWidth = useWindowWidth()

  const phones = {
    US: '+1',
    DE: '+50',
    TR: '+90',
    IT: '+7',
    IN: '+15',
    EN: '+79',
  }

  return (
    <div className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      {windowWidth >= 768 && <Swiper className="-mx-2 relative"
        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        
        spaceBetween={50}
        slidesPerView={1}
        navigation={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesToShow={2}
      >
        <SwiperSlide>
          <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg" alt="" />
        </SwiperSlide>
      </Swiper>}
      <div className="md:container flex justify-between items-center relative md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20">
        <div className='hidden md:block'>
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="Logo" />
          <h3 className='mt-8 text-4xl font-semibold text-white'>Dakikalar içerisinde <br /> kapınızda</h3>
        </div>
        <div className='w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6'>
          <h4 className='text-primary-brand-color text-center font-semibold mb-4'>Giriş yap veya kayıt ol</h4>

          <div className='grid gap-y-3'>
            <div className='flex gap-x-2'>
              <ReactFlagsSelect
                selected={selected}
                countries={Object.keys(phones)}
                customLabels={phones}
                onSelect={(code) => setSelected(code)}
                className='flag-select'
              />
              <label className='flex-1 relative group block'>
                <input required type="text" className='h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color focus:border-primary-brand-color outline-none text-sm pt-2 peer' />
                <span className='absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-6 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-6 peer-valid:text-primary-brand-color peer-valid:text-xs'>Telefon Numarası</span>
              </label>
            </div>

            <button className='bg-brand-yellow text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold '>
              Telefon numarası ile devam et
            </button>
            <hr className='h-[1px] bg-gray-300 my-2' />
            <button className='bg-blue-700 bg-opacity-10 text-blue-700 text-opacity-80 px-4 transition-colors h-12 hover:bg-blue-700 hover:text-white flex items-center rounded-md w-full text-sm font-semibold '>
              <FaFacebook size={24} />
              <span className='mx-auto'>Facebook ile devam et</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
register();