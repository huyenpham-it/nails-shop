import Image from 'next/image';

export const SectionNine = () => {
	return (
		<div className="section-nine w-full flex flex-col lg:flex-row">
			<div className="w-full min-[1300px]:w-[60%] text-(--color-my-black) font-medium bg-(--color-my-light-pink) flex flex-col items-start justify-center gap-[30px] px-[15px] md:px-[40px] xl:px-[100px] py-[50px] md:py-[80px]">
				<h2 className="">
					<span>We use only top quality products you can </span>
					<span className="allison-font !text-(--color-my-pink)">trust</span>
				</h2>
				<p>
					At our salon, we provide both shellac and gel nail services, so you may choose which one best suits
					your needs. Choose from a wide variety of colors for your shellac or gel nails from our skilled
					professionals. So, your freshly painted nails will never break or chip.
				</p>
				<p>
					You may normally work without worryiImage Featureng about chipping or scratching the shellac on your
					nails for up to two weeks.
				</p>
				<div className="w-full grid grid-cols-3 text-(--color-my-green) text-[13px] md:text-[16px]">
					<div className="flex flex-col gap-4 items-center justify-start p-0 md:p-4">
						<div className="w-[28px] h-[28px]">
							<Image src="/images/home/section-nine-1.png" width={100} height={100} alt="" />
						</div>
						<p>ORGANIC</p>
					</div>
					<div className="flex flex-col gap-4 items-center justify-start border-x border-(--color-my-green) p-0 md:p-4">
						<div className="w-[28px] h-[28px]">
							<Image src="/images/home/section-nine-2.png" width={100} height={100} alt="" />
						</div>
						<p>NON-TOXIC</p>
					</div>
					<div className="flex flex-col gap-4 items-center justify-start p-0 md:p-4">
						<div className="w-[28px] h-[28px]">
							<Image src="/images/home/section-nine-3.png" width={100} height={100} alt="" />
						</div>
						<p>ECO-FRIENDLY</p>
					</div>
				</div>
			</div>
			<div className="hidden min-[1300px]:block w-[40%]">
				<Image src="/images/home/section-nine.webp" width={1000} height={2000} alt="" />
			</div>
		</div>
	);
};
