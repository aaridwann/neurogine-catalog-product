export interface AdItem {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  buttonText: string;
  imageUrl: string;
}

export const AD_DATA: AdItem[] = [
  {
    id: '1',
    title: 'Coffee',
    subtitle: 'Nikmati kemudahan bayar listrik, pulsa, dan e-wallet hanya dalam satu genggaman.',
    tagline: 'TERPOPULER',
    buttonText: 'Coba Sekarang',
    imageUrl: 'https://i.pinimg.com/736x/f4/88/a2/f488a248cf63499bcccbe653632ba0df.jpg',

  },
  {
    id: '2',
    title: 'Investasi Cerdas Bebas Khawatir',
    subtitle: 'Mulai bangun portofolio reksa dana dan emas dengan bunga kompetitif mulai 10 ribu.',
    tagline: 'PROMO FINANSIAL',
    buttonText: 'Mulai Investasi',
    imageUrl: 'https://i.pinimg.com/736x/84/9e/ef/849eefafd6f7d4062d4f87925c60602d.jpg',
  },
  {
    id: '3',
    title: 'Proteksi Maksimal Keuangan Anda',
    subtitle: 'Amankan transaksi mobile banking dari penipuan dengan fitur keamanan tingkat lanjut.',
    tagline: 'FITUR KEAMANAN',
    buttonText: 'Pelajari Selengkapnya',
    imageUrl: 'https://i.pinimg.com/1200x/c7/02/08/c702088017bab94edc29c8e26d65b706.jpg',

  },
  {
    id: '4',
    title: 'Cashback Hingga 50% Akhir Pekan',
    subtitle: 'Gunakan QRIS untuk belanja di merchant pilihan dan dapatkan poin berlimpah.',
    tagline: 'LIMITED OFFER',
    buttonText: 'Klaim Promo',
    imageUrl: 'https://i.pinimg.com/736x/38/95/3b/38953b1c7d8b7f58e025d688abd714f9.jpg',
  },
];