import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import {Footer} from "@/components/Footer/Footer";

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <RootProvider theme={{enabled: true, enableSystem: true, defaultTheme: 'system'}}>{children}</RootProvider>
         <Footer />
      </body>
    </html>
  );
}
