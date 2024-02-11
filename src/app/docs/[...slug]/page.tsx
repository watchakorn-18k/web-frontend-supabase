interface DocsParams {
  slug: string[];
}

export default function Docs({ params }: { params: DocsParams }) {
  if (params.slug.length === 2) {
    return <h1>Docs {params.slug}</h1>;
  }
  return <h1>Docs</h1>;
}
