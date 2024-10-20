import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';
import { architectSource } from '@/app/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
        nav={{enabled: true, enableSearch: true, transparentMode: 'top'}}
        tree={architectSource.pageTree}
        sidebar={{enabled: true, collapsible: true, hideSearch: true}}>
      {children}
    </DocsLayout>
  );
}
