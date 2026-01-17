import { formatNumber } from '@/utils/number';
import Image from 'next/image';
import Link from 'next/link';

export const CourseCard = ({ info }) => {
	return (
		<div className="w-full card border rounded-[16px] max-w-[400px]" style={{ borderColor: info?.color }}>
			<div className="h-full flex flex-col gap-[30px] items-center justify-between text-(--color-my-black) p-[20px]">
				<div className="flex flex-col items-center gap-[20px]">
					<h5
						className="plus-jakarta-sans-font font-bold text-[28px] text-center"
						style={{ color: info?.color }}
					>
						{info?.title || ''}
					</h5>
					<p
						className="font-medium text-center text-[14px] leading-[1.5]"
						style={{ color: info?.colorDesc || '#1479FB' }}
					>
						{info?.description || ''}
					</p>
					<div className="plus-jakarta-sans-font text-[40px] font-bold" style={{ color: info?.color }}>
						${formatNumber(info?.cost) || ''}
					</div>
					<ul className="flex flex-col gap-2">
						{info?.listCourse?.map((feature, index) => (
							<li key={index} className="flex items-center gap-2">
								<div className="w-[20px] h-[20px] shrink-0">
									<Image src="/images/course/check.png" width={20} height={20} alt="check-list" />
								</div>
								<p className="plus-jakarta-sans-font">{feature}</p>
							</li>
						))}
					</ul>
				</div>
				<Link href={info?.link || '#'} className="">
					<button
						className="w-fit uppercase border border-white text-white rounded-full px-[30px]"
						style={{ backgroundColor: info?.color }}
					>
						Get Started Now
					</button>
				</Link>
			</div>
		</div>
	);
};
