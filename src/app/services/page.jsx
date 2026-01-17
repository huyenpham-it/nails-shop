'use client';

import { MyCard } from '@/components/MyCard/MyCard';
import { Switch } from '@/components/ui/switch';
import { SERVICES, STAFF } from '@/utils/constants';
import Image from 'next/image';
import { useState } from 'react';

export default function Services() {
	const [option, setOption] = useState('services');

	return (
		<div className="services">
			<div className="w-full flex flex-col lg:flex-row">
				<div className="w-full xl:w-1/2 h-full xl:h-screen text-(--color-my-white) font-medium bg-(--color-my-green) flex flex-col items-center xl:items-start justify-center gap-[10px] px-[15px] lg:px-[80px] py-[80px]">
					<div className="text-[14px] uppercase font-medium tracking-[2px]">AREAS OF SPECIALTY</div>
					<h1>Services</h1>
					<p className="max-w-[400px] text-center xl:text-left font-medium">
						Blue Ocean Nails offers a full range of professional nail care and beauty treatments designed to
						enhance your natural elegance.
					</p>
				</div>
				<div className="hidden xl:block w-1/2">
					<Image src="/images/services/services.webp" width={1000} height={2000} alt="" />
				</div>
			</div>
			<div className="px-[15px] md:px-[40px] xl:px-[120px] py-[40px] md:py-[80px] xl:py-[120px]">
				<div className="flex items-center justify-center gap-8 pb-[40px]">
					<h4>Services</h4>
					<Switch
						checked={option === 'staff'}
						onCheckedChange={(checked) => setOption(checked ? 'staff' : 'services')}
						className="data-[state=checked]:bg-(--color-my-green) data-[state=unchecked]:bg-(--color-my-gray)"
					/>
					<h4>Staff</h4>
				</div>
				<div
					className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px] md:gap-8 ${
						option === 'staff' ? 'hidden' : ''
					}`}
				>
					{SERVICES.map((service, index) => (
						<MyCard key={index} info={service} />
					))}
				</div>
				<div
					className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px] md:gap-8 ${
						option === 'services' ? 'hidden' : ''
					}`}
				>
					{STAFF.map((staff, index) => (
						<MyCard key={index} info={staff} />
					))}
				</div>
			</div>
		</div>
	);
}
