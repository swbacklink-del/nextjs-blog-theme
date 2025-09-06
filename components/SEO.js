import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta name="robots" content="index, follow"></meta>
      <link rel="canonical" href="https://jasa-website-murah.netlify.app/" />
    </Head>
  );
}
