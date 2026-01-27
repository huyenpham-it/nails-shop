import QuantitySelector from '@/components/QuantitySelector/QuantitySelector';
import Image from 'next/image';

export default function ProductComponent({ product }) {
	return (
		<div className="product-details w-full max-w-[1100px] flex flex-col md:flex-row justify-center gap-[40px] p-[40px] md:p-[80px] m-auto">
			<div className="w-full md:w-1/2">
				<div className="aspect-square">
					<Image src={product.avatar} width={300} height={300} alt={product.name} className="w-64" />
				</div>
				<div className="grid grid-cols-4 md:grid-cols-5 gap-2">
					{/* {product.imageUrls.map((image, index) => (
						<div key={index} className="aspect-square border border-(--color-my-green)">
							<Image src={image} width={100} height={100} alt={product.name} className="w-64" />
						</div>
					))} */}
					<div className="aspect-square border border-(--color-my-green)">
						<Image src={product.avatar} width={100} height={100} alt={product.name} className="w-64" />
					</div>
				</div>
			</div>

			<div className="w-full md:w-1/2 flex flex-col gap-6">
				<div>
					<h6 className="mt-4 font-bold">{product.name}</h6>
					<h6 className="!text-[18px] mt-2">${product.price}</h6>
				</div>
				<div>
					<div className="font-bold mb-2">Quantity</div>
					<QuantitySelector />
				</div>
				<button className="w-full uppercase border border-(--color-my-green) bg-(--color-my-green) text-(--color-my-white) hover:bg-transparent hover:text-(--color-my-green) duration-300">
					Add to card
				</button>
				<div className="text-[16px]">{product.fullDescription}</div>
			</div>
		</div>
	);
}
