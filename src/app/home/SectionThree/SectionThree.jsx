import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';

export const SectionThree = () => {
	return (
		<div className="section-three page-wrapper grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-[20px] px-[15px] md:px-0 xl:px-[40px] py-[50px] lg:py-[80px]">
			<div className={`${styles.item} relative w-full flex-1 aspect-square`}>
				<Image src="/images/home/section-three-1.webp" width={1000} height={1000} alt="" />

				<div className={styles.overlay}></div>
				<div className={styles.content}>
					<h4 className="text-white uppercase">MANICURE</h4>
					<Link href="#">
						<button className="w-[150px] lg:w-[250px] text-white border border-white border-solid uppercase hover:bg-white hover:text-(--color-my-black) duration-300">
							View services
						</button>
					</Link>
				</div>
			</div>
			<div className={`${styles.item} relative w-full flex-1 aspect-square`}>
				<Image src="/images/home/section-three-2.webp" width={1000} height={1000} alt="" />

				<div className={styles.overlay}></div>
				<div className={styles.content}>
					<h4 className="text-white uppercase">PEDICURE</h4>
					<Link href="#">
						<button className="w-[150px] lg:w-[250px] text-white border border-white border-solid uppercase hover:bg-white hover:text-(--color-my-black) duration-300">
							View services
						</button>
					</Link>
				</div>
			</div>
			<div className={`${styles.item} relative w-full flex-1 aspect-square`}>
				<Image src="/images/home/section-three-3.webp" width={1000} height={1000} alt="" />

				<div className={styles.overlay}></div>
				<div className={styles.content}>
					<h4 className="text-white uppercase">Facials</h4>
					<Link href="#">
						<button className="w-[150px] lg:w-[250px] text-white border border-white border-solid uppercase hover:bg-white hover:text-(--color-my-black) duration-300">
							View services
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
