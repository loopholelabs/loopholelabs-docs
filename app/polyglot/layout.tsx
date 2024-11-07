import {DocsLayout} from 'fumadocs-ui/layouts/docs';
import type {ReactNode} from 'react';

import {polyglotSource} from '@/app/source';
import {SidebarOptions} from "@/components/Sidebar/Sidebar";
import type {Metadata} from "next/types";

export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: {
        template: '%s | Polyglot Docs',
        default: 'Polyglot Docs'
    },
    description: 'Polyglot Documentation',
    applicationName: 'Polyglot Documentation',
    referrer: 'origin-when-cross-origin',
    keywords: ['Loophole Labs', 'Polyglot', 'Documentation'],
    metadataBase: new URL('https://loopholelabs.io/docs'),
    category: 'documentation',
}

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <DocsLayout
            tree={polyglotSource.pageTree}
            disableThemeSwitch={true}
            sidebar={SidebarOptions()}>
            {children}
        </DocsLayout>
    );
}