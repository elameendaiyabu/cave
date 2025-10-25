import "../globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

const FigtreeFont = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Cave ERP",
	description:
		"A  waitlist for businesses to sign up for an ERP with loan credibility rankings.",
};

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;

	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

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
				<NextIntlClientProvider>{children}</NextIntlClientProvider>
				<Toaster richColors position="top-center" />
				<Analytics />
			</body>
		</html>
	);
}
