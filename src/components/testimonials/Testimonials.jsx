import React from 'react'
import './testimonials.css'
import ava from '../../assets/ava.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
		<section id="testimonials">
			<h5>Review from client</h5>
			<h2>Testimonials</h2>

			<Swiper
				className="container testimonials__container"
				// install Swiper modules
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				<SwiperSlide className="testimonials">
					<div className="client__avatar">
						<img src={ava} alt="avatar" />
					</div>
					<h5 className="clirnt__name">Hilih Kinthil</h5>
					<small className="client__review">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
						maxime voluptatibus ut corporis aperiam consequatur?
					</small>
				</SwiperSlide>
				<SwiperSlide className="testimonials">
					<div className="client__avatar">
						<img src={ava} alt="avatar" />
					</div>
					<h5 className="clirnt__name">Hilih Kinthil</h5>
					<small className="client__review">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
						maxime voluptatibus ut corporis aperiam consequatur?
					</small>
				</SwiperSlide>
				<SwiperSlide className="testimonials">
					<div className="client__avatar">
						<img src={ava} alt="avatar" />
					</div>
					<h5 className="clirnt__name">Hilih Kinthil</h5>
					<small className="client__review">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
						maxime voluptatibus ut corporis aperiam consequatur?
					</small>
				</SwiperSlide>
				<SwiperSlide className="testimonials">
					<div className="client__avatar">
						<img src={ava} alt="avatar" />
					</div>
					<h5 className="clirnt__name">Hilih Kinthil</h5>
					<small className="client__review">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
						maxime voluptatibus ut corporis aperiam consequatur?
					</small>
				</SwiperSlide>
			</Swiper>
		</section>
	);
}

export default Testimonials