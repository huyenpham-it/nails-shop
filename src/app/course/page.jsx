'use client';

import { Switch } from '@/components/ui/switch';
import { LIVE_TRAINING_COURSE, ONLINE_COURSE } from '@/utils/constants';
import { useState } from 'react';
import { CourseCard } from './components/CourseCard';

export default function Course() {
	const [option, setOption] = useState('services');

	return (
		<div className="services px-[15px] md:px-[40px] py-[40px] md:py-[80px] xl:py-[120px]">
			<div className="text-center">
				<h2>Choose Your Package Plan</h2>
				<p className="max-w-[800px] font-medium pt-8 m-auto">
					Select from personalized, group, or face-to-face options tailored to your needs. Learn from Kelly
					with expert guidance, resources, and flexibility to achieve your Headspa mastery!
				</p>
			</div>
			<div className="flex flex-col items-center pt-16">
				<div className="flex items-center justify-center gap-2 md:gap-8 pb-16">
					<div className="headline-font text-(--color-my-light-green) text-[14px] md:text-[20px] text-center font-semibold rounded-full shadow-[1px_1px_10.2px_0px_rgba(0,0,0,0.25)] p-[10px] md:px-[30px] md:py-[10px]">
						Online course
					</div>
					<Switch
						checked={option === 'live'}
						onCheckedChange={(checked) => setOption(checked ? 'live' : 'online')}
						className="data-[state=checked]:bg-(--color-my-vibrant-pink) data-[state=unchecked]:bg-(--color-my-gray)"
					/>
					<div className="headline-font text-(--color-my-blue) text-[14px] md:text-[20px] text-center font-semibold rounded-full shadow-[1px_1px_10.2px_0px_rgba(0,0,0,0.25)] p-[10px] md:px-[30px] md:py-[10px]">
						Live training course
					</div>
				</div>
				<div
					className={`w-fit grid grid-cols-1 md:grid-cols-2 justify-center gap-4 ${
						option === 'live' ? 'hidden' : ''
					}`}
				>
					{ONLINE_COURSE.map((online, index) => (
						<CourseCard key={index} info={online} />
					))}
				</div>
				<div
					className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ${
						option === 'online' ? 'hidden' : ''
					}`}
				>
					{LIVE_TRAINING_COURSE.map((live, index) => (
						<CourseCard key={index} info={live} />
					))}
				</div>
			</div>
		</div>
	);
}
