import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

const FigtreeFont = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Cave ERP",
	description:
		"A  waitlist for businesses to sign up for an ERP with loan credibility rankings.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark" suppressHydrationWarning>
			<meta property="og:image" content="/opengraph-image.png" />
			<meta property="og:image:type" content="image/png" />
			<meta property="og:image:width" content="1280" />
			<meta property="og:image:height" content="832" />
			<meta property="og:site_name" content="Cave ERP System" />
			<meta property="og:url" content="https://caveerp.com/" />
			<meta name="twitter:image" content="/twitter-image.png" />
			<meta name="twitter:image:type" content="image/png" />
			<meta name="twitter:image:width" content="1280" />
			<meta name="twitter:image:height" content="832" />
			<body className={FigtreeFont.className}>
				{children}
				<Toaster richColors position="top-center" />
				<Analytics />
			</body>
		</html>
	);
}
