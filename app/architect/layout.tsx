import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';

import { architectSource } from '@/app/source';
import {SidebarFooter} from "@/components/Sidebar/Sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
        tree={architectSource.pageTree}
        disableThemeSwitch={true}
        sidebar={{enabled: true, tabs: false, collapsible: false, hideSearch: true, footer: <SidebarFooter />}}>
        {children}
    </DocsLayout>
  );
}
