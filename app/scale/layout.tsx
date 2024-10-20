import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';
import { scaleSource } from '@/app/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={scaleSource.pageTree}>
      {children}
    </DocsLayout>
  );
}
