import BannersData from "api/banners.json";
import { useEffect, useState } from "react";
import Title from "ui/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiperStyle.css';

export const Campaigns = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(BannersData);
  }, [])

  return (
    <div className="container mx-auto md:pt-8">
      <div className="hidden md:block">
        <Title>Kampanyalar</Title>
      </div>
      <Swiper className="md:-mx-2" modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        spaceBetween={8}
        slidesPerView={1}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={false}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
          1536: {
            slidesPerView: 5,
          }
        }}
      >
        {banners && banners.map(banner => (
          <div key={banner.id} className="block md:px-2">
            <SwiperSlide>
              <img src={banner.image} className="md:rounded-lg" />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  )
}