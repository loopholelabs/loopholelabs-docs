import { architectDocs, architectMeta , scaleDocs, scaleMeta} from '@/.source';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';

export const architectSource = loader({
  baseUrl: '/architect',
  source: createMDXSource(architectDocs, architectMeta),
});

export const scaleSource = loader({
  baseUrl: '/scale',
  source: createMDXSource(scaleDocs, scaleMeta),
});
