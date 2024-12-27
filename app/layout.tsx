import './global.css';

import {ThemeProvider} from "next-themes";
import {Inter} from 'next/font/google';
import type {Metadata} from 'next/types';
import {type ReactNode, useMemo} from 'react';

import {RootProvider} from "@/app/providers";

import {Footer} from "@/components/Footer/Footer";
import {NavBar} from "@/components/NavBar/NavBar";
import {cn} from "@/lib/cn";
import {PostHogBootstrap} from "@/lib/posthog";

const interFont = Inter({
    display: 'fallback',
    subsets: ['latin'],
    variable: '--font-inter',
})

export const metadata: Metadata = {
    title: 'Loophole Labs | Docs',
    description: 'Loophole Labs Documentation',
    applicationName: 'Loophole Labs Documentation',
    referrer: 'origin-when-cross-origin',
    keywords: ['Loophole Labs', 'Architect', 'Scale', 'Polyglot', 'Documentation'],
    metadataBase: new URL('https://loopholelabs.io/docs'),
    category: 'technology',
}

export const dynamic = 'force-dynamic';

export default async function Layout({children}: { children: ReactNode }) {
    const compiledClassName = useMemo(() => cn(
        interFont.variable,
    ), []);
    const bootstrapData = await PostHogBootstrap();
    return (
        <html lang="en" className={compiledClassName} suppressHydrationWarning>
        <body>
        <ThemeProvider enableSystem={true} defaultTheme={'system'} attribute={'class'} enableColorScheme={true}>
            <RootProvider posthogBootstrap={bootstrapData}>
                <NavBar/>
                {children}
                <Footer/>
            </RootProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
