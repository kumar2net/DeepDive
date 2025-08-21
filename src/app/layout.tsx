import type { Metadata, Viewport } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

export const metadata: Metadata = {
	title: "Deep Dive - Learn Smarter, Not Harder",
	description: "A modern, mobile-first learning platform designed for millennials. Master complex concepts through interactive, bite-sized lessons.",
	keywords: "learning, education, millennials, mobile-first, interactive, modern",
	openGraph: {
		title: "Deep Dive - Learn Smarter, Not Harder",
		description: "Master complex concepts through interactive, bite-sized lessons",
		type: "website",
	},
	icons: {
		icon: '/favicon.ico',
	},
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 5,
	themeColor: '#9333ea',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				{/* Modern font stack for millennials */}
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800;900&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap"
					rel="stylesheet"
				/>
				{/* Mobile web app capable */}
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
			</head>
			<body className="font-body antialiased min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
				{children}
				<Toaster />
			</body>
		</html>
	);
}
