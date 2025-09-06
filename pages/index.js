import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full px-4 lg:px-20 py-10">
        <h1 className="mb-12 text-3xl text-center lg:text-5xl font-bold">
          Panduan Lengkap Membuat Website Company Profile untuk Pemula
        </h1>

        <section className="mb-12">
          <p className="text-lg leading-relaxed mb-4">
            Pernah nggak sih Anda ketemu sebuah brand, lalu langsung cek websitenya biar lebih yakin? 
            Nah, itulah fungsi utama <strong>website company profile</strong>. Website ini ibarat kartu nama digital 
            yang bisa diakses siapa saja, kapan saja.
          </p>
          <p className="text-lg leading-relaxed">
            Artikel ini akan membantu Anda memahami apa itu website company profile, 
            kenapa penting, dan bagaimana cara membuatnya, khususnya untuk pemula.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Apa Itu Website Company Profile?</h2>
          <p className="text-lg leading-relaxed">
            Sederhananya, website company profile adalah situs yang berisi informasi tentang perusahaan Anda: 
            siapa Anda, apa yang ditawarkan, dan bagaimana orang bisa menghubungi Anda. 
            Bisa dibilang ini adalah <em>pintu depan digital</em> untuk memperkenalkan bisnis Anda.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Kenapa Website Company Profile Penting?</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li><strong>Lebih dipercaya</strong> – Bisnis dengan website resmi terlihat lebih profesional.</li>
            <li><strong>Mudah ditemukan</strong> – Pelanggan bisa cari lewat Google kapan saja.</li>
            <li><strong>Branding lebih kuat</strong> – Desain website bisa disesuaikan dengan identitas brand.</li>
            <li><strong>Jangkauan lebih luas</strong> – Klien dari mana saja bisa mengenal bisnis Anda.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Cara Membuat Website Company Profile</h2>
          <ol className="list-decimal pl-6 space-y-4 text-lg">
            <li>
              <strong>Tentukan Tujuan</strong> – Apakah untuk perkenalan, branding, atau menarik klien baru?
            </li>
            <li>
              <strong>Siapkan Domain & Hosting</strong> – Pilih nama domain yang singkat dan mudah diingat.
            </li>
            <li>
              <strong>Buat Struktur Halaman</strong> – Minimal ada Beranda, Tentang Kami, Layanan, Portofolio, dan Kontak.
            </li>
            <li>
              <strong>Desain yang Simple tapi Profesional</strong> – Pastikan responsif di HP maupun laptop.
            </li>
            <li>
              <strong>Tulis Konten Natural</strong> – Gunakan bahasa yang ramah, bukan kaku.
            </li>
            <li>
              <strong>Optimasi SEO</strong> – Gunakan keyword relevan, meta description, dan struktur heading yang benar.
            </li>
            <li>
              <strong>Publish & Promosikan</strong> – Share website di media sosial, bio Instagram, dan kartu nama.
            </li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Tips Agar Website Lebih Maksimal</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Tambahkan testimoni pelanggan untuk meningkatkan kepercayaan.</li>
            <li>Pasang Google Maps di halaman kontak.</li>
            <li>Gunakan foto asli tim/perusahaan, bukan hanya stok foto.</li>
            <li>Rutin update portofolio atau artikel blog.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Solusi untuk yang Nggak Mau Ribet</h2>
          <p className="text-lg leading-relaxed">
            Kalau Anda sibuk dan nggak punya waktu belajar teknis, solusi termudah adalah menggunakan 
            <strong> jasa pembuatan website company profile</strong>. 
            Dengan cara ini, Anda bisa langsung punya website profesional tanpa harus pusing urusan desain atau coding.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Kesimpulan</h2>
          <p className="text-lg leading-relaxed">
            Membuat website company profile sebenarnya tidak serumit yang dibayangkan. 
            Dengan langkah-langkah sederhana di atas, Anda bisa punya website yang terlihat profesional, 
            dipercaya, dan membantu bisnis makin berkembang.  
            Kalau ingin hemat waktu, gunakan jasa pembuatan website agar hasilnya maksimal dan cepat jadi.
          </p>
        </section>
      </main>

      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
