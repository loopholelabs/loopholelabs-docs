import { architectSource } from '@/app/source';
import { architectMetadataImage } from '@/lib/metadata';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const page = architectSource.getPage(params.slug);
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
              path: `content/architect/${page.file.path}`,
          }}
      >
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
        <DocsBody>
          <MDX components={{ ...defaultMdxComponents }} />
        </DocsBody>
      </DocsPage>
  );
}

export async function generateStaticParams() {
  return architectSource.generateParams();
}

export async function generateMetadata(props: {
    params: Promise<{ slug?: string[] }>;
}) {
    const params = await props.params;
    const page = architectSource.getPage(params.slug);
    if (!page) notFound();

    return architectMetadataImage.withImage(page.slugs, {
        title: page.data.title,
        description: page.data.description,
    });
}
