import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';

import { architectSource } from '@/app/source';
import {SidebarOptions} from "@/components/Sidebar/Sidebar";
import type {Metadata} from "next/types";

export const metadata: Metadata = {
  title: {
    template: '%s | Architect Docs',
    default: 'Architect Docs'
  },
  description: 'Architect Documentation',
  applicationName: 'Architect Documentation',
  referrer: 'origin-when-cross-origin',
  keywords: ['Loophole Labs', 'Architect', 'Documentation'],
  metadataBase: new URL('https://loopholelabs.io/docs'),
  category: 'documentation',
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
        tree={architectSource.pageTree}
        disableThemeSwitch={true}
        sidebar={SidebarOptions()}>
        {children}
    </DocsLayout>
  );
}
