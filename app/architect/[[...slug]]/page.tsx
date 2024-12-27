import {DocsPage, DocsBody, DocsDescription, DocsTitle,} from 'fumadocs-ui/page';
import {notFound} from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import {type ReactElement} from "react";
import {redirect} from "next/navigation";

import {architectSource} from '@/app/source';
import {architectMetadataImage} from '@/lib/metadata';
import {architectRedirects as redirects} from "@/lib/redirects";

export const dynamic = 'force-static';

export default async function Page(props: { params: Promise<{ slug: string[] }>; }): Promise<ReactElement> {
    const params = await props.params;
    const page = architectSource.getPage(params.slug);
    if (!page) {
        // @ts-ignore
        if (redirects[params.slug[0]] !== undefined) {
            // @ts-ignore
            return redirect(redirects[params.slug[0]]);
        } else {
            notFound();
        }
    }

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
                path: `content/architect/${page.file.path}`,
            }}
        >
            <DocsTitle>{page.data.title}</DocsTitle>
            <DocsDescription>{page.data.description}</DocsDescription>
            <DocsBody>
                <MDX components={{...defaultMdxComponents}}/>
            </DocsBody>
        </DocsPage>
    );
}

export async function generateStaticParams() {
    return architectSource.generateParams();
}

export async function generateMetadata(props: { params: Promise<{ slug?: string[] }>; }) {
    const params = await props.params;
    const page = architectSource.getPage(params.slug);
    if (!page) {
        // @ts-ignore
        if (redirects[params.slug[0]] !== undefined) {
            // @ts-ignore
            return redirect(redirects[params.slug[0]]);
        } else {
            notFound();
        }
    }

    return architectMetadataImage.withImage(page.slugs, {
        metadataBase: new URL('https://loopholelabs.io/docs'),
        title: page.data.title,
        description: page.data.description,
        twitter: {
            card: 'summary_large_image',
            creator: '@loopholelabs',
        },
        openGraph: {
            url: 'https://loopholelabs.io/docs',
            siteName: 'Architect Docs',
        },
    });
}
