'use client';

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PRODUCTS_LIST } from '@/ultis/constants';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductsList() {
	return (
		<div className="products-list">
			<div className="w-full max-w-[1100px] flex flex-col items-center gap-[40px] py-[80px] px-[15px] md:px-[80px] m-auto">
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
						<span>15 products</span>
					</div>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
					{PRODUCTS_LIST.map((product) => (
						<Link href={`/product-details/${product.slug}`} key={product.id}>
							<div className="hover:[&_img]:scale-[1.05] hover:[&_h5]:text-(--color-my-pink) duration-300 cursor-pointer">
								<div className="aspect-square md:aspect-2/3 overflow-hidden cursor-pointer">
									<Image
										className="duration-300"
										src={product.src}
										width={500}
										height={500}
										alt={`Image ${product.id}`}
									/>
								</div>
								<h5 className="!text-[16px] duration-300">{product.name}</h5>
								<h6 className="!text-[16px]">{product.price}</h6>
							</div>
						</Link>
					))}
				</div>
				<div className="flex items-center jutify-center gap-4">
					<button className="border border-(--color-my-gray) rounded-md px-6">Previous</button>
					<span className="font-bold">Page 1 / 1</span>
					<button className="border border-(--color-my-gray) rounded-md px-6">Next</button>
				</div>
			</div>
		</div>
	);
}
