import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';

export const SectionOne = () => {
	return (
		<div className="section-one flex justify-center">
			<div className="w-full relative h-[600px] md:h-auto lg:aspect-2/1">
				<Image src="/images/home/section-one.webp" width={2000} height={1000} alt="" />
				<div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-[0.5]"></div>
			</div>
			<div className="w-full page-wrapper absolute bottom-1/2 translate-y-1/2 lg:bottom-[70px] lg:translate-y-0 flex flex-col lg:flex-row items-center justify-between gap-[20px] px-[15px] md:px-[50px]">
				<div className="text-white text-center lg:text-left">
					<h1 className="leading-[60px]">
						<span>Your destination for</span>
						<span className="allison-font font-bold !text-(--color-my-light-pink) whitespace-nowrap"> picture-perfect </span>
						<span>nails</span>
					</h1>
					<p className="md:text-[20px] font-semibold mt-4">
						Welcome to Blue Ocean, a full-service nail salon dedicated to beauty, relaxation, and
						exceptional care.
					</p>
				</div>
				<div className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full flex items-center justify-center hover:scale-90 transform transition duration-300">
					<Link href="/services" className={styles.servicesButton} role="button">
						<span className="text-[15px] font-medium tracking-[3px]">
							our
							<br />
							services
							<br />
							menu
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};
