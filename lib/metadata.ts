import { createMetadataImage } from 'fumadocs-core/server';
import {architectSource, polyglotSource, scaleSource} from '@/app/source';

const basePath = process.env.NODE_ENV === 'development' ? '/docs' : '';

export const architectMetadataImage = createMetadataImage({
    imageRoute: `${basePath}/architect-og`,
    source: architectSource,
});

export const scaleMetadataImage = createMetadataImage({
    imageRoute: `${basePath}/scale-og`,
    source: scaleSource,
});

export const polyglotMetadataImage = createMetadataImage({
    imageRoute: `${basePath}/polyglot-og`,
    source: polyglotSource,
});