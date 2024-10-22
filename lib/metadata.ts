import { createMetadataImage } from 'fumadocs-core/server';
import { architectSource, scaleSource } from '@/app/source';

export const architectMetadataImage = createMetadataImage({
    imageRoute: '/architect-docs-og',
    source: architectSource,
});

export const scaleMetadataImage = createMetadataImage({
    imageRoute: '/scale-docs-og',
    source: scaleSource,
});