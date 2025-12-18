// import ServiceSelect from '@/components/ServiceSelect/ServiceSelect';
import Image from 'next/image';

export const SectionTwo = () => {
	return (
		<div className="section-two page-wrapper">
			<div className="w-full flex flex-col min-[1300px]:flex-row items-between md:justify-center gap-[40px] md:gap-[50px] py-[50px] lg:py-[80px] px-[15px] md:px-[40px]">
				<div>
					<Image src="/images/home/section-two.webp" width={1000} height={2000} alt="" />
				</div>
				<div className="w-full min-[1300px]:w-[40%] flex flex-col gap-[30px]">
					<div className="w-full flex flex-col gap-[20px]">
						<div className="text-[14px] uppercase font-medium tracking-[2px]">Extensive Nail Care</div>
						<h2>
							Get your look polished, <span className="allison-font font-bold">from </span>
							fingers to toes
						</h2>
					</div>
					<div className="flex flex-col gap-[30px] items-start">
						<p className="max-w-[425px] md:max-w-none">
							Nail art, manicures, and nail shaping are just some of the specialties of our experienced
							nail technicians. You can count on us whether you want a classic manicure, trendy shellac
							paint, or custom nail art.
						</p>
						<button className="uppercase border border-(--color-my-green) text-(--color-my-green) hover:bg-(--color-my-green) hover:text-white duration-300 px-[30px]">
							more about us
						</button>
					</div>
				</div>
			</div>
			<div className="w-full flex flex-col md:flex-row items-center justify-center text-center gap-[40px] md:gap-[20px] px-[15px] md:px-[40px] py-[50px]">
				<div className="flex flex-1 flex-col items-center gap-4">
					<div className="w-[64px] h-[64px]">
						<Image src="/images/home/section-two-1.png" width={100} height={100} alt="" />
					</div>
					<div className="text-[22px] font-medium">Upscale Location</div>
					<div>Our salon is located in the upscale suburban neighborhood.</div>
				</div>
				<div className="flex flex-1 flex-col items-center gap-4">
					<div className="w-[64px] h-[64px]">
						<Image src="/images/home/section-two-2.png" width={100} height={100} alt="" />
					</div>
					<div className="text-[22px] font-medium">Artistic Integrity</div>
					<div>We use the highest quality organic & vegan nail materials to provide superior nails.</div>
				</div>
				<div className="flex flex-1 flex-col items-center gap-4">
					<div className="w-[64px] h-[64px]">
						<Image src="/images/home/section-two-3.png" width={100} height={100} alt="" />
					</div>
					<div className="text-[22px] font-medium">Leading Designs</div>
					<div>We provide a range of nail treatments that will leave your nails looking their best.</div>
				</div>
			</div>
		</div>
	);
};
