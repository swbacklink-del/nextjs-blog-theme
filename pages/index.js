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
      
      <main className="w-full px-4 lg:px-20 py-10">
  <h1 className="mb-12 text-3xl text-center lg:text-5xl font-bold">
    Panduan Lengkap Membuat Website Company Profile untuk Pemula
  </h1>

  <section className="mb-12">
    <p className="text-lg leading-relaxed mb-4">
      Pernahkah Anda bertanya-tanya, mengapa beberapa bisnis terlihat jauh lebih profesional
      dibanding yang lain? Salah satu jawabannya ada pada <strong>website company profile</strong>. 
      Website ini ibarat wajah digital perusahaan Anda. Calon pelanggan bisa mengenal siapa Anda, 
      apa yang Anda tawarkan, hingga bagaimana cara menghubungi Anda—semuanya dalam satu tempat.
    </p>
    <p className="text-lg leading-relaxed">
      Sayangnya, masih banyak pemilik bisnis, terutama UMKM atau usaha baru, yang menganggap 
      membuat website itu ribet dan mahal. Padahal, dengan panduan yang tepat, siapa pun bisa 
      punya website company profile yang terlihat profesional. Artikel ini akan memandu Anda 
      langkah demi langkah, mulai dari pengertian, manfaat, hingga cara membuatnya.
    </p>
  </section>

  <section className="mb-12">
    <h2 className="text-2xl font-semibold mb-4">Apa Itu Website Company Profile?</h2>
    <p className="text-lg leading-relaxed mb-4">
      Website company profile adalah situs web yang berfungsi sebagai profil resmi perusahaan 
      di dunia online. Isinya biasanya meliputi informasi dasar tentang perusahaan, visi misi, 
      layanan atau produk yang ditawarkan, portofolio, serta kontak yang bisa dihubungi.
    </p>
    <p className="text-lg leading-relaxed">
      Jika diibaratkan, company profile adalah <em>kartu nama digital</em>. Bedanya, kartu nama 
      hanya bisa dibagikan secara langsung, sedangkan website bisa diakses siapa saja dari 
      seluruh dunia, kapan pun mereka mau. Inilah alasan kenapa banyak bisnis kini berlomba-lomba 
      membuat website company profile yang rapi dan meyakinkan.
    </p>
  </section>

  <section className="mb-12">
    <h2 className="text-2xl font-semibold mb-4">Kenapa Website Company Profile Penting?</h2>
    <p className="text-lg leading-relaxed mb-4">
      Mungkin Anda berpikir, “Saya kan sudah punya Instagram dan WhatsApp, apa perlu punya website juga?”
      Jawabannya: <strong>perlu</strong>. Media sosial memang bagus, tapi website punya keunggulan yang tidak bisa digantikan.
    </p>
    <ul className="list-disc pl-6 space-y-3 text-lg mb-6">
      <li>
        <strong>Meningkatkan kredibilitas</strong> – Bisnis dengan website resmi lebih mudah dipercaya 
        dibandingkan bisnis yang hanya ada di media sosial.
      </li>
      <li>
        <strong>Mudah ditemukan di Google</strong> – Calon pelanggan sering kali mencari produk atau jasa 
        lewat mesin pencari. Dengan website, peluang ditemukan jadi lebih besar.
      </li>
      <li>
        <strong>Sarana branding</strong> – Desain, warna, dan gaya bahasa di website bisa mencerminkan 
        identitas brand Anda dengan lebih bebas.
      </li>
      <li>
        <strong>Informasi lebih lengkap</strong> – Website tidak terbatas jumlah kata atau fitur, 
        sehingga Anda bisa menampilkan portofolio, testimoni, hingga artikel blog.
      </li>
      <li>
        <strong>Meningkatkan konversi</strong> – Dengan tombol call-to-action, formulir kontak, 
        atau WhatsApp button, peluang mendapatkan pelanggan baru semakin tinggi.
      </li>
    </ul>
    <p className="text-lg leading-relaxed">
      Jadi, kalau ingin bisnis terlihat serius dan profesional, memiliki website company profile 
      adalah langkah yang wajib.
    </p>
  </section>

  <section className="mb-12">
    <h2 className="text-2xl font-semibold mb-4">Langkah-Langkah Membuat Website Company Profile</h2>
    <p className="text-lg leading-relaxed mb-6">
      Sekarang mari kita masuk ke bagian paling penting: bagaimana cara membuat website company profile.
      Jangan khawatir, panduan ini dibuat sesederhana mungkin agar mudah diikuti, bahkan oleh pemula.
    </p>

    <h3 className="text-xl font-semibold mb-2">1. Tentukan Tujuan Website</h3>
    <p className="text-lg leading-relaxed mb-6">
      Apa tujuan utama website Anda? Apakah hanya untuk memperkenalkan perusahaan, menampilkan 
      portofolio, atau langsung menarik klien baru? Dengan menentukan tujuan di awal, Anda akan 
      lebih mudah menyusun konten dan desain yang sesuai.
    </p>

    <h3 className="text-xl font-semibold mb-2">2. Pilih Nama Domain & Hosting</h3>
    <p className="text-lg leading-relaxed mb-6">
      Domain adalah alamat website Anda, misalnya <code>perusahaananda.com</code>. Usahakan singkat, mudah diingat, 
      dan sesuai dengan nama brand. Setelah itu, pilih layanan hosting yang cepat dan stabil. 
      Hosting ibarat rumah tempat semua file website Anda disimpan.
    </p>

    <h3 className="text-xl font-semibold mb-2">3. Susun Struktur Halaman</h3>
    <p className="text-lg leading-relaxed mb-4">
      Website company profile biasanya punya beberapa halaman utama:
    </p>
    <ul className="list-disc pl-6 space-y-2 text-lg mb-6">
      <li><strong>Home</strong> – Halaman utama yang memberi gambaran singkat tentang bisnis.</li>
      <li><strong>Tentang Kami</strong> – Cerita tentang siapa Anda, visi misi, dan sejarah singkat.</li>
      <li><strong>Layanan/Produk</strong> – Daftar jasa atau produk yang ditawarkan.</li>
      <li><strong>Portofolio</strong> – Contoh hasil kerja atau proyek yang pernah dikerjakan.</li>
      <li><strong>Kontak</strong> – Alamat, nomor telepon, email, dan formulir kontak.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2">4. Buat Desain yang Profesional</h3>
    <p className="text-lg leading-relaxed mb-6">
      Desain website tidak harus mewah. Yang penting simpel, bersih, dan enak dilihat. 
      Pastikan website Anda responsif, artinya tampil bagus di layar HP maupun laptop.
    </p>

    <h3 className="text-xl font-semibold mb-2">5. Tulis Konten yang Menarik</h3>
    <p className="text-lg leading-relaxed mb-6">
      Hindari bahasa yang terlalu kaku. Gunakan kalimat yang humanis, ramah, dan mudah dipahami. 
      Misalnya, daripada menulis “Perusahaan kami bergerak di bidang pembuatan website berkualitas tinggi”, 
      lebih baik tulis “Kami membantu bisnis punya website profesional dengan harga terjangkau”.
    </p>

    <h3 className="text-xl font-semibold mb-2">6. Optimasi SEO</h3>
    <p className="text-lg leading-relaxed mb-6">
      Agar website mudah ditemukan di Google, lakukan optimasi SEO dasar. 
      Gunakan keyword relevan seperti <em>“membuat website company profile”</em>, 
      buat meta description yang jelas, gunakan heading (H1, H2, H3) dengan benar, 
      dan pastikan kecepatan website optimal.
    </p>

    <h3 className="text-xl font-semibold mb-2">7. Publikasikan & Promosikan</h3>
    <p className="text-lg leading-relaxed">
      Setelah website jadi, jangan diam saja. Sebarkan di media sosial, sertakan di bio Instagram, 
      email signature, bahkan kartu nama. Semakin banyak orang tahu, semakin besar peluang website Anda bekerja untuk bisnis.
    </p>
  </section>

  <section className="mb-12">
    <h2 className="text-2xl font-semibold mb-4">Tips Agar Website Company Profile Lebih Maksimal</h2>
    <ul className="list-disc pl-6 space-y-3 text-lg mb-6">
      <li>Gunakan <strong>SSL (https)</strong> agar website aman dan lebih dipercaya.</li>
      <li>Tambahkan <strong>Google Maps</strong> di halaman kontak.</li>
      <li>Pasang <strong>testimoni pelanggan</strong> agar calon klien lebih yakin.</li>
      <li>Gunakan <strong>foto asli</strong> tim atau perusahaan, bukan hanya stok foto.</li>
      <li>Rutin update portofolio dan artikel blog agar website terlihat aktif.</li>
    </ul>
    <p className="text-lg leading-relaxed">
      Tips ini mungkin terdengar sepele, tapi justru yang membedakan website profesional dengan website seadanya.
    </p>
  </section>

  <section className="mb-12">
    <h2 className="text-2xl font-semibold mb-4">Solusi Praktis untuk Pemula</h2>
    <p className="text-lg leading-relaxed mb-4">
      Tidak semua orang punya waktu untuk belajar domain, hosting, desain, hingga SEO. 
      Kalau Anda sibuk mengurus bisnis, solusi paling cepat adalah menggunakan 
      <strong> jasa pembuatan website company profile seperti yang disedian oleh <a href='https://stasiunwebsite.com'>StasiunWebsite</a></strong>.
    </p>
    <p className="text-lg leading-relaxed">
      Dengan cara ini, Anda bisa langsung punya website profesional tanpa pusing mikirin hal teknis. 
      Tim profesional akan mengurus semuanya, mulai dari desain, keamanan, hingga optimasi SEO. 
      Anda tinggal terima jadi, lalu fokus ke pengembangan bisnis.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold mb-4">Kesimpulan</h2>
    <p className="text-lg leading-relaxed mb-4">
      Membuat website company profile untuk pemula tidak sesulit yang dibayangkan. 
      Dengan menentukan tujuan, menyusun struktur halaman, menulis konten natural, 
      dan sedikit optimasi SEO, Anda sudah bisa punya website yang terlihat profesional 
      dan dipercaya calon pelanggan.
    </p>
    <p className="text-lg leading-relaxed">
      Jika ingin lebih hemat waktu dan hasil maksimal, menggunakan jasa pembuatan website adalah pilihan bijak. 
      Percayalah, website yang rapi dan profesional bisa jadi investasi digital terbaik untuk bisnis Anda. 
      Mulailah sekarang, karena semakin cepat Anda punya website, semakin cepat pula peluang bisnis Anda berkembang.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold mb-4">Reference</h2>
    <a href='https://www.tumblr.com/tangerangbisnis'>Tangerang Bisnis</a>
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
