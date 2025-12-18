import Image from 'next/image';

export default function SectionSix() {
	return (
		<div className="section-two relative bg-(--color-my-beige) px-[15px] md:px-[40px] py-[80px] lg:py-[100px] xl:py-[180px]">
			<div className="w-full flex md:justify-end page-wrapper">
				<div className="hidden lg:block page-wrapper w-[90%] absolute left-1/2 bottom-0 translate-x-[-50%] z-[0]">
					<Image src="/images/home/section-six.webp" width={2000} height={1000} alt="" />
				</div>
				<div className="w-full lg:w-1/2 flex flex-col gap-[30px] z-[1]">
					<div className="w-full flex flex-col gap-[20px]">
						<div className="text-[14px] uppercase font-medium tracking-[2px]">NAIL GALLERY</div>
						<h2>Explore our nail art gallery</h2>
					</div>
					<div className="flex flex-col gap-[30px] items-start">
						<p className="max-w-[425px] md:max-w-none">
							A gallery of nail designs our artists have created.
						</p>
						<button className="uppercase border border-(--color-my-black) text-(--color-my-black) hover:bg-(--color-my-pink) hover:border-(--color-my-pink) hover:text-white duration-300 px-[30px]">
							more about us
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
