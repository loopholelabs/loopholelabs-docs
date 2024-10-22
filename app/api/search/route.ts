import { architectSource, scaleSource } from '@/app/source';
import { createSearchAPI } from 'fumadocs-core/search/server';

const index = [...architectSource.getPages().map((page) => {
  return ({
    tag: 'architect',
    title: page.data.title,
    description: page.data.description,
    structuredData: page.data.structuredData,
    id: page.url,
    url: page.url,
  });
}), ...scaleSource.getPages().map((page) => {
  return ({
    tag: 'scale',
    title: page.data.title,
    description: page.data.description,
    structuredData: page.data.structuredData,
    id: page.url,
    url: page.url,
  });
})];

export const { GET } = createSearchAPI('advanced', {
  indexes: index,
});
