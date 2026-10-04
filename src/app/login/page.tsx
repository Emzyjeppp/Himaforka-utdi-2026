"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [nim, setNim] = useState("255410014");
  const [password, setPassword] = useState("255410014");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nim === "255410014" && password === "255410014") {
      router.push("/dashboard");
    } else {
      alert("Invalid NIM or Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFAF8] p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8 flex flex-col items-center">
          <Image src="/logo.png" alt="Logo" width={80} height={80} className="mb-4" />
          <h1 className="text-2xl font-semibold text-[#212529]">Sign in</h1>
          <p className="mt-2 text-sm text-[#7A6960]">
            Access your account to continue
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nim" className="block text-sm font-medium text-[#212529]">
              NIM
            </label>
            <input
              id="nim"
              name="nim"
              type="text"
              required
              value={nim}
              onChange={(e) => setNim(e.target.value)}
              className="mt-1 block w-full appearance-none rounded-md border border-[#7A6960] bg-white px-3 py-2 text-[#212529] placeholder-gray-400 focus:border-[#A80707] focus:outline-none focus:ring-1 focus:ring-[#A80707] sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#212529]">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full appearance-none rounded-md border border-[#7A6960] bg-white px-3 py-2 text-[#212529] placeholder-gray-400 focus:border-[#A80707] focus:outline-none focus:ring-1 focus:ring-[#A80707] sm:text-sm"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-[#7A6960] text-[#800000] focus:ring-[#A80707]"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-[#212529]">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link href="#" className="font-medium text-[#A80707] hover:text-[#800000]">
                Forgot password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-[#800000] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#A80707] focus:outline-none focus:ring-2 focus:ring-[#A80707] focus:ring-offset-2"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
