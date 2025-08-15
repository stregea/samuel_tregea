import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

/**
 * Metadata for the application.
 */
export const metadata: Metadata = {
	title: "Samuel Tregea",
	description: "Welcome to my personal website",
};

/**
 * Root layout component for the application.
 *
 * @param children - The children elements to render within the layout.
 * @returns The root layout JSX element.
 */
export default function RootLayout({ children,}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<body>
				{children}
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
};