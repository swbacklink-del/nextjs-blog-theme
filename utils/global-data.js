export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Panduan Lengkap Membuat Website Company Profile untuk Pemula';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Panduan lengkap membuat website company profile untuk pemula. Pelajari langkah mudah mulai dari domain, desain, konten, hingga optimasi SEO agar bisnis terlihat profesional dan terpercaya.';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
