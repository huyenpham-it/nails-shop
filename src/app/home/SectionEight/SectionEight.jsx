'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HOME_SLIDER_EIGHT } from '@/ultis/constants';

export const SectionEight = () => {
	return (
		<div className="section-eight">
			<div className="flex flex-col items-center justify-center gap-[20px] px-[15px] md:px-[40px] py-[80px]">
				<h2 className="text-center">
					Your questions, <p className="allison-font !text-(--color-my-pink)">answered</p>
				</h2>
				<div className="w-full lg:max-w-[850px] mt-8">
					<Accordion type="single" collapsible>
						{HOME_SLIDER_EIGHT.map((item, index) => (
							<AccordionItem key={index} value={`item-${index}`}>
								<AccordionTrigger className="items-center [&>svg]:size-6 [&>svg]:text-(--color-my-black) hover:[&>_*]:text-(--color-my-pink) [&[data-state=open]>_*]:!text-(--color-my-pink) duration-300">
									<div className="!font-(family-name:--font-figtree) font-semibold text-[22px] tracking-[2px]">
										{item.accordion}
									</div>
								</AccordionTrigger>
								<AccordionContent className="text-base text-[18px]">
									{item.description}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>

				<div className="mt-8">Can&apos;t find what you are looking for?</div>
				<button className="uppercase border border-(--color-my-green) text-(--color-my-green) hover:bg-(--color-my-green) hover:text-white duration-300 px-[30px]">
					contact us
				</button>
			</div>
		</div>
	);
};
