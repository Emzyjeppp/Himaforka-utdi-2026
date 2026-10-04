import React from "react";
import Image from "next/image";
import Link from "next/link";

const activities = [
  {
    id: "lk",
    title: "Latihan Kader",
    image: "/activities/lk.jpg",
    description:
      "Program regenerasi Anggota Inti HIMAFORKA. Fokus utama kegiatan ini adalah pembekalan materi kepemimpinan, keorganisasian, dan kedisiplinan agar calon pengurus siap melanjutkan tanggung jawab organisasi.",
  },
  {
    id: "kulum",
    title: "Kuliah Umum",
    image: "/activities/kulum.jpg",
    description:
      "Seminar akademik yang mempertemukan mahasiswa dengan praktisi industri. Kegiatan ini bertujuan memperluas wawasan teknis mahasiswa, membahas perkembangan terbaru di dunia rekayasa perangkat lunak, dan membangun relasi profesional.",
  },
  {
    id: "maroon",
    title: "Maroon Day",
    image: "/activities/maroon.jpg",
    description:
      "Webinar edukatif dengan fokus pada isu teknologi spesifik, seperti kecerdasan buatan (AI) dan keamanan siber. Kegiatan ini terbuka untuk umum dan bertujuan meningkatkan literasi digital serta kesiapan karir mahasiswa di era digital.",
  },
  {
    id: "ultah",
    title: "Ulang Tahun HIMAFORKA",
    image: "/activities/ulang-tahun.jpg",
    description:
      "Peringatan hari jadi organisasi yang diisi dengan agenda silaturahmi. Kegiatan ini mengumpulkan Anggota Inti, mahasiswa aktif, dan purna anggota untuk menjaga komunikasi dan ikatan kekeluargaan lintas angkatan.",
  },
  {
    id: "wisuda",
    title: "Pelepasan Wisuda",
    image: "/activities/wisuda.jpg",
    description:
      "Acara seremonial untuk memberikan apresiasi kepada pengurus dan anggota yang telah menyelesaikan masa studi. Kegiatan ini diisi dengan penyerahan plakat penghargaan sebagai bentuk terima kasih atas kontribusi mereka selama berada di organisasi.",
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#FFFAF8] text-[#212529] font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-10 border-b border-[#7A6960]/20 bg-[#FFFAF8]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo HIMAFORKA" width={40} height={40} />
            <span className="text-xl font-bold text-[#800000]">HIMAFORKA</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-[#7A6960]">Halo, 255410014</span>
            <Link 
              href="/login" 
              className="rounded-md border border-[#800000] px-4 py-2 text-sm font-medium text-[#800000] transition-colors hover:bg-[#800000] hover:text-white"
            >
              Keluar
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-[#212529] sm:text-5xl lg:text-6xl">
            Halo, <span className="text-[#800000]">255410014</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#7A6960]">
            Halaman ini merangkum seluruh program kerja utama Himpunan Mahasiswa Informatika periode 2025/2026. Anda dapat melihat dokumentasi serta tujuan dari masing-masing kegiatan di bawah ini.
          </p>
        </div>
      </section>

      {/* Activities Layout (Alternating) */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-24 lg:gap-32">
          {activities.map((activity, index) => (
            <div 
              key={activity.id} 
              className={`flex flex-col gap-10 lg:items-center ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-200 shadow-md">
                  <Image
                    src={activity.image}
                    alt={`Dokumentasi ${activity.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text Container */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <span className="mb-2 text-sm font-bold uppercase tracking-wider text-[#A80707]">
                  Kegiatan 0{index + 1}
                </span>
                <h2 className="text-3xl font-bold text-[#212529] mb-4">
                  {activity.title}
                </h2>
                <p className="text-lg leading-relaxed text-[#7A6960]">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 border-t border-[#7A6960]/20 bg-white py-8 text-center text-sm text-[#7A6960]">
        <p>&copy; {new Date().getFullYear()} Himpunan Mahasiswa Informatika Universitas Teknologi Digital Indonesia.</p>
      </footer>
    </div>
  );
}
