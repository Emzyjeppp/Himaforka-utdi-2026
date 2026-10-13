export interface MemberKas {
  bulan: string;
  nominal: number;
  lunas: boolean;
  tanggalBayar?: string;
}

export interface Member {
  id: number;
  npk: string;
  nama: string;
  status: "Aktif" | "Non-Aktif";
  nim: string;
  role: string;
  divisi: string;
  kas: {
    totalWajib: number;
    totalTerbayar: number;
    tunggakan: number;
    riwayat: MemberKas[];
  };
}

export const MEMBERS_DATA: Member[] = [
  {
    id: 1,
    npk: "HIMAFORKA/XXI/25-26/375",
    nama: "Muhammad Rezky Ayyriel Ramadhan",
    status: "Aktif",
    nim: "255410375",
    role: "Ketua Umum (BPH)",
    divisi: "BPH",
    kas: {
      totalWajib: 10000,
      totalTerbayar: 10000,
      tunggakan: 0,
      riwayat: [
        {
          bulan: "Oktober 2025",
          nominal: 10000,
          lunas: true,
          tanggalBayar: "05/10/2025",
        },
      ],
    },
  },
  {
    id: 2,
    npk: "HIMAFORKA/XXI/25-26/390",
    nama: "Odilia Valencia P.P",
    status: "Aktif",
    nim: "255410390",
    role: "Wakil Ketua Umum (BPH)",
    divisi: "BPH",
    kas: {
      totalWajib: 10000,
      totalTerbayar: 10000,
      tunggakan: 0,
      riwayat: [
        {
          bulan: "Oktober 2025",
          nominal: 10000,
          lunas: true,
          tanggalBayar: "05/10/2025",
        },
      ],
    },
  },
  {
    id: 3,
    npk: "HIMAFORKA/XXI/25-26/379",
    nama: "Diana Amelia",
    status: "Aktif",
    nim: "255410379",
    role: "Sekretaris (BPH)",
    divisi: "BPH",
    kas: {
      totalWajib: 10000,
      totalTerbayar: 10000,
      tunggakan: 0,
      riwayat: [
        {
          bulan: "Oktober 2025",
          nominal: 10000,
          lunas: true,
          tanggalBayar: "05/10/2025",
        },
      ],
    },
  },
  {
    id: 4,
    npk: "HIMAFORKA/XXI/25-26/376",
    nama: "Neisa Putri Syifaul Qolbi",
    status: "Aktif",
    nim: "255410376",
    role: "Bendahara (BPH)",
    divisi: "BPH",
    kas: {
      totalWajib: 10000,
      totalTerbayar: 10000,
      tunggakan: 0,
      riwayat: [
        {
          bulan: "Oktober 2025",
          nominal: 10000,
          lunas: true,
          tanggalBayar: "05/10/2025",
        },
      ],
    },
  },
  {
    id: 5,
    npk: "HIMAFORKA/XXI/25-26/377",
    nama: "Zul Ikhwanul Anggara",
    status: "Aktif",
    nim: "255410377",
    role: "Koordinator",
    divisi: "Internal Division",
    kas: {
      totalWajib: 10000,
      totalTerbayar: 10000,
      tunggakan: 0,
      riwayat: [
        {
          bulan: "Oktober 2025",
          nominal: 10000,
          lunas: true,
          tanggalBayar: "05/10/2025",
        },
      ],
    },
  },
  {
    id: 6,
    npk: "HIMAFORKA/XXI/25-26/381",
    nama: "Muhammad Jepri",
    status: "Aktif",
    nim: "255410014",
    role: "Anggota",
    divisi: "Internal Division",
    kas: {
      totalWajib: 10000,
      totalTerbayar: 10000,
      tunggakan: 0,
      riwayat: [
        {
          bulan: "Oktober 2025",
          nominal: 10000,
          lunas: true,
          tanggalBayar: "05/10/2025",
        },
      ],
    },
  },
  {
    id: 7,
    npk: "HIMAFORKA/XXI/25-26/382",
    nama: "Adina Larito",
    status: "Aktif",
    nim: "255410382",
    role: "Anggota",
    divisi: "Internal Division",
    kas: {
      totalWajib: 10000,
      totalTerbayar: 0,
      tunggakan: 10000,
      riwayat: [
        {
          bulan: "Oktober 2025",
          nominal: 10000,
          lunas: false,
          
        },
      ],
    },
  },
  {
    id: 8,
    npk: "HIMAFORKA/XXI/25-26/395",
    nama: "Neysah Izzatul Jannah",
    status: "Aktif",
    nim: "255410395",
    role: "Anggota",
    divisi: "Internal Division",
    kas: {
      totalWajib: 10000,
      totalTerbayar: 10000,
      tunggakan: 0,
      riwayat: [
        {
          bulan: "Oktober 2025",
          nominal: 10000,
          lunas: true,
          tanggalBayar: "05/10/2025",
        },
      ],
    },
  },
  {
    id: 9,
    npk: "HIMAFORKA/XXI/25-26/389",
    nama: "Rivael Takeshi Prabu",
    status: "Aktif",
    nim: "255410389",
    role: "Anggota",
    divisi: "Internal Division",
    kas: {
      totalWajib: 10000,
      totalTerbayar: 0,
      tunggakan: 10000,
      riwayat: [
        {
          bulan: "Oktober 2025",
          nominal: 10000,
          lunas: false,
          
        },
      ],
    },
  },
  {
    id: 10,
    npk: "HIMAFORKA/XXI/25-26/387",
    nama: "Yesaya Mexi Dasalaku",
    status: "Aktif",
    nim: "255410387",
    role: "Anggota",
    divisi: "Internal Division",
    kas: {
      totalWajib: 10000,
      totalTerbayar: 10000,
      tunggakan: 0,
      riwayat: [
        {
          bulan: "Oktober 2025",
          nominal: 10000,
          lunas: true,
          tanggalBayar: "05/10/2025",
        },
      ],
    },
  },
  {
    id: 11,
    npk: "HIMAFORKA/XXI/25-26/388",
    nama: "Francisko G I Da Costa Corbafo",
    status: "Aktif",
    nim: "255410388",
    role: "Anggota",
    divisi: "Internal Division",
    kas: {
      totalWajib: 10000,
      totalTerbayar: 0,
      tunggakan: 10000,
      riwayat: [
        {
          bulan: "Oktober 2025",
          nominal: 10000,
          lunas: false,
          
        },
      ],
    },
  },
  {
    id: 12,
    npk: "HIMAFORKA/XXI/25-26/391",
    nama: "Dwi Ismi Andriani",
    status: "Aktif",
    nim: "255410391",
    role: "Koordinator",
    divisi: "Development Skill Division",
    kas: {
      totalWajib: 10000,
      totalTerbayar: 10000,
      tunggakan: 0,
      riwayat: [
        {
          bulan: "Oktober 2025",
          nominal: 10000,
          lunas: true,
          tanggalBayar: "05/10/2025",
        },
      ],
    },
  },
  {
    id: 13,
    npk: "HIMAFORKA/XXI/25-26/384",
    nama: "Laesah Afenlia",
    status: "Aktif",
    nim: "255410384",
    role: "Anggota",
    divisi: "Development Skill Division",
    kas: {
      totalWajib: 10000,
      totalTerbayar: 0,
      tunggakan: 10000,
      riwayat: [
        {
          bulan: "Oktober 2025",
          nominal: 10000,
          lunas: false,
          
        },
      ],
    },
  },
  {
    id: 14,
    npk: "HIMAFORKA/XXI/25-26/385",
    nama: "Maria Widya Febrianti",
    status: "Aktif",
    nim: "255410385",
    role: "Anggota",
    divisi: "Development Skill Division",
    kas: {
      totalWajib: 10000,
      totalTerbayar: 10000,
      tunggakan: 0,
      riwayat: [
        {
          bulan: "Oktober 2025",
          nominal: 10000,
          lunas: true,
          tanggalBayar: "05/10/2025",
        },
      ],
    },
  },
  {
    id: 15,
    npk: "HIMAFORKA/XXI/25-26/392",
    nama: "Usat Jalung",
    status: "Aktif",
    nim: "255410392",
    role: "Anggota",
    divisi: "Development Skill Division",
    kas: {
      totalWajib: 10000,
      totalTerbayar: 0,
      tunggakan: 10000,
      riwayat: [
        {
          bulan: "Oktober 2025",
          nominal: 10000,
          lunas: false,
          
        },
      ],
    },
  },
  {
    id: 16,
    npk: "HIMAFORKA/XXI/25-26/396",
    nama: "Rayhan Pratama",
    status: "Aktif",
    nim: "255410396",
    role: "Anggota",
    divisi: "Development Skill Division",
    kas: {
      totalWajib: 10000,
      totalTerbayar: 10000,
      tunggakan: 0,
      riwayat: [
        {
          bulan: "Oktober 2025",
          nominal: 10000,
          lunas: true,
          tanggalBayar: "05/10/2025",
        },
      ],
    },
  },
  {
    id: 17,
    npk: "HIMAFORKA/XXI/25-26/378",
    nama: "Alvitho P Sipayung",
    status: "Aktif",
    nim: "255410378",
    role: "Koordinator",
    divisi: "Networking Division",
    kas: {
      totalWajib: 10000,
      totalTerbayar: 0,
      tunggakan: 10000,
      riwayat: [
        {
          bulan: "Oktober 2025",
          nominal: 10000,
          lunas: false,
          
        },
      ],
    },
  },
  {
    id: 18,
    npk: "HIMAFORKA/XXI/25-26/383",
    nama: "Rubu Yafo P Masneno",
    status: "Aktif",
    nim: "255410383",
    role: "Anggota",
    divisi: "Networking Division",
    kas: {
      totalWajib: 10000,
      totalTerbayar: 10000,
      tunggakan: 0,
      riwayat: [
        {
          bulan: "Oktober 2025",
          nominal: 10000,
          lunas: true,
          tanggalBayar: "05/10/2025",
        },
      ],
    },
  },
  {
    id: 19,
    npk: "HIMAFORKA/XXI/25-26/394",
    nama: "Miftahul Hawaji",
    status: "Aktif",
    nim: "255410394",
    role: "Anggota",
    divisi: "Networking Division",
    kas: {
      totalWajib: 10000,
      totalTerbayar: 10000,
      tunggakan: 0,
      riwayat: [
        {
          bulan: "Oktober 2025",
          nominal: 10000,
          lunas: true,
          tanggalBayar: "05/10/2025",
        },
      ],
    },
  },
  {
    id: 20,
    npk: "HIMAFORKA/XXI/25-26/380",
    nama: "Dzaky Aptanta",
    status: "Aktif",
    nim: "255410380",
    role: "Anggota",
    divisi: "Networking Division",
    kas: {
      totalWajib: 10000,
      totalTerbayar: 0,
      tunggakan: 10000,
      riwayat: [
        {
          bulan: "Oktober 2025",
          nominal: 10000,
          lunas: false,
          
        },
      ],
    },
  },
  {
    id: 21,
    npk: "HIMAFORKA/XXI/25-26/393",
    nama: "Hendrik Firmansyah",
    status: "Aktif",
    nim: "255410393",
    role: "Anggota",
    divisi: "Networking Division",
    kas: {
      totalWajib: 10000,
      totalTerbayar: 10000,
      tunggakan: 0,
      riwayat: [
        {
          bulan: "Oktober 2025",
          nominal: 10000,
          lunas: true,
          tanggalBayar: "05/10/2025",
        },
      ],
    },
  },
  {
    id: 22,
    npk: "HIMAFORKA/XXI/25-26/386",
    nama: "Maulana Giga Fachriwibowo",
    status: "Aktif",
    nim: "255410386",
    role: "Anggota",
    divisi: "Networking Division",
    kas: {
      totalWajib: 10000,
      totalTerbayar: 10000,
      tunggakan: 0,
      riwayat: [
        {
          bulan: "Oktober 2025",
          nominal: 10000,
          lunas: true,
          tanggalBayar: "05/10/2025",
        },
      ],
    },
  },
];

export function findMemberByCredentials(identifier: string): Member | undefined {
  const cleanId = identifier.trim().toLowerCase();
  return MEMBERS_DATA.find((m) => {
    return (
      m.nim.toLowerCase() === cleanId ||
      m.npk.toLowerCase() === cleanId ||
      m.nama.toLowerCase().includes(cleanId)
    );
  });
}
