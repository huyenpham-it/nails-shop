import { PRODUCTS_LIST } from '@/ultis/constants';
import ProductComponent from '../ProductComponent';

export async function generateStaticParams() {
	return PRODUCTS_LIST.map((p) => ({
		'product-slug': p.slug
	}));
}

export default async function ProductDetailPage({ params }) {
	const { 'product-slug': slug } = await params;

	const product = PRODUCTS_LIST.find((p) => p.slug === slug);

	if (!product) {
		return <div>Product not found</div>;
	}

	return <ProductComponent product={product} />;
}
