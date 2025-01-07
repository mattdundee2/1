// pages/_app.tsx
import './globals.css';
import { Hanken_Grotesk } from 'next/font/google';
import Footer from '@/components/footer';
import Header from '@/components/header';

const hanken = Hanken_Grotesk({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
});

function RootLayout({ children }: { children: any }) {
	return (
		<html lang="en">
			<head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link
					rel="manifest"
					href="/site.webmanifest"
				/>
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="stylesheet"
					href="https://cdn-uicons.flaticon.com/2.4.2/uicons-brands/css/uicons-brands.css"></link>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
				/>
				<meta
					name="keywords"
					content="AG3 labs, Labs, Drone Technology"
				/>

				<meta
					id="MetaDescription"
					name="DESCRIPTION"
					content="Revolutionizing Autonomous Drone Technology."
				/>
			</head>
			<body className={hanken.className}>
				<Header />
				<main className="flex flex-col scroll-smooth">{children}</main>
				<Footer />
			</body>
		</html>
	);
}

export default RootLayout;
