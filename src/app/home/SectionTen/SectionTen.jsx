import { HOME_FOUR_IMAGES, HOME_FOUR_IMAGES_TEN } from '@/ultis/constants';
import Image from 'next/image';
import Link from 'next/link';

export const SectionTen = () => {
	return (
		<div className="section-ten page-wrapper flex flex-col items-center justify-between gap-[20px] px-[15px] md:px-[40px] py-[50px] md:py-[80px]">
			<div className="w-full flex flex-col lg:flex-row items-center justify-between gap-[40px]">
				<div className="flex flex-col gap-[20px] text-center lg:text-left">
					<h2>Professional products</h2>
					<p className="font-medium">Shop your favorite beauty products through our online store</p>
				</div>
				<div className="w-[160px] h-[160px] flex-shrink-0 hover:scale-90 transform transition duration-300">
					<Link
						href="/products-list"
						className="w-full h-full flex items-center justify-center uppercase text-center rounded-full border border-(--color-my-green) text-(--color-my-green) hover:bg-(--color-my-green) hover:text-white duration-300"
					>
						VIEW ALL
						<br />
						PRODUCTS
					</Link>
				</div>
			</div>
			<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] md:gap-[30px]">
				{HOME_FOUR_IMAGES_TEN.map((image, index) => (
					<div key={index} className="w-full">
						<div className="p-4 md:p-0 overflow-hidden">
							<Image
								className="hover:scale-[1.05] duration-300"
								src={image.src}
								width={500}
								height={1000}
								alt={`Image ${index}`}
							/>
						</div>
						<div className="w-full flex flex-col text-center gap-2 p-0 md:p-[25px]">
							<div>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-my-pink)"
								></i>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-my-pink)"
								></i>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-my-pink)"
								></i>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-my-pink)"
								></i>
								<i
									aria-hidden="true"
									className="cmsmsdemo-icon- cmsms-demo-icon-star text-(--color-my-pink)"
								></i>
							</div>
							<p className="font-medium">{image.name}</p>
							<p className="uppercase font-medium tracking-[2px]">{image.price}</p>
						</div>
					</div>
				))}
			</div>
			<Link href="/products-list">
				<button className="uppercase border border-(--color-my-green) text-(--color-my-green) hover:bg-(--color-my-green) hover:text-white duration-300 px-[30px]">
					view more
				</button>
			</Link>
			<div className="flex flex-col items-center gap-6 mt-12">
				<h3 className="text-center">
					“You won’t find a better nails salon
					<br className="hidden lg:block" />
					{' '}in Los Angeles.”
				</h3>
				<p className="text-(--color-my-pink)">4.8 rating based on 1000+ reviews</p>
				<button className="uppercase border border-(--color-my-green) text-(--color-my-green) hover:bg-(--color-my-green) hover:text-white duration-300 px-[30px]">
					make an appointment
				</button>
			</div>
		</div>
	);
};
