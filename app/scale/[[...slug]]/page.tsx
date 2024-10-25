import {
    DocsPage,
    DocsBody,
    DocsDescription,
    DocsTitle,
} from 'fumadocs-ui/page';
import {notFound} from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type {ReactElement} from "react";

import {scaleSource, scaleOpenAPI} from '@/app/source';
import {scaleMetadataImage} from "@/lib/metadata";

export default async function Page(props: { params: Promise<{ slug: string[] }>; }): Promise<ReactElement> {
    const params = await props.params;
    const page = scaleSource.getPage(params.slug);
    if (!page) notFound();

    const MDX = page.data.body;

    return (
        <DocsPage
            lastUpdate={page.data.lastModified}
            toc={page.data.toc}
            tableOfContent={{style: 'clerk'}}
            full={page.data.full}
            editOnGithub={{
                owner: 'loopholelabs',
                repo: 'loopholelabs-docs',
                sha: 'main',
                path: `content/scale/${page.file.path}`,
            }}
        >
            <DocsTitle>{page.data.title}</DocsTitle>
            <DocsDescription>{page.data.description}</DocsDescription>
            <DocsBody>
                <MDX components={{
                    ...defaultMdxComponents,
                    APIPage: scaleOpenAPI.APIPage,
                }}/>
            </DocsBody>
        </DocsPage>
    );
}

export async function generateStaticParams() {
    return scaleSource.generateParams();
}

export async function generateMetadata(props: { params: Promise<{ slug?: string[] }>; }) {
    const params = await props.params;
    const page = scaleSource.getPage(params.slug);
    if (!page) notFound();

    return scaleMetadataImage.withImage(page.slugs, {
        metadataBase: new URL('https://loopholelabs.io'),
        title: page.data.title,
        description: page.data.description,
        twitter: {
            card: 'summary_large_image',
            creator: '@loopholelabs',
        },
        openGraph: {
            url: 'https://loopholelabs.io/docs',
            siteName: 'Scale Docs',
        },
    });
}
