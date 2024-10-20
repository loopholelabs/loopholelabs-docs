import './global.css';
import {RootProvider} from 'fumadocs-ui/provider';
import {ThemeProvider} from "next-themes";
import {Inter} from 'next/font/google';
import type {ReactNode} from 'react';

import {Footer} from "@/components/Footer/Footer";
import {NavBar} from "@/components/NavBar/NavBar";

const inter = Inter({
    subsets: ['latin'],
});

export default function Layout({children}: { children: ReactNode }) {
    return (
        <html lang="en" className={inter.className} suppressHydrationWarning>
        <body>
        <ThemeProvider enableSystem={true} defaultTheme={'system'} attribute={'class'} enableColorScheme={true}>
            <NavBar/>
            <RootProvider theme={{enabled: false}}>{children}</RootProvider>
            <Footer/>
        </ThemeProvider>
        </body>
        </html>
    );
}