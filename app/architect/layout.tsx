import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';

import { architectSource } from '@/app/source';
import {SidebarFooter} from "@/components/Sidebar/Sidebar";
import Img from "@/components/Img/Img";
import ArchitectIconLight from "@/public/images/architect-icon-light.svg";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
        tree={architectSource.pageTree}
        disableThemeSwitch={true}
        sidebar={{enabled: true, tabs: [
            { url: '/architect', title: 'Architect', description: 'Workload Orchestration', icon: <Img image={ArchitectIconLight} alt="Architect icon" className="h-5 w-auto" priority/>},
            { url: '/scale', title: 'Scale', icon: <Img image={ArchitectIconLight} alt="Architect icon" className="h-5 w-auto" priority/>}
          ], collapsible: false, hideSearch: true, footer: <SidebarFooter />}}>
        {children}
    </DocsLayout>
  );
}
