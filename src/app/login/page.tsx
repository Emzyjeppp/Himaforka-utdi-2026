"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { MEMBERS_DATA } from "@/data/members";
import { ShieldCheck, UserCheck, AlertCircle, Sparkles, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [identifier, setIdentifier] = useState("255410014");
  const [password, setPassword] = useState("255410014");
  const [error, setError] = useState("");
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const success = login(identifier, password);
    if (success) {
      router.push("/dashboard");
    } else {
      setError("Identitas atau password tidak valid! Coba masukkan NIM, NPK, atau nama anggota yang terdaftar.");
    }
  };

  const handleQuickLogin = (selectedNim: string) => {
    setIdentifier(selectedNim);
    setPassword(selectedNim);
    const success = login(selectedNim, selectedNim);
    if (success) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFAF8] dark:bg-[#0a0a0a] p-4 text-[#212529] dark:text-[#f3f4f6]">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8 flex flex-col items-center">
          <div className="relative mb-3">
            <Image 
              src="/logo.png" 
              alt="Logo HIMAFORKA" 
              width={75} 
              height={75} 
              className="drop-shadow-sm transition-transform hover:scale-105" 
            />
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#800000]/10 text-[#800000] dark:bg-[#800000]/30 dark:text-[#ff8080] mb-2">
            <ShieldCheck className="w-3.5 h-3.5" /> Portal Anggota Aktif XXI
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-[#212529] dark:text-white">
            Masuk Anggota HIMAFORKA
          </h1>
          <p className="mt-1 text-sm text-[#7A6960] dark:text-gray-400">
            Akses informasi status keaktifan, nomor NPK, dan kas organisasi
          </p>
        </div>

        {/* Card Form */}
        <div className="bg-white dark:bg-[#141414] border border-[#7A6960]/20 dark:border-white/10 rounded-2xl p-6 shadow-xl shadow-black/5">
          {error && (
            <div className="mb-5 flex items-start gap-2.5 p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/50 text-red-700 dark:text-red-300 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="identifier" className="block text-xs font-semibold uppercase tracking-wider text-[#7A6960] dark:text-gray-300 mb-1.5">
                NIM / NPK / Nama
              </label>
              <input
                id="identifier"
                name="identifier"
                type="text"
                required
                placeholder="Contoh: 255410014 atau HIMAFORKA/XXI/..."
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#1c1c1c] px-3.5 py-2.5 text-sm text-[#212529] dark:text-white placeholder-gray-400 focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/20 focus:outline-none transition-all"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-wider text-[#7A6960] dark:text-gray-300">
                  Password
                </label>
                <span className="text-[11px] text-[#7A6960] dark:text-gray-400">
                  Default: sama dengan NIM
                </span>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#1c1c1c] px-3.5 py-2.5 text-sm text-[#212529] dark:text-white placeholder-gray-400 focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/20 focus:outline-none transition-all"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#800000] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#800000]/25 hover:bg-[#990000] active:scale-[0.99] transition-all cursor-pointer"
              >
                <span>Masuk Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Quick Login Section */}
          <div className="mt-6 pt-5 border-t border-gray-100 dark:border-white/5">
            <div className="flex items-center gap-1.5 text-xs font-medium text-[#7A6960] dark:text-gray-400 mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Akses Cepat (Demo Akun Anggota):</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => handleQuickLogin("255410014")}
                className="p-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-white/5 hover:border-[#800000] text-left transition-colors"
              >
                <div className="font-medium text-[#212529] dark:text-white truncate">M. Jepri</div>
                <div className="text-[10px] text-emerald-600 dark:text-emerald-400">Kas: Lunas</div>
              </button>
              <button
                type="button"
                onClick={() => handleQuickLogin("255410388")}
                className="p-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-white/5 hover:border-[#800000] text-left transition-colors"
              >
                <div className="font-medium text-[#212529] dark:text-white truncate">Francisco G.</div>
                <div className="text-[10px] text-amber-600 dark:text-amber-400">Kas: Ada Tunggakan</div>
              </button>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-6 text-center text-xs text-[#7A6960] dark:text-gray-500">
          <Link href="/" className="hover:underline hover:text-[#800000] transition-colors">
            &larr; Kembali ke Beranda HIMAFORKA
          </Link>
        </div>
      </div>
    </div>
  );
}
