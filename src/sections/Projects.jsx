import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';
import '../styles/SwiperSlider.css';
const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <div className="container d-flex flex-column align-items-center">
        <h2 className="text-center mb-4">Projects</h2>
        <p className="text-center">Coming soon! Stay tuned for my latest projects.</p>
        <div className="swiper-container">
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide style={{ height:"40vh", backgroundColor: 'rgb(206, 17, 17)' }}>Slide 1</SwiperSlide>
        <SwiperSlide style={{height:"40vh", backgroundColor: 'rgb(0, 140, 255)' }}>Slide 2</SwiperSlide>
        <SwiperSlide style={{ height:"40vh",backgroundColor: 'rgb(10, 184, 111)' }}>Slide 3</SwiperSlide>
        <SwiperSlide style={{height:"40vh", backgroundColor: 'rgb(211, 122, 7)' }}>Slide 4</SwiperSlide>
        <SwiperSlide style={{height:"40vh", backgroundColor: 'rgb(118, 163, 12)' }}>Slide 5</SwiperSlide>
        <SwiperSlide style={{ height:"40vh",backgroundColor: 'rgb(180, 10, 47)' }}>Slide 6</SwiperSlide>
        <SwiperSlide style={{ height:"40vh",backgroundColor: 'rgb(35, 99, 19)' }}>Slide 7</SwiperSlide>
        <SwiperSlide style={{height:"40vh", backgroundColor: 'rgb(0, 68, 255)' }}>Slide 8</SwiperSlide>
        <SwiperSlide style={{height:"40vh", backgroundColor: 'rgb(218, 12, 218)' }}>Slide 9</SwiperSlide>
      </Swiper>
    </div>
      </div>
      
    </section>
  );
};

export default Projects;