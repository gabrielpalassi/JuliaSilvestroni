import { instagramUrl, site } from "@/content/site";

export const seo = {
  title: `${site.name} | Nutricionista`,
  description:
    "Acompanhamento nutricional online com Júlia Silvestroni, nutricionista formada pela USP. Um plano alimentar para sua rotina, com método, leveza e resultado.",
  image: `${site.url}/og-image.png`,
  imageAlt: "Júlia Silvestroni, nutricionista. Nutrição com método, leveza e resultado.",
};

export function pageHead({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = new URL(path, site.url).href;
  return {
    links: [{ rel: "canonical", href: url }],
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: site.name },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: url },
      { property: "og:image", content: seo.image },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: seo.imageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: seo.image },
      { name: "twitter:image:alt", content: seo.imageAlt },
    ],
  };
}

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#profissional`,
      name: site.name,
      url: `${site.url}/`,
      jobTitle: site.title,
      sameAs: [instagramUrl],
      identifier: { "@type": "PropertyValue", name: "Registro profissional", value: site.crn },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Universidade de São Paulo (USP)" },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#site`,
      url: `${site.url}/`,
      name: site.name,
      inLanguage: "pt-BR",
      publisher: { "@id": `${site.url}/#profissional` },
    },
    {
      "@type": "WebPage",
      "@id": `${site.url}/#pagina`,
      url: `${site.url}/`,
      name: seo.title,
      description: seo.description,
      inLanguage: "pt-BR",
      isPartOf: { "@id": `${site.url}/#site` },
      about: { "@id": `${site.url}/#profissional` },
      mainEntity: { "@id": `${site.url}/#atendimento-online` },
    },
    {
      "@type": "Service",
      "@id": `${site.url}/#atendimento-online`,
      name: "Acompanhamento nutricional online",
      serviceType: "Consulta e acompanhamento nutricional online",
      provider: { "@id": `${site.url}/#profissional` },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: `${site.url}/#atendimento`,
      },
    },
  ],
};
