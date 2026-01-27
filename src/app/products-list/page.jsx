'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Pagination from './components/Pagination';
import ProductsListTools from './components/ProductsListTools';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function ProductsList() {
	const [products, setProducts] = useState([]);
	const [totalPages, setTotalPages] = useState(0);
	const [totalEntries, setTotalEntries] = useState(0);
	const [page, setPage] = useState(1);

	const fetchProducts = async () => {
		try {
			const res = await fetch(`${API_URL}/api/products`);
			const data = await res.json();
			setProducts(data?.content);
			setTotalPages(data?.totalPages);
			setTotalEntries(data?.totalElements);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, [page]);


	return (
		<div className="products-list">
			<div className="w-full max-w-[1200px] flex flex-col items-center gap-[40px] py-[80px] px-[15px] md:px-[80px] m-auto">
				<ProductsListTools totalEntries={totalEntries} />
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
					{products.map((product) => (
						<Link href={`/product-details/${product.slug}`} key={product.id}>
							<div className="hover:[&_img]:scale-[1.05] hover:[&_h5]:text-(--color-my-pink) duration-300 cursor-pointer">
								<div className="aspect-square md:aspect-2/3 overflow-hidden cursor-pointer">
									<Image
										className="duration-300"
										src={product.avatar}
										width={500}
										height={500}
										alt={`Image ${product.slug}`}
									/>
								</div>
								<h5 className="!text-[16px] duration-300">{product.name}</h5>
								<h6 className="!text-[16px]">${product.price}</h6>
							</div>
						</Link>
					))}
				</div>
				<Pagination page={page} setPage={setPage} totalPages={totalPages} />
			</div>
		</div>
	);
}
