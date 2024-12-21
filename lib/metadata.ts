import { createMetadataImage } from 'fumadocs-core/server';
import {architectSource, polyglotSource, scaleSource} from '@/app/source';

export const architectMetadataImage = createMetadataImage({
    imageRoute: '/architect-og',

    source: architectSource,
});

export const scaleMetadataImage = createMetadataImage({
    imageRoute: '/scale-og',
    source: scaleSource,
});

export const polyglotMetadataImage = createMetadataImage({
    imageRoute: '/polyglot-og',
    source: polyglotSource,
});