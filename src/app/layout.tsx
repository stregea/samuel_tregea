import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import type {Metadata} from "next";
import {SpeedInsights} from "@vercel/speed-insights/next";
import {Analytics} from "@vercel/analytics/next";

/**
 * Metadata for the application.
 */
export const metadata: Metadata = {
    metadataBase: new URL('https://www.samueltregea.com'),
    title: {
        default: 'Samuel Tregea',
        template: '%s | Samuel Tregea',
    },
    description:
        'Portfolio of Samuel Tregea – A Software Engineer specializing in fullstack development using Java, Spring Boot, Python, React, Next.js, TypeScript, and Angular.',
    openGraph: {
        title: 'Samuel Tregea',
        description:
            'Portfolio of Samuel Tregea – A Software Engineer specializing in fullstack development using Java, Spring Boot, Python, React, Next.js, TypeScript, and Angular.',
        url: 'https://www.samueltregea.com',
        siteName: 'Samuel Tregea',
        images: [
            {
                url: '/og-image.jpeg',
                width: 1200,
                height: 630,
                alt: 'Samuel Tregea\'s Portfolio',
            },
        ],
        locale: 'en_US',
        type: 'website',
    }
};

/**
 * Root layout component for the application.
 *
 * @param children - The children elements to render within the layout.
 * @returns The root layout JSX element.
 */
export default function RootLayout({children,}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </head>
            <body>
                {children}
                <SpeedInsights/>
                <Analytics/>
            </body>
        </html>
    );
};