'use client';

import { MinusIcon, PlusIcon } from 'lucide-react';
import { useState } from 'react';

function QuantitySelector() {
	const [quantity, setQuantity] = useState(1);

	return (
		<div className="w-full max-w-[200px] flex items-center gap-1 border border-(--color-my-gray) rounded-lg">
			<button
				type="button"
				className={`aspect-square flex items-center justify-center ${quantity === 1 ? 'opacity-50 pointer-events-none' : ''}`}
				onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
			>
				<MinusIcon />
			</button>
			<input
				type="text"
				inputMode="numeric"
				pattern="[0-9]*"
				className="w-full text-center"
				value={quantity}
				onChange={(e) => setQuantity(Number(e.target.value))}
			/>
			<button
				type="button"
				className="aspect-square flex items-center justify-center"
				onClick={() => setQuantity((prev) => prev + 1)}
			>
				<PlusIcon />
			</button>
		</div>
	);
}

export default QuantitySelector;
