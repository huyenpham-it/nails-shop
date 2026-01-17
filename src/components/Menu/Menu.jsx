'use client';

import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { OUR_PAGES } from '@/utils/constants';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Menu = () => {
	const pathname = usePathname();

	return (
		<div className="mobile-menu">
			<Sheet>
				<SheetTrigger className="p-2">
					<MenuIcon />
				</SheetTrigger>
				<SheetContent
					side="right"
					className="w-full md:w-[450px] bg-(--color-my-white) text-(--color-my-black) p-[20px]"
				>
					<SheetTitle></SheetTitle>
					<SheetDescription></SheetDescription>
					<div className="w-full h-full flex flex-col items-start justify-between gap-8">
						<nav className="flex flex-col gap-8 mt-4 text-[18px] font-semibold">
							{OUR_PAGES.map((page) => (
								<SheetClose asChild key={page.id}>
									<Link href={page.link}>{page.page}</Link>
								</SheetClose>
							))}
						</nav>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
};
