'use client';

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronDown } from 'lucide-react';

export default function ProductsListTools({ totalEntries }) {
    return (
		<div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between text-[14px] font-bold border-y border-(--color-my-gray) py-[10px]">
			<div className="flex items-center gap-4">
				<span>Filter:</span>
				<div className="flex items-center gap-2">
					Price
					<ChevronDown className="w-4 h-4" />
				</div>
			</div>
			<div className="flex items-center gap-4">
				Sort:
				<Select>
					<SelectTrigger className="[&_span]:text-[14px] [&_span]:font-bold">
						<SelectValue placeholder="Date, New to Old" />
					</SelectTrigger>
					<SelectContent className="font-bold">
						<SelectGroup>
							<SelectItem value="1">Featured</SelectItem>
							<SelectItem value="2">Date, Old to New</SelectItem>
							<SelectItem value="3">Date, New to Old</SelectItem>
							<SelectItem value="4">Alphabetical, A-Z</SelectItem>
							<SelectItem value="5">Alphabetical, Z-A</SelectItem>
							<SelectItem value="6">Price, Low to High</SelectItem>
							<SelectItem value="7">Price, High to Low</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
				<span>{totalEntries} products</span>
			</div>
		</div>
	);
}