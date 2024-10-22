import {scaleSource} from '@/app/source';
import {
    DocsPage,
    DocsBody,
    DocsDescription,
    DocsTitle,
} from 'fumadocs-ui/page';
import {notFound} from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import {scaleMetadataImage} from "@/lib/metadata";

export default async function Page({
                                       params,
                                   }: {
    params: { slug?: string[] };
}) {
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
                <MDX components={{...defaultMdxComponents}}/>
            </DocsBody>
        </DocsPage>
    );
}

export async function generateStaticParams() {
    return scaleSource.generateParams();
}

export async function generateMetadata(props: {
    params: Promise<{ slug?: string[] }>;
}) {
    const params = await props.params;
    const page = scaleSource.getPage(params.slug);
    if (!page) notFound();

    return scaleMetadataImage.withImage(page.slugs, {
        title: page.data.title,
        description: page.data.description,
    });
}
