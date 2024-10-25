import {createSearchAPI} from 'fumadocs-core/search/server';
import {architectSource, scaleSource, polyglotSource} from '@/app/source';

const index = [
    ...architectSource.getPages().map((page) => {
        return ({
            tag: 'architect',
            title: page.data.title,
            description: page.data.description,
            structuredData: page.data.structuredData,
            id: page.url,
            url: page.url,
        });
    }),
    ...scaleSource.getPages().map((page) => {
        return ({
            tag: 'scale',
            title: page.data.title,
            description: page.data.description,
            structuredData: page.data.structuredData,
            id: page.url,
            url: page.url,
        });
    }),
    ...polyglotSource.getPages().map((page) => {
        return ({
            tag: 'polyglot',
            title: page.data.title,
            description: page.data.description,
            structuredData: page.data.structuredData,
            id: page.url,
            url: page.url,
        });
    })
];

export const {GET} = createSearchAPI('advanced', {
    indexes: index,
});
