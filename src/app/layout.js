import { Footer, Header, LazyShow, ScrollToTopButton } from '@/components';
import { Allison, Figtree, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import 'swiper/css';
import './globals.css';

const figtree = Figtree({
	variable: '--font-figtree',
	subsets: ['latin']
});

const playfair = Playfair_Display({
	variable: '--font-playfair-display',
	subsets: ['latin']
});

const allison = Allison({
	variable: '--font-allison',
	subsets: ['latin'],
	weight: ['400']
});

const plus_jakarta_sans = Plus_Jakarta_Sans({
	variable: '--font-plus-jakarta-sans',
	subsets: ['latin'],
});

export const metadata = {
	title: 'Nail Shop',
	description: 'Nail Shop'
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link rel="stylesheet" href="/icons/icons.css" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body className={`${figtree.variable} ${playfair.variable} ${allison.variable} ${plus_jakarta_sans.variable} antialiased`}>
				<LazyShow>
					<Header />
				</LazyShow>

				{children}

				<LazyShow>
					<Footer />
				</LazyShow>

				<ScrollToTopButton />
			</body>
		</html>
	);
}
