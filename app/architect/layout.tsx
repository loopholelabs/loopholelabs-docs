import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';
import { architectSource } from '@/app/source';

import {Links} from "@/components/NavBar/NavBar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
        nav={{enabled: true}}
        tree={architectSource.pageTree}
        sidebar={{collapsible: false, hideSearch: true, footerProps: {className: 'py-3 md:hidden flex-row-reverse justify-between'}, footer: <Links mobile />}}>
        {children}
    </DocsLayout>
  );
}
