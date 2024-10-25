import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';

import { architectSource } from '@/app/source';
import {SidebarOptions} from "@/components/Sidebar/Sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
        tree={architectSource.pageTree}
        nav={{title: 'Architect | Docs'}}
        disableThemeSwitch={true}
        sidebar={SidebarOptions()}>
        {children}
    </DocsLayout>
  );
}
