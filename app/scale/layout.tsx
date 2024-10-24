import {DocsLayout} from 'fumadocs-ui/layouts/docs';
import type {ReactNode} from 'react';

import {scaleSource} from '@/app/source';
import {SidebarOptions} from "@/components/Sidebar/Sidebar";

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