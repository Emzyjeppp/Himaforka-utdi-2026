"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Member, MEMBERS_DATA, findMemberByCredentials } from "@/data/members";

interface AuthContextType {
  currentUser: Member | null;
  login: (identifier: string, password?: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  login: () => false,
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<Member | null>(null);

  useEffect(() => {
    // Cek session di localStorage jika ada
    const saved = localStorage.getItem("himaforka_session");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const member = MEMBERS_DATA.find((m) => m.npk === parsed.npk || m.nim === parsed.nim);
        if (member) setCurrentUser(member);
      } catch (e) {
        console.error("Failed to parse session", e);
      }
    } else {
      // Default fallback agar demo langsung ada data aktif (Muhammad Jepri)
      const defaultUser = MEMBERS_DATA.find((m) => m.nim === "255410014") || MEMBERS_DATA[0];
      setCurrentUser(defaultUser);
    }
  }, []);

  const login = (identifier: string, password?: string): boolean => {
    const member = findMemberByCredentials(identifier);
    if (member) {
      // Untuk kemudahan login organisasi: password default bisa NIM atau NPK
      // Jika password diisi, kita validasi password sama dengan NIM atau NPK atau "password"
      if (password && password !== member.nim && password !== member.npk && password !== "123456") {
        return false;
      }
      setCurrentUser(member);
      localStorage.setItem("himaforka_session", JSON.stringify(member));
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("himaforka_session");
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
