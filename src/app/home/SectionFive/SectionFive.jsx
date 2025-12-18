import { MANICURE, PEDICURE } from '@/ultis/constants';
import Image from 'next/image';
import Link from 'next/link';

export const SectionFive = () => {
	return (
		<div className="section-five px-[15px] md:px-0 py-[80px]">
			<h2 className="text-[18px] md:text-[20px] lg:text-[22px] text-center font-medium tracking-[2px] mb-4">
				Price guide
			</h2>
			<p className="text-center font-medium mb-8">Simple, flat rate pricing for all our beauty services</p>
			<div className="w-full page-wrapper grid grid-cols-1 md:grid-cols-2 gap-[20px]">
				<div className="flex w-full lg:h-[400px]">
					<div className="hidden lg:block aspect-2/3">
						<Image src="/images/home/section-five-1.png" width={800} height={1000} alt="" />
					</div>
					<div className="bg-(--color-my-light-beige) text-(--color-my-black) flex flex-1 flex-col items-start justify-center gap-4 p-[30px]">
						<h5 className="text-[18px] md:text-[20px] lg:text-[22px] text-center font-medium tracking-[2px] mb-4">
							Manicure
						</h5>
						<div className="w-full flex flex-col gap-4">
							{MANICURE.map((service) => (
								<div
									key={service.id}
									className="border-b last:border-b-0 border-(--color-my-black) pb-2"
								>
									<div className="flex items-center justify-between">
										<span>{service.service}</span>
										<span>{service.price}</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="flex w-full lg:h-[400px]">
					<div className="hidden lg:block aspect-2/3">
						<Image src="/images/home/section-five-2.webp" width={800} height={1000} alt="" />
					</div>
					<div className="bg-(--color-my-green) text-white flex flex-1 flex-col items-start justify-center gap-4 p-[30px]">
						<h5 className="text-[18px] md:text-[20px] lg:text-[22px] text-center font-medium tracking-[2px] mb-4">
							Pedicure
						</h5>
						<div className="w-full flex flex-col gap-4">
							{PEDICURE.map((service) => (
								<div key={service.id} className="border-b last:border-b-0 pb-2">
									<div className="flex items-center justify-between">
										<span>{service.service}</span>
										<span>{service.price}</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-center mt-8">
				<Link href="/services">
					<button className="uppercase border border-(--color-my-green) text-(--color-my-green) hover:bg-(--color-my-green) hover:text-white duration-300 px-[30px]">
						EXPLORE SERVICES
					</button>
				</Link>
			</div>
		</div>
	);
};
