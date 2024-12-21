import { createMetadataImage } from 'fumadocs-core/server';
import {architectSource, polyglotSource, scaleSource} from '@/app/source';

export const architectMetadataImage = createMetadataImage({
    imageRoute: '/architect-docs-og',

    source: architectSource,
});

export const scaleMetadataImage = createMetadataImage({
    imageRoute: '/scale-docs-og',
    source: scaleSource,
});

export const polyglotMetadataImage = createMetadataImage({
    imageRoute: '/polyglot-docs-og',
    source: polyglotSource,
});