'use client';

import { OUR_PAGES } from '@/utils/constants';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from '..';

export const Header = () => {
	return (
		<div className="header">
			<div className="w-full bg-(--color-my-dark-pink) text-(--color-my-light-black) text-[15px] font-semibold flex items-center justify-center md:justify-between gap-4 p-[20px] py-[10px] md:px-[40px]">
				<div className="w-fit hidden lg:flex gap-8 shrink-0">
					<div>
						<span className="mr-2">
							<i aria-hidden="true" className="cmsmsdemo-icon- cmsms-demo-icon-location"></i>
						</span>
						<span>338 Broadway, Malden, MA 02148</span>
					</div>
					<div>
						<span className="mr-2">
							<i aria-hidden="true" className="cmsmsdemo-icon- cmsms-demo-icon-time"></i>
						</span>
						<span>Monday - Friday: 9:00am - 7:30pm</span>
					</div>
				</div>
				<div className="w-full flex justify-between lg:justify-end gap-8">
					<div className="flex items-center gap-[10px] [&>img]:!w-auto [&>img]:!h-[20px]">
						<Image src="/images/home/tel.webp" width={50} height={50} alt="" />
						<Link href="tel:1-800-123-1234">(617) 588-4982</Link>
					</div>
					<div className="flex items-center gap-[20px]">
						<span>
							<Link href="https://www.instLinkgram.com/cmsmasters/" target="_blank">
								<svg
									className="fill-(--color-my-black)"
									width="20"
									height="20"
									viewBox="0 0 448 512"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
								</svg>
							</Link>
						</span>
						<span>
							<Link href="https://www.facebook.com/cmsmasters-133637440033420" target="_blank">
								<svg
									className="fill-(--color-my-black)"
									width="20"
									height="20"
									viewBox="0 0 320 512"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
								</svg>
							</Link>
						</span>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center gap-[20px] shadow-[10px_10px_20px_5px_rgba(0,0,0,0.07)] p-[20px] md:py-[30px] md:px-[40px]">
				<div className="w-full flex items-center justify-between">
					<div className="flex items-center gap-[40px] mr-auto">
						<div className="w-[180px] md:w-[300px]">
							<Link href="/">
								<Image src="/images/home/logo.webp" width={1000} height={2000} alt="" loading="eager" />
							</Link>
						</div>
						<ul className="desktop-menu items-center gap-[20px] font-medium">
							{OUR_PAGES.map((page) => (
								<Link key={page.id} href={page.link}>
									{page.page}
								</Link>
							))}
						</ul>
					</div>
					<ShoppingCart />
					<button className="hidden md:block w-fit uppercase border border-(--color-my-green) text-(--color-my-green) hover:bg-(--color-my-green) hover:text-white duration-300 px-[30px] ml-[16px]">
						Book a visit
					</button>
					<div className="hidden max-[1025px]:block ml-[16px]">
						<Menu />
					</div>
				</div>
				<button className="md:hidden w-fit uppercase border border-(--color-my-green) text-(--color-my-green) hover:bg-(--color-my-green) hover:text-white duration-300 px-[30px]">
					Book a visit
				</button>
			</div>
		</div>
	);
};
