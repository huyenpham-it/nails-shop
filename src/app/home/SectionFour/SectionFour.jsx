import Image from 'next/image';

export const SectionFour = () => {
	return (
		<div className="section-four w-full flex flex-col min-[1300px]:flex-row">
			<div className="w-full min-[1300px]:w-[48%]">
				<Image src="/images/home/section-four.webp" width={1000} height={2000} alt="" />
			</div>
			<div className="w-full min-[1300px]:w-[52%] text-(--color-my-black) bg-(--color-my-light-pink) flex flex-col items-start justify-center gap-[30px] py-[80px] lg:py-[100px] px-[15px] md:px-[40px]">
				<div className="text-[14px] uppercase font-medium tracking-[2px]">MORE THAN JUST NAILS</div>
				<h2 className="">
					<span className="allison-font !text-(--color-my-pink)">There&apos;s </span>
					<span>nothing a fresh manicure can’t fix</span>
				</h2>
				<div className="flex flex-col gap-4">
					<div className="flex justiy-start items-center gap-4 md:gap-12">
						<div className="w-[100px] md:w-[120px] text-[30px] md:text-[40px] headline-font shrink-0 text-(--color-my-green)">
							5000+
						</div>
						<div>
							<div className="text-[18px] md:text-[25px] font-medium">Cuticles removed every year</div>
							<p className="mt-3">
								Our skilled technicians provide a range of nail treatments that will leave your nails
								looking and feeling their best.
							</p>
						</div>
					</div>

					<div className="flex justiy-start items-center gap-4 md:gap-12">
						<div className="w-[100px] md:w-[120px] text-[30px] md:text-[40px] headline-font shrink-0 text-(--color-my-green)">
							1325
						</div>
						<div>
							<div className="text-[18px] md:text-[25px] font-medium">Unique nail designs created</div>
							<p className="mt-3">
								Our nail specialists can replicate any design and nail art from customers&apos; ideas.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
