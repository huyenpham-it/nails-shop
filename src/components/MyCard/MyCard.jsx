import Image from 'next/image';
import Link from 'next/link';

export const MyCard = ({ info }) => {
	return (
		<div className="card">
			<div className="relative">
				<Image
					src={info?.imagePath || ''}
					width={1000}
					height={2000}
					className="aspect-square md:aspect-3/4"
					alt={info?.name || ''}
				/>
				<div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-[0.5]"></div>
				<div className="absolute left-0 right-0 bottom-0 flex flex-col gap-[30px] items-start justify-between text-white p-[25px]">
					<div className="flex flex-col gap-[20px]">
						<h5>{info?.name || ''}</h5>
						<p className="font-medium leading-[1.5]">{info?.description || ''}</p>
						<Link href={info?.link || '#'}>
							<button className="w-fit uppercase border border-white text-white hover:bg-white hover:text-black duration-300 px-[30px]">
								Book now
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
