import { architectSource, scaleSource } from '@/app/source';
import { createSearchAPI } from 'fumadocs-core/search/server';

const index = [...architectSource.getPages(), ...scaleSource.getPages()];

export const { GET } = createSearchAPI('advanced', {
  indexes: architectSource.getPages().map((page) => ({
    title: page.data.title,
    description: page.data.description,
    structuredData: page.data.structuredData,
    id: page.url,
    url: page.url,
  })),
});
