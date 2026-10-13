"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { 
  CreditCard, 
  User, 
  CheckCircle2, 
  AlertCircle, 
  Calendar, 
  ShieldCheck, 
  LogOut, 
  Search,
  Wallet,
  ArrowUpRight,
  Clock,
  Sparkles,
  Copy,
  Check,
  X,
  Info,
  Download,
  RotateCw,
  Upload,
  Camera
} from "lucide-react";
import { MEMBERS_DATA } from "@/data/members";

export default function DashboardPage() {
  const { currentUser, logout, login } = useAuth();
  const router = useRouter();
  const [selectedMember, setSelectedMember] = useState(currentUser || MEMBERS_DATA[6]);
  const [activeTab, setActiveTab] = useState<"profile" | "kas" | "semua">("kas");
  const [searchTerm, setSearchTerm] = useState("");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [copiedRekening, setCopiedRekening] = useState(false);
  const [cardSide, setCardSide] = useState<"front" | "back">("front");
  const [uploadedPhoto, setUploadedPhoto] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const frontCardRef = React.useRef<HTMLDivElement>(null);
  const backCardRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentUser) {
      setSelectedMember(currentUser);
    }
  }, [currentUser]);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const handleSwitchMember = (id: number) => {
    const mem = MEMBERS_DATA.find((m) => m.id === id);
    if (mem) {
      setSelectedMember(mem);
      login(mem.nim);
    }
  };

  const handleCopyRekening = () => {
    navigator.clipboard.writeText("1944393932");
    setCopiedRekening(true);
    setTimeout(() => setCopiedRekening(false), 2000);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadCard = async (side: "front" | "back") => {
    const targetRef = side === "front" ? frontCardRef.current : backCardRef.current;
    if (!targetRef) return;
    try {
      setIsDownloading(true);
      const { toPng } = await import("html-to-image");
      const dataUrl = await toPng(targetRef, {
        quality: 0.95,
        pixelRatio: 3,
      });
      const link = document.createElement("a");
      link.download = `KTA-HIMAFORKA-${selectedMember.nama.replace(/\s+/g, "_")}-${side.toUpperCase()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Gagal mendownload kartu:", err);
    } finally {
      setIsDownloading(false);
    }
  };

  const filteredMembers = MEMBERS_DATA.filter(
    (m) =>
      m.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.npk.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.nim.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FFFAF8] dark:bg-[#070707] text-[#212529] dark:text-[#ececec] font-sans antialiased">
      {/* Top Navbar */}
      <header className="sticky top-0 z-20 border-b border-gray-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3.5">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <Image 
                src="/logo.png" 
                alt="Logo HIMAFORKA" 
                width={36} 
                height={36} 
                className="group-hover:scale-105 transition-transform" 
              />
              <div>
                <span className="text-base font-bold tracking-tight text-[#800000] dark:text-red-400 block leading-tight">
                  HIMAFORKA
                </span>
                <span className="text-[11px] text-gray-500 dark:text-zinc-400 font-medium tracking-tight">
                  Portal Keanggotaan & Kas XXI
                </span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <div className="flex items-center justify-end gap-1.5">
                <span className="text-xs font-semibold text-gray-900 dark:text-zinc-100 leading-tight">
                  {selectedMember.nama}
                </span>
                <span className="text-[10px] text-gray-500 dark:text-zinc-400 font-medium">
                  • {selectedMember.role}
                </span>
              </div>
              <div className="text-[10px] text-gray-500 dark:text-zinc-400 font-mono tracking-tight">
                {selectedMember.npk} {selectedMember.divisi !== "BPH" ? `• ${selectedMember.divisi}` : ""}
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 rounded-md border border-gray-200 dark:border-zinc-800 px-2.5 py-1.5 text-xs font-medium text-gray-700 dark:text-zinc-300 hover:bg-red-50 hover:text-red-600 hover:border-red-200 dark:hover:bg-red-950/30 dark:hover:text-red-400 dark:hover:border-red-900/50 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Keluar</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        
        {/* Banner Anggota Header (Impeccable & Distilled) */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/70 p-6 sm:p-7 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#800000] dark:text-red-400">
                Periode Kepengurusan 2025/2026 • Gen XXI
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-zinc-50">
                Selamat Datang, {selectedMember.nama}
              </h1>
              <p className="text-gray-600 dark:text-zinc-400 text-sm leading-relaxed">
                Informasi rincian status keaktifan, Nomor Pokok Keanggotaan (NPK), serta transparansi dan riwayat iuran kas berkala organisasi.
              </p>
            </div>

            {/* Quick Switch Select (Integrated toolbar, no nested glass card) */}
            <div className="w-full md:w-auto md:min-w-[260px] pt-4 md:pt-0 border-t md:border-t-0 border-gray-100 dark:border-zinc-800">
              <label className="block text-[11px] font-medium text-gray-500 dark:text-zinc-400 mb-1.5">
                Ganti Akun Demo (22 Anggota)
              </label>
              <div className="relative">
                <select
                  value={selectedMember.id}
                  onChange={(e) => handleSwitchMember(Number(e.target.value))}
                  className="w-full bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-zinc-100 border border-gray-300 dark:border-zinc-700 rounded-lg text-xs py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#800000]/20 dark:focus:ring-red-500/20 focus:border-[#800000] dark:focus:border-red-500 font-medium transition-all"
                >
                  {MEMBERS_DATA.map((m) => (
                    <option key={m.id} value={m.id} className="text-gray-900 dark:text-zinc-100 bg-white dark:bg-zinc-900">
                      {m.id}. {m.nama} ({m.kas.tunggakan > 0 ? "Tunggakan" : "Lunas"})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 dark:border-gray-800 mb-6 gap-2 sm:gap-6">
          <button
            onClick={() => setActiveTab("kas")}
            className={`pb-3 text-sm font-semibold flex items-center gap-2 transition-colors border-b-2 ${
              activeTab === "kas"
                ? "border-[#800000] text-[#800000] dark:text-[#ff7878] dark:border-[#ff7878]"
                : "border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
            }`}
          >
            <Wallet className="w-4 h-4" />
            Status & Riwayat Kas
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`pb-3 text-sm font-semibold flex items-center gap-2 transition-colors border-b-2 ${
              activeTab === "profile"
                ? "border-[#800000] text-[#800000] dark:text-[#ff7878] dark:border-[#ff7878]"
                : "border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
            }`}
          >
            <User className="w-4 h-4" />
            Kartu Anggota (NPK)
          </button>
          <button
            onClick={() => setActiveTab("semua")}
            className={`pb-3 text-sm font-semibold flex items-center gap-2 transition-colors border-b-2 ${
              activeTab === "semua"
                ? "border-[#800000] text-[#800000] dark:text-[#ff7878] dark:border-[#ff7878]"
                : "border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Daftar 22 Anggota Lengkap
          </button>
        </div>

        {/* TAB 1: STATUS KAS */}
        {activeTab === "kas" && (
          <div className="space-y-6">
            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm">
                <div className="flex items-center justify-between text-xs font-medium text-gray-500 dark:text-zinc-400 mb-1">
                  <span>Total Iuran Wajib</span>
                  <Wallet className="w-4 h-4 text-blue-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  Rp {selectedMember.kas.totalWajib.toLocaleString("id-ID")}
                </div>
                <div className="text-[11px] text-gray-500 dark:text-zinc-400 mt-1">
                  Periode Berjalan: Bulan ke-1 (Oktober 2025)
                </div>
              </div>

              <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm">
                <div className="flex items-center justify-between text-xs font-medium text-gray-500 dark:text-zinc-400 mb-1">
                  <span>Sudah Dibayar</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  Rp {selectedMember.kas.totalTerbayar.toLocaleString("id-ID")}
                </div>
                <div className="text-[11px] text-emerald-600/80 dark:text-emerald-400/80 mt-1">
                  {((selectedMember.kas.totalTerbayar / selectedMember.kas.totalWajib) * 100).toFixed(0)}% telah disetor
                </div>
              </div>

              <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-medium text-gray-500 dark:text-zinc-400 mb-1">
                    <span>Sisa Tunggakan</span>
                    <AlertCircle className={`w-4 h-4 ${selectedMember.kas.tunggakan > 0 ? "text-amber-500" : "text-emerald-500"}`} />
                  </div>
                  <div className={`text-2xl font-bold ${selectedMember.kas.tunggakan > 0 ? "text-amber-600 dark:text-amber-400" : "text-emerald-600 dark:text-emerald-400"}`}>
                    {selectedMember.kas.tunggakan > 0 
                      ? `Rp ${selectedMember.kas.tunggakan.toLocaleString("id-ID")}` 
                      : "LUNAS"}
                  </div>
                  <div className="text-[11px] text-gray-500 dark:text-zinc-400 mt-1">
                    {selectedMember.kas.tunggakan > 0 ? "Harap segera lunasi ke Bendahara" : "Semua pembayaran terpenuhi"}
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-gray-100 dark:border-zinc-800">
                  <button
                    onClick={() => setShowPaymentModal(true)}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#800000] hover:bg-[#660000] active:scale-[0.98] text-white text-xs font-semibold shadow-sm transition-all"
                  >
                    <Wallet className="w-3.5 h-3.5" />
                    <span>Bayar Kas Sekarang</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Riwayat Pembayaran Per Bulan */}
            <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm">
              <div className="p-5 border-b border-gray-100 dark:border-zinc-800 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">
                    Rincian Pembayaran Kas Bulanan
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-zinc-400">
                    Iuran rutin Rp 10.000 / bulan untuk kebutuhan operasional HIMAFORKA
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-gray-50 dark:bg-white/5 border-b border-gray-100 dark:border-white/5 text-gray-500 dark:text-gray-400 uppercase font-semibold">
                    <tr>
                      <th className="py-3 px-4">Periode</th>
                      <th className="py-3 px-4">Nominal</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4">Tgl Pembayaran</th>
                      <th className="py-3 px-4">Keterangan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                    {selectedMember.kas.riwayat.map((r, i) => (
                      <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                        <td className="py-3 px-4 font-medium text-gray-900 dark:text-white flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-gray-400" />
                          {r.bulan}
                        </td>
                        <td className="py-3 px-4 font-semibold">
                          Rp {r.nominal.toLocaleString("id-ID")}
                        </td>
                        <td className="py-3 px-4">
                          {r.lunas ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                              <CheckCircle2 className="w-3 h-3" /> Lunas
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300">
                              <Clock className="w-3 h-3" /> Belum Bayar
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-gray-500 dark:text-gray-400">
                          {r.tanggalBayar ? r.tanggalBayar : "-"}
                        </td>
                        <td className="py-3 px-4 text-gray-500 dark:text-gray-400">
                          {r.lunas ? "Terverifikasi Bendahara" : "Menunggu konfirmasi transfer"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PROFILE & KARTU ANGGOTA (NPK) */}
        {activeTab === "profile" && (
          <div className="space-y-6">
            {/* Card Action Toolbar (Clean & Minimal) */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <div>
                <span className="text-xs font-semibold text-gray-700 dark:text-zinc-300">Kartu Tanda Anggota (KTA) Digital</span>
              </div>

              {/* Upload Pas Foto & Download Action */}
              <div className="flex items-center gap-2">
                <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-300 dark:border-zinc-700 text-xs font-medium text-gray-700 dark:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
                  <Camera className="w-3.5 h-3.5 text-gray-500" />
                  <span>Pas Foto 3x4</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </label>

                <button
                  onClick={() => handleDownloadCard(cardSide)}
                  disabled={isDownloading}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#800000] hover:bg-[#660000] active:scale-[0.98] text-white text-xs font-semibold shadow-sm transition-all disabled:opacity-50"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isDownloading ? "Mengunduh..." : `Download ${cardSide === "front" ? "Depan" : "Belakang"}`}</span>
                </button>

                <button
                  onClick={async () => {
                    await handleDownloadCard("front");
                    setTimeout(() => handleDownloadCard("back"), 600);
                  }}
                  disabled={isDownloading}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#800000] text-[#800000] dark:text-red-400 dark:border-red-500/50 hover:bg-red-50 dark:hover:bg-red-950/30 text-xs font-semibold transition-all disabled:opacity-50"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Keduanya</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* KTA PREVIEW (INTERACTIVE TAP-TO-FLIP) */}
              <div className="lg:col-span-7 flex flex-col items-center">
                <div
                  onClick={() => setCardSide(cardSide === "front" ? "back" : "front")}
                  title="Klik atau ketuk kartu untuk membalik (depan / belakang)"
                  className="w-full max-w-[560px] shadow-2xl rounded-xl overflow-hidden border border-zinc-700/60 bg-black cursor-pointer group transition-transform active:scale-[0.99] relative"
                >
                  {/* TAMPAK DEPAN */}
                  <div
                    ref={frontCardRef}
                    className={`w-full aspect-[1.58/1] bg-black text-white p-5 sm:p-6 flex flex-col justify-between select-none relative ${
                      cardSide === "front" ? "block" : "hidden"
                    }`}
                  >
                    {/* Header Kop KTA */}
                    <div className="border-b-2 border-white pb-2.5">
                      <div className="flex items-center justify-between gap-3">
                        {/* Logo UTDI */}
                        <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center shrink-0">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="/utdi-logo.png"
                            alt="Logo Universitas Teknologi Digital Indonesia"
                            className="w-full h-full object-contain drop-shadow"
                          />
                        </div>

                        {/* Teks Lembaga */}
                        <div className="text-center flex-1">
                          <h4 className="text-[13px] sm:text-[15px] font-serif font-bold tracking-wider leading-tight uppercase">
                            Kartu Tanda Anggota
                          </h4>
                          <p className="text-[10px] sm:text-[11.5px] font-serif tracking-wide leading-tight">
                            Himpunan Mahasiswa Informatika
                          </p>
                          <p className="text-[9px] sm:text-[10px] font-serif tracking-tight text-white/95 leading-tight">
                            Universitas Teknologi Digital Indonesia
                          </p>
                        </div>

                        {/* Logo HIMAFORKA */}
                        <div className="w-12 h-12 flex items-center justify-center shrink-0">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="/logo.png"
                            alt="Logo HIMAFORKA"
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Konten Depan KTA */}
                    <div className="grid grid-cols-12 gap-3 sm:gap-4 items-center my-auto pt-2">
                      {/* Pas Foto 3x4 Placeholder */}
                      <div className="col-span-4 flex justify-center">
                        <div className="w-[88px] sm:w-[102px] aspect-[3/4] bg-zinc-800 rounded-lg border-2 border-white/60 overflow-hidden flex flex-col items-center justify-center text-center relative shadow-inner">
                          {uploadedPhoto ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={uploadedPhoto}
                              alt="Pas Foto Anggota"
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="p-2 flex flex-col items-center justify-center text-zinc-400">
                              <User className="w-8 h-8 sm:w-10 sm:h-10 text-zinc-400 mb-1" />
                              <span className="text-[8px] font-semibold text-zinc-300 uppercase leading-none">Pas Foto</span>
                              <span className="text-[7px] text-zinc-400">3 x 4 cm</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Data Anggota & Tanda Tangan */}
                      <div className="col-span-8 flex flex-col justify-between h-full pl-1">
                        <div className="space-y-1 text-[11px] sm:text-[12.5px] font-serif font-semibold">
                          <div className="flex">
                            <span className="w-14 sm:w-16">Nama</span>
                            <span className="mr-1">:</span>
                            <span className="font-bold flex-1 truncate">{selectedMember.nama}</span>
                          </div>
                          <div className="flex">
                            <span className="w-14 sm:w-16">NPK</span>
                            <span className="mr-1">:</span>
                            <span className="font-mono text-[10px] sm:text-[11.5px] tracking-tight">{selectedMember.npk}</span>
                          </div>
                          <div className="flex">
                            <span className="w-14 sm:w-16">Jabatan</span>
                            <span className="mr-1">:</span>
                            <span className="text-[10px] sm:text-[11.5px] text-zinc-200">{selectedMember.role}</span>
                          </div>
                        </div>

                        {/* TTD Ketua Umum */}
                        <div className="pt-2 text-center self-end pr-2 sm:pr-4 flex flex-col items-center">
                          <div className="text-[9.5px] sm:text-[10.5px] font-serif leading-none mb-1 text-zinc-200">Ketua Umum</div>
                          <div className="h-10 sm:h-12 w-28 sm:w-36 flex items-center justify-center my-0.5">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src="/ttd-graffiti.png"
                              alt="Tanda Tangan Ketua Umum"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="text-[10px] sm:text-[11px] font-serif font-bold underline leading-none">
                            Muhammad Rezky Ayyriel R.
                          </div>
                          <div className="text-[8.5px] sm:text-[9.5px] font-mono text-zinc-300 mt-0.5">
                            HIMAFORKA/XXI/25-26/375
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer Accent Line */}
                    <div className="border-t border-white/30 pt-1 text-right">
                      <span className="text-[8px] font-mono text-zinc-400 tracking-wider">HIMAFORKA GEN XXI</span>
                    </div>
                  </div>

                  {/* TAMPAK BELAKANG */}
                  <div
                    ref={backCardRef}
                    className={`w-full aspect-[1.58/1] bg-black text-white p-5 sm:p-6 flex flex-col justify-between select-none relative ${
                      cardSide === "back" ? "block" : "hidden"
                    }`}
                  >
                    {/* Header Kop KTA */}
                    <div className="border-b-2 border-white pb-2.5">
                      <div className="flex items-center justify-between gap-3">
                        {/* Logo UTDI */}
                        <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center shrink-0">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="/utdi-logo.png"
                            alt="Logo Universitas Teknologi Digital Indonesia"
                            className="w-full h-full object-contain drop-shadow"
                          />
                        </div>

                        {/* Teks Lembaga */}
                        <div className="text-center flex-1">
                          <h4 className="text-[13px] sm:text-[15px] font-serif font-bold tracking-wider leading-tight uppercase">
                            Kartu Tanda Anggota
                          </h4>
                          <p className="text-[10px] sm:text-[11.5px] font-serif tracking-wide leading-tight">
                            Himpunan Mahasiswa Informatika
                          </p>
                          <p className="text-[9px] sm:text-[10px] font-serif tracking-tight text-white/95 leading-tight">
                            Universitas Teknologi Digital Indonesia
                          </p>
                        </div>

                        {/* Logo HIMAFORKA */}
                        <div className="w-12 h-12 flex items-center justify-center shrink-0">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="/logo.png"
                            alt="Logo HIMAFORKA"
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Konten Belakang: Fungsi & Peraturan */}
                    <div className="space-y-2.5 sm:space-y-3 font-serif text-[8.5px] sm:text-[10px] leading-relaxed my-auto pt-1 px-1">
                      <div>
                        <div className="font-bold text-[9.5px] sm:text-[11px] mb-0.5">Fungsi :</div>
                        <ul className="list-disc list-outside ml-3.5 space-y-0.5 text-zinc-200">
                          <li>Identitas dan sebagai anggota inti HIMAFORKA Universitas Teknologi Digital Indonesia.</li>
                          <li>Sarana untuk mendapatkan dan mempermudah proses pelayanan Administrasi HIMAFORKA Universitas Teknologi Digital Indonesia.</li>
                        </ul>
                      </div>

                      <div>
                        <div className="font-bold text-[9.5px] sm:text-[11px] mb-0.5">Peraturan :</div>
                        <ul className="list-disc list-outside ml-3.5 space-y-0.5 text-zinc-200">
                          <li>Penyalahgunaan KTA menjadi tanggung jawab pemegang kartu.</li>
                          <li>Pembuatan KTA dikenakan biaya produksi sesuai dengan ketentuan.</li>
                          <li>Berlaku selama masih menjadi anggota inti HIMAFORKA Universitas Teknologi Digital Indonesia dan jika masa berlaku habis maka KTA tersebut tidak berfungsi.</li>
                          <li>Bagi anggota yang menghilangkan KTA wajib melakukan pembuatan KTA yang baru.</li>
                        </ul>
                      </div>
                    </div>

                    {/* Footer Accent Line */}
                    <div className="border-t border-white/30 pt-1 text-center">
                      <span className="text-[8px] font-serif italic text-zinc-400">
                        Sekretariat: Jl. Raya Janti Karangjambe No. 143 Yogyakarta 55198
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-gray-500 dark:text-zinc-400 mt-3 text-center">
                  Ketuk atau klik kartu langsung untuk membolak-balik sisi depan &amp; belakang.
                </p>
              </div>

              {/* Detail Profil & Status Card */}
              <div className="lg:col-span-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3.5 flex items-center gap-2">
                  <User className="w-4 h-4 text-[#800000] dark:text-red-400" />
                  Informasi Resmi Pengurus
                </h3>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-gray-100 dark:border-zinc-800">
                    <span className="text-gray-500 dark:text-zinc-400">Nomor Registrasi (NPK)</span>
                    <span className="font-mono font-bold text-gray-900 dark:text-white">{selectedMember.npk}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-100 dark:border-zinc-800">
                    <span className="text-gray-500 dark:text-zinc-400">Nama Lengkap</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{selectedMember.nama}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-100 dark:border-zinc-800">
                    <span className="text-gray-500 dark:text-zinc-400">NIM</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{selectedMember.nim}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-100 dark:border-zinc-800">
                    <span className="text-gray-500 dark:text-zinc-400">Divisi</span>
                    <span className="font-medium text-gray-900 dark:text-white">{selectedMember.divisi}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-100 dark:border-zinc-800">
                    <span className="text-gray-500 dark:text-zinc-400">Jabatan</span>
                    <span className="font-medium text-[#800000] dark:text-red-400">{selectedMember.role}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-gray-500 dark:text-zinc-400">Status Keanggotaan</span>
                    <span className="font-medium text-emerald-600 dark:text-emerald-400">
                      Anggota Inti Aktif
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3.5 border-t border-gray-100 dark:border-zinc-800">
                  <label className="w-full flex items-center justify-center gap-2 p-2.5 rounded-lg border border-dashed border-gray-300 dark:border-zinc-700 hover:border-[#800000] bg-gray-50/50 dark:bg-zinc-800/40 text-xs text-gray-600 dark:text-zinc-300 cursor-pointer transition-colors">
                    <Upload className="w-4 h-4 text-gray-400" />
                    <span>Upload Foto Sendiri (Format 3x4)</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: DAFTAR SEMUA 22 ANGGOTA */}
        {activeTab === "semua" && (
          <div className="bg-white dark:bg-[#121212] border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm">
            <div className="p-4 sm:p-5 border-b border-gray-100 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-bold text-[#212529] dark:text-white">
                  Database 22 Anggota Aktif Periode 2025/2026
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Klik &quot;Pilih&quot; pada salah satu anggota untuk melihat rincian kas & status individunya
                </p>
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari nama atau NPK..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-black/30 text-xs focus:outline-none focus:ring-1 focus:ring-[#800000]"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50 dark:bg-white/5 border-b border-gray-100 dark:border-white/5 text-gray-500 dark:text-gray-400 uppercase font-semibold">
                  <tr>
                    <th className="py-3 px-3">No</th>
                    <th className="py-3 px-4">NPK</th>
                    <th className="py-3 px-4">Nama</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Divisi</th>
                    <th className="py-3 px-4">Status Kas</th>
                    <th className="py-3 px-3 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                  {filteredMembers.map((m) => (
                    <tr 
                      key={m.id} 
                      className={`hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors ${
                        m.id === selectedMember.id ? "bg-red-50/40 dark:bg-red-950/20" : ""
                      }`}
                    >
                      <td className="py-3 px-3 text-gray-400 font-mono">{m.id}</td>
                      <td className="py-3 px-4 font-mono font-medium text-gray-900 dark:text-white">
                        {m.npk}
                      </td>
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">
                        {m.nama}
                      </td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                          {m.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-500 dark:text-gray-400">
                        {m.divisi}
                      </td>
                      <td className="py-3 px-4">
                        {m.kas.tunggakan === 0 ? (
                          <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-[11px]">
                            Lunas (Rp 10.000)
                          </span>
                        ) : (
                          <span className="text-amber-600 dark:text-amber-400 font-semibold text-[11px]">
                            Nunggak Rp {m.kas.tunggakan.toLocaleString("id-ID")}
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-right">
                        <button
                          onClick={() => {
                            handleSwitchMember(m.id);
                            setActiveTab("kas");
                          }}
                          className="px-2.5 py-1 rounded-lg bg-[#800000] text-white hover:bg-[#a00000] text-[11px] font-medium transition-colors cursor-pointer"
                        >
                          Lihat Detail
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </main>

      {/* MODAL PEMBAYARAN KAS */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-gray-100 dark:border-zinc-800 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-gray-900 dark:text-zinc-50">
                  Pembayaran Kas Organisasi
                </h3>
                <p className="text-xs text-gray-500 dark:text-zinc-400">
                  HIMAFORKA Periode 2025/2026 (Gen XXI)
                </p>
              </div>
              <button
                onClick={() => setShowPaymentModal(false)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 text-xs sm:text-sm">
              {/* Member Tag */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-zinc-800/60 border border-gray-200/60 dark:border-zinc-700/60">
                <div>
                  <div className="text-[11px] text-gray-500 dark:text-zinc-400">Anggota</div>
                  <div className="font-semibold text-gray-900 dark:text-zinc-100">{selectedMember.nama}</div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-gray-500 dark:text-zinc-400">Tunggakan Kas</div>
                  <div className="font-bold text-[#800000] dark:text-red-400">
                    {selectedMember.kas.tunggakan > 0 
                      ? `Rp ${selectedMember.kas.tunggakan.toLocaleString("id-ID")}` 
                      : "Rp 0 (Lunas)"}
                  </div>
                </div>
              </div>

              {/* Aturan Kas & Denda Resmi */}
              <div className="p-3.5 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 text-amber-900 dark:text-amber-200 space-y-1.5 text-xs">
                <div className="font-semibold flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  Ketentuan Iuran Kas & Denda
                </div>
                <ul className="list-disc list-inside space-y-1 text-amber-800/90 dark:text-amber-300/90 text-[11px] leading-relaxed">
                  <li>Iuran kas per bulan: <strong>Rp 10.000 / orang</strong>.</li>
                  <li>Batas pembayaran: <strong>Tgl 1 s/d 10 setiap bulan</strong>.</li>
                  <li>Lewat tanggal 10 dikenakan denda: <strong>Rp 2.000 / hari</strong> (s.d tanggal 20).</li>
                  <li>Di atas tanggal 20 wajib membayar: <strong>Kas + Denda = Rp 30.000</strong>.</li>
                </ul>
              </div>

              {/* Rekening Tujuan */}
              <div className="space-y-2">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-zinc-400 block">
                  Metode Pembayaran Transfer
                </label>
                <div className="p-3.5 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300">
                      Bank BNI
                    </div>
                    <div className="text-base font-mono font-bold tracking-wider text-gray-900 dark:text-white">
                      1944393932
                    </div>
                    <div className="text-[11px] text-gray-500 dark:text-zinc-400">
                      a.n <strong>Neisa Putri Syifaul Qolby</strong> (Bendahara / BPH)
                    </div>
                  </div>
                  <button
                    onClick={handleCopyRekening}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-300 dark:border-zinc-600 text-xs font-semibold text-gray-700 dark:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors"
                  >
                    {copiedRekening ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Disalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Salin</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-[11px] text-gray-500 dark:text-zinc-400">
                  Pembayaran juga dapat diserahkan secara <strong>Cash / Tunai</strong> langsung kepada Bendahara (Neisa Putri).
                </p>
              </div>

              {/* Konfirmasi WhatsApp */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`Halo Bendahara, saya ${selectedMember.nama} (${selectedMember.nim}) ingin konfirmasi pembayaran uang kas HIMAFORKA.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs shadow-sm transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                  Kirim Bukti Transfer via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
