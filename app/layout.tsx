import './global.css';

import {ThemeProvider} from "next-themes";
import {Inter} from 'next/font/google';
import localFont from 'next/font/local'
import {type ReactNode, useMemo} from 'react';

import {Provider} from "@/app/provider";

import {Footer} from "@/components/Footer/Footer";
import {NavBar} from "@/components/NavBar/NavBar";
import {cn} from "@/lib/cn";

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

export default function Layout({children}: { children: ReactNode }) {
    const compiledClassName = useMemo(() => cn(
        apercuFont.variable,
        interFont.variable,
    ), [])
    return (
        <html lang="en" className={compiledClassName} suppressHydrationWarning>
        <body>
        <ThemeProvider enableSystem={true} defaultTheme={'system'} attribute={'class'} enableColorScheme={true}>
            <Provider>
                <NavBar/>
                {children}
            </Provider>
            <Footer/>
        </ThemeProvider>
        </body>
        </html>
    );
}
