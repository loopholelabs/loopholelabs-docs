import {DocsLayout} from 'fumadocs-ui/layouts/docs';
import type {ReactNode} from 'react';

import {scaleSource} from '@/app/source';
import {SidebarOptions} from "@/components/Sidebar/Sidebar";
import type {Metadata} from "next/types";

export const metadata: Metadata = {
    title: {
        template: '%s | Scale Docs',
        default: 'Scale | Docs'
    },
    description: 'Scale Documentation',
    applicationName: 'Scale Documentation',
    referrer: 'origin-when-cross-origin',
    keywords: ['Loophole Labs', 'Scale', 'Documentation'],
    metadataBase: new URL('https://loopholelabs.io/docs'),
    category: 'documentation',
}

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <DocsLayout
            tree={scaleSource.pageTree}
            disableThemeSwitch={true}
            sidebar={SidebarOptions()}>
            {children}
        </DocsLayout>
    );
}