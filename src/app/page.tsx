"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#d4d4d4] font-sans selection:bg-[#800000] selection:text-white">
      {/* Navbar - Simple, no excessive blur/glass */}
      <nav className="fixed top-0 z-50 w-full border-b border-[#222] bg-[#050505]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo HIMAFORKA" width={32} height={32} />
            <span className="text-base font-bold text-white tracking-wide">HIMAFORKA</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#a3a3a3]">
            <Link href="#tentang" className="hover:text-white transition-colors">Tentang</Link>
            <Link href="#visi-misi" className="hover:text-white transition-colors">Visi & Misi</Link>
            <Link href="#divisi" className="hover:text-white transition-colors">Divisi</Link>
            <Link href="#mitra" className="hover:text-white transition-colors">Mitra</Link>
            <Link href="#kontak" className="hover:text-white transition-colors">Kontak</Link>
          </div>
          <div>
            <Link 
              href="/login" 
              className="inline-block border border-[#333] bg-[#111] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
            >
              Login Anggota
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section - Clean Typography */}
        <section className="px-6 pb-24 pt-48 max-w-5xl mx-auto flex flex-col items-start">
          <p className="text-[#800000] font-medium tracking-widest uppercase text-sm mb-6">
            Universitas Teknologi Digital Indonesia
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
            Himpunan Mahasiswa Informatika
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-[#a3a3a3] max-w-2xl leading-relaxed">
            Wadah pengembangan potensi, penyaluran aspirasi, dan pembangunan solidaritas bagi talenta digital masa depan.
          </p>
          <div className="mt-12">
            <Link 
              href="#tentang" 
              className="inline-block bg-[#800000] px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-[#600000]"
            >
              Mulai Eksplorasi
            </Link>
          </div>
        </section>

        {/* Tentang Section - Open Layout */}
        <section id="tentang" className="border-t border-[#222] px-6 py-24 sm:py-32">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-2xl font-semibold text-white">Sejarah & Identitas</h2>
            </div>
            <div className="lg:col-span-8 text-lg text-[#a3a3a3] leading-relaxed space-y-6">
              <p>
                Dibentuk berdasarkan kesamaan pemikiran dan aspirasi mahasiswa jurusan Informatika di Universitas Teknologi Digital Indonesia. Disahkan pada 22 Oktober 2004 dengan nama HMJ TI, dan bertransformasi menjadi HIMAFORKA pada tahun 2021.
              </p>
              
              <div className="my-10">
                <Image 
                  src="/history-logo.jpg" 
                  alt="Evolusi Logo HIMAFORKA" 
                  width={600} 
                  height={600} 
                  className="w-full h-auto rounded-xl border border-[#222] opacity-90"
                />
                <p className="text-sm text-[#666] mt-4 text-center">Transformasi lambang organisasi dari HMJ TI STMIK AKAKOM menjadi HIMAFORKA UTDI.</p>
              </div>

              <p>
                <strong>Evolusi Identitas Visual:</strong> Pada masa awal berdirinya, organisasi ini menggunakan lambang segitiga terbalik dengan siluet merah yang merepresentasikan nama lama "HMJ TI STMIK AKAKOM". Transformasi besar terjadi pada tahun 2021 seiring dengan perubahan nama kampus menjadi Universitas Teknologi Digital Indonesia (UTDI), di mana lambang lama berevolusi menjadi logo HIMAFORKA yang lebih modern dan dinamis untuk mencerminkan visi talenta digital masa depan.
              </p>

              <p>
                Fokus utama kami saat ini adalah menjadi fasilitator peningkatan kapasitas akademis, non-akademis, serta perluasan jaringan kolaborasi.
              </p>
            </div>
          </div>
        </section>

        {/* Visi & Misi - Open Layout */}
        <section id="visi-misi" className="border-t border-[#222] px-6 py-24 sm:py-32 bg-[#0a0a0a]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
            
            <div className="lg:col-span-12 mb-8">
              <h2 className="text-2xl font-semibold text-white">Visi & Misi</h2>
            </div>

            {/* Visi */}
            <div className="lg:col-span-5">
              <h3 className="text-sm font-bold tracking-widest text-[#800000] uppercase mb-4">Visi</h3>
              <p className="text-xl text-white leading-relaxed">
                Menjadikan HIMAFORKA berkembang, berkualitas, profesional, menjunjung solidaritas, dan menjadi wadah pelayanan serta informasi.
              </p>
            </div>

            {/* Space/Divider */}
            <div className="lg:col-span-1 hidden lg:block"></div>

            {/* Misi */}
            <div className="lg:col-span-6">
              <h3 className="text-sm font-bold tracking-widest text-[#800000] uppercase mb-4">Misi</h3>
              <div className="space-y-6">
                <div className="flex gap-4 border-t border-[#222] pt-6">
                  <span className="text-sm font-mono text-[#666]">01</span>
                  <p className="text-base text-[#d4d4d4]">Mengadakan kegiatan yang menunjang sisi akademis maupun non-akademis mahasiswa.</p>
                </div>
                <div className="flex gap-4 border-t border-[#222] pt-6">
                  <span className="text-sm font-mono text-[#666]">02</span>
                  <p className="text-base text-[#d4d4d4]">Menjadi wadah dalam menampung dan merealisasikan aspirasi mahasiswa Informatika.</p>
                </div>
                <div className="flex gap-4 border-t border-[#222] pt-6">
                  <span className="text-sm font-mono text-[#666]">03</span>
                  <p className="text-base text-[#d4d4d4]">Menciptakan anggota HIMAFORKA yang kreatif, inovatif, kritis, dan solutif.</p>
                </div>
                <div className="flex gap-4 border-t border-[#222] pt-6">
                  <span className="text-sm font-mono text-[#666]">04</span>
                  <p className="text-base text-[#d4d4d4]">Menjalin relasi luas dengan mengoptimalkan kegiatan Internal maupun Eksternal Universitas.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Divisi Section - Editorial Grid */}
        <section id="divisi" className="border-t border-[#222] px-6 py-24 sm:py-32 bg-[#080808]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-white mb-16 tracking-tight">Pilar Penggerak Organisasi</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              <div className="group relative border-t border-[#333] pt-8 hover:border-[#800000] transition-colors duration-500">
                <span className="text-6xl font-light text-[#111] absolute top-2 right-0 -z-10 group-hover:text-[#1a0000] transition-colors duration-500">01</span>
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-1.5 w-6 bg-[#800000]"></span>
                  <h3 className="text-2xl font-medium text-white">Internal</h3>
                </div>
                <p className="text-[#a3a3a3] leading-relaxed text-base">
                  Menangani administrasi keanggotaan dan memelihara hubungan harmonis antar mahasiswa serta elemen internal di kampus UTDI.
                </p>
              </div>

              <div className="group relative border-t border-[#333] pt-8 hover:border-[#800000] transition-colors duration-500">
                <span className="text-6xl font-light text-[#111] absolute top-2 right-0 -z-10 group-hover:text-[#1a0000] transition-colors duration-500">02</span>
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-1.5 w-6 bg-[#800000]"></span>
                  <h3 className="text-2xl font-medium text-white">Skill Dev.</h3>
                </div>
                <p className="text-[#a3a3a3] leading-relaxed text-base">
                  Mengelola komunikasi digital organisasi, serta menangani kebutuhan desain, publikasi, dan dokumentasi program kerja.
                </p>
              </div>

              <div className="group relative border-t border-[#333] pt-8 hover:border-[#800000] transition-colors duration-500">
                <span className="text-6xl font-light text-[#111] absolute top-2 right-0 -z-10 group-hover:text-[#1a0000] transition-colors duration-500">03</span>
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-1.5 w-6 bg-[#800000]"></span>
                  <h3 className="text-2xl font-medium text-white">Networking</h3>
                </div>
                <p className="text-[#a3a3a3] leading-relaxed text-base">
                  Membangun dan merawat kemitraan strategis, serta bertindak sebagai representasi HIMAFORKA ke institusi eksternal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mitra Kerjasama - Card Layout with Explanations */}
        <section id="mitra" className="border-t border-[#222] px-6 py-24 bg-[#0a0a0a]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl font-semibold text-white mb-4">Mitra Kerjasama</h2>
              <p className="text-[#a3a3a3] max-w-2xl mx-auto">
                Organisasi dan institusi strategis yang telah berkolaborasi dan menjalin kemitraan dengan HIMAFORKA UTDI.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:-translate-y-1 transition-transform">
                <div className="relative w-full h-16">
                  <Image src="/clients/permikomnas.png" alt="PERMIKOMNAS" fill className="object-contain" />
                </div>
                <span className="text-xs font-semibold text-center text-[#222]">PERMIKOMNAS</span>
              </div>

              <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:-translate-y-1 transition-transform">
                <div className="relative w-full h-16">
                  <Image src="/clients/asar.png" alt="ASAR Humanity" fill className="object-contain" />
                </div>
                <span className="text-xs font-semibold text-center text-[#222]">ASAR Humanity</span>
              </div>

              <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:-translate-y-1 transition-transform">
                <div className="relative w-full h-16">
                  <Image src="/clients/utdi.jpg" alt="UTDI" fill className="object-contain" />
                </div>
                <span className="text-xs font-semibold text-center text-[#222]">Kampus UTDI</span>
              </div>

              <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:-translate-y-1 transition-transform">
                <div className="relative w-full h-16">
                  <Image src="/clients/kedata.png" alt="Kedata" fill className="object-contain" />
                </div>
                <span className="text-xs font-semibold text-center text-[#222]">Kedata</span>
              </div>

              <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:-translate-y-1 transition-transform">
                <div className="relative w-full h-16">
                  <Image src="/clients/jch.png" alt="JCH" fill className="object-contain" />
                </div>
                <span className="text-xs font-semibold text-center text-[#222]">Jogja Coding House</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Susunan Pengurus - Open Layout Mockup */}
        <section id="pengurus" className="border-t border-[#222] px-6 py-24 sm:py-32 bg-[#050505]">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-white">Pengurus Harian</h2>
              <p className="mt-2 text-[#a3a3a3]">Struktur kepengurusan HIMAFORKA periode berjalan.</p>
            </div>

            {/* BPH Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-20">
              <div className="flex flex-col gap-4">
                <div className="aspect-[4/5] w-full bg-[#111] border border-[#222]"></div>
                <div>
                  <h3 className="text-lg font-medium text-white">[ Nama Pengurus ]</h3>
                  <p className="text-sm text-[#800000] uppercase tracking-widest mt-1">Ketua Umum</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="aspect-[4/5] w-full bg-[#111] border border-[#222]"></div>
                <div>
                  <h3 className="text-lg font-medium text-white">[ Nama Pengurus ]</h3>
                  <p className="text-sm text-[#800000] uppercase tracking-widest mt-1">Wakil Ketua</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="aspect-[4/5] w-full bg-[#111] border border-[#222]"></div>
                <div>
                  <h3 className="text-lg font-medium text-white">[ Nama Pengurus ]</h3>
                  <p className="text-sm text-[#800000] uppercase tracking-widest mt-1">Sekretaris</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="aspect-[4/5] w-full bg-[#111] border border-[#222]"></div>
                <div>
                  <h3 className="text-lg font-medium text-white">[ Nama Pengurus ]</h3>
                  <p className="text-sm text-[#800000] uppercase tracking-widest mt-1">Bendahara</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-white">Koordinator Divisi</h2>
            </div>

            {/* Divisi Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-12">
              <div className="flex flex-col gap-4">
                <div className="aspect-square w-full sm:w-48 bg-[#111] border border-[#222] rounded-full"></div>
                <div>
                  <h3 className="text-lg font-medium text-white">[ Nama Pengurus ]</h3>
                  <p className="text-sm text-[#a3a3a3] mt-1">Koordinator Internal</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="aspect-square w-full sm:w-48 bg-[#111] border border-[#222] rounded-full"></div>
                <div>
                  <h3 className="text-lg font-medium text-white">[ Nama Pengurus ]</h3>
                  <p className="text-sm text-[#a3a3a3] mt-1">Koordinator Skill Development</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="aspect-square w-full sm:w-48 bg-[#111] border border-[#222] rounded-full"></div>
                <div>
                  <h3 className="text-lg font-medium text-white">[ Nama Pengurus ]</h3>
                  <p className="text-sm text-[#a3a3a3] mt-1">Koordinator Networking</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kontak Section */}
        <section id="kontak" className="border-t border-[#222] px-6 py-24 sm:py-32 bg-[#0a0a0a]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-8">Hubungi Kami</h2>
              <div className="space-y-8 text-[#a3a3a3]">
                <div>
                  <h3 className="text-sm font-bold tracking-widest text-[#800000] uppercase mb-2">Alamat</h3>
                  <p className="leading-relaxed">
                    Jl. Raya Janti Jl. Majapahit No.143, Jaranan, Banguntapan, Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55198
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-widest text-[#800000] uppercase mb-2">Email</h3>
                  <p>himaforka@utdi.ac.id</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-widest text-[#800000] uppercase mb-2">Telepon / WhatsApp</h3>
                  <p>+62 815-6826-1422</p>
                </div>
              </div>
            </div>

            <div>
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name');
                  const email = formData.get('email');
                  const subject = formData.get('subject');
                  const message = formData.get('message');
                  const whatsappMessage = `Halo, nama saya ${name}.%0AEmail: ${email}%0ASubjek: ${subject}%0APesan: ${message}`;
                  window.open(`https://wa.me/6281568261422?text=${whatsappMessage}`, '_blank');
                }}
                className="flex flex-col gap-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input type="text" name="name" placeholder="Nama Anda" required className="w-full bg-[#111] border border-[#222] text-white px-4 py-3 focus:outline-none focus:border-[#800000] transition-colors" />
                  <input type="email" name="email" placeholder="Email Anda" required className="w-full bg-[#111] border border-[#222] text-white px-4 py-3 focus:outline-none focus:border-[#800000] transition-colors" />
                </div>
                <input type="text" name="subject" placeholder="Subjek" required className="w-full bg-[#111] border border-[#222] text-white px-4 py-3 focus:outline-none focus:border-[#800000] transition-colors" />
                <textarea name="message" rows={5} placeholder="Pesan Anda" required className="w-full bg-[#111] border border-[#222] text-white px-4 py-3 focus:outline-none focus:border-[#800000] transition-colors resize-none"></textarea>
                <button type="submit" className="self-start inline-block bg-[#800000] px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-[#600000]">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#222] bg-[#050505] py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="md:w-1/3">
            <span className="text-xl font-bold text-white tracking-wide block mb-4">HIMAFORKA</span>
            <p className="text-[#666] text-sm leading-relaxed mb-6">
              Himpunan Mahasiswa Informatika Universitas Teknologi Digital Indonesia.
            </p>
            <a href="mailto:himaforka@utdi.ac.id" className="text-sm font-medium text-[#800000] hover:text-[#A80707] transition-colors">
              himaforka@utdi.ac.id
            </a>
          </div>

          <div className="grid grid-cols-2 gap-12 md:w-2/3">
            <div>
              <h4 className="text-white font-medium mb-4">Sosial Media</h4>
              <ul className="space-y-3 text-sm text-[#666]">
                <li><a href="https://instagram.com/himaforka_utdi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="https://twitter.com/himaforka_utdi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X (Twitter)</a></li>
                <li><a href="https://tiktok.com/@himaforka.utdi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TikTok</a></li>
                <li><a href="https://facebook.com/HimaforkaUtdi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Lainnya</h4>
              <ul className="space-y-3 text-sm text-[#666]">
                <li><a href="https://youtube.com/@HIMAFORKAUTDI" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a></li>
                <li><a href="https://linkedin.com/company/himaforka-utdi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-16 pt-8 border-t border-[#111] text-xs text-[#444] flex flex-col sm:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} HIMAFORKA UTDI. Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    </div>
  );
}
