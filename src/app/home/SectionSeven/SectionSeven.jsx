'use client';

import { HOME_SLIDER_SEVEN } from '@/utils/constants';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SectionSeven = () => {
	return (
		<div className="section-seven">
			<div className="w-full bg-(--color-my-pink) text-white text-center pt-[60px] pb-[10px] md:py-[80px]">
				<h2>Client feedbacks</h2>
				<p className="font-medium mb-[40px] md:mb-[80px]">Discover what our satisfied clients have to say</p>
				<Swiper
					slidesPerView={1}
					loop={true}
					breakpoints={{
						1100: { slidesPerView: 3.5 }
					}}
					className="mySwiper overflow-hidden"
				>
					{HOME_SLIDER_SEVEN.map((slide, index) => (
						<SwiperSlide key={index}>
							<div className="w-full flex flex-col items-center gap-[20px] text-center p-[22px] md:p-8 border-none md:border-r border-(--color-my-light-gray) text-[16px]">
								<div className="flex gap-1">
									<span>
										<i aria-hidden="true" className="cmsmsdemo-icon- cmsms-demo-icon-star"></i>
									</span>
									<span>
										<i aria-hidden="true" className="cmsmsdemo-icon- cmsms-demo-icon-star"></i>
									</span>
									<span>
										<i aria-hidden="true" className="cmsmsdemo-icon- cmsms-demo-icon-star"></i>
									</span>
									<span>
										<i aria-hidden="true" className="cmsmsdemo-icon- cmsms-demo-icon-star"></i>
									</span>
									<span>
										<i aria-hidden="true" className="cmsmsdemo-icon- cmsms-demo-icon-star"></i>
									</span>
								</div>
								<p>{slide.comment}</p>
								<div className="flex flex-col items-center gap-[10px]">
									<Image
										className="!w-[50px] !h-[50px] rounded-full"
										src={slide.src}
										width={50}
										height={50}
										alt={`Slide ${index}`}
									/>
									<div>{slide.name}</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};
