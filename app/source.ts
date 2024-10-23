import { architectDocs, architectMeta , scaleDocs, scaleMeta} from '@/.source';
import { createMDXSource } from 'fumadocs-mdx';
import { createOpenAPI, attachFile } from 'fumadocs-openapi/server';
import { loader } from 'fumadocs-core/source';

export const architectSource = loader({
  baseUrl: '/architect',
  source: createMDXSource(architectDocs, architectMeta),
});

export const scaleSource = loader({
  baseUrl: '/scale',
  pageTree: {
    attachFile: attachFile,
  },
  source: createMDXSource(scaleDocs, scaleMeta),
});

export const scaleOpenAPI = createOpenAPI({
  shikiOptions: {
    themes: {
      dark: 'vesper',
      light: 'vitesse-light',
    },
  },
});