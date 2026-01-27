import ProductComponent from '../ProductComponent';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function getProductBySlug(slug) {
	const res = await fetch(`${API_URL}/api/products/slug/${slug}`, {
		cache: 'no-store' // SSR (luôn fetch mới)
		// next: { revalidate: 60 } // nếu muốn ISR
	});

	if (!res.ok) {
		return null;
	}

	return res.json();
}

export default async function ProductDetailPage({ params }) {
	const { 'product-slug': slug } = await params;

	const product = await getProductBySlug(slug);

	if (!product) {
		return <div>Product not found</div>;
	}

	return <ProductComponent product={product} />;
}
