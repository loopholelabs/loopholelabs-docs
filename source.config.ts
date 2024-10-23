import {defineConfig, defineCollections, frontmatterSchema, metaSchema} from 'fumadocs-mdx/config';
import { z } from 'zod';

export const architectDocs = defineCollections({
    type: 'doc',
    dir: './content/architect',
    schema: frontmatterSchema,
});

export const architectMeta = defineCollections({
    type: 'meta',
    dir: './content/architect',
    schema: metaSchema,
});

export const scaleDocs = defineCollections({
    type: 'doc',
    dir: './content/scale',
    schema: frontmatterSchema,
});

export const scaleMeta = defineCollections({
    type: 'meta',
    dir: './content/scale',
    schema: metaSchema,
});

export default defineConfig({
    lastModifiedTime: "git",
    generateManifest: true,
});
