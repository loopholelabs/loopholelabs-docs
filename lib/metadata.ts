import { createMetadataImage } from 'fumadocs-core/server';
import {architectSource, polyglotSource, scaleSource} from '@/app/source';

export const architectMetadataImage = createMetadataImage({
    imageRoute: '/docs/architect-docs-og',

    source: architectSource,
});

export const scaleMetadataImage = createMetadataImage({
    imageRoute: '/docs/scale-docs-og',
    source: scaleSource,
});

export const polyglotMetadataImage = createMetadataImage({
    imageRoute: '/docs/polyglot-docs-og',
    source: polyglotSource,
});