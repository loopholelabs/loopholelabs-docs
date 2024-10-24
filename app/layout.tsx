import './global.css';

import {ThemeProvider} from "next-themes";
import {Inter} from 'next/font/google';
import localFont from 'next/font/local'
import {type ReactNode, useMemo} from 'react';

import {RootProvider} from "@/app/providers";

import {Footer} from "@/components/Footer/Footer";
import {NavBar} from "@/components/NavBar/NavBar";
import {cn} from "@/lib/cn";
import {PostHogBootstrap} from "@/lib/posthog";

const apercuFont = localFont({
    display: 'swap',
    variable: '--font-apercu',
    src: '../public/fonts/Apercu/ApercuVariableProportional.woff2',
})
const interFont = Inter({
    display: 'fallback',
    subsets: ['latin'],
    variable: '--font-inter',
})

export default async function Layout({children}: { children: ReactNode }) {
    const compiledClassName = useMemo(() => cn(
        apercuFont.variable,
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
