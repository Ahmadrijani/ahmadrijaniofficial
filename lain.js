/*
=========================================
PANDUAN LAIN.JS
=========================================

mode: "tab"
- Membuat tab baru di dalam aplikasi.
- hash wajib diisi dan harus unik.

Contoh:
{
  nama: "Blog",
  icon: "fa-brands fa-blogger",
  link: "https://example.com",
  mode: "tab",
  hash: "#blog"
}

mode: "iframe"
- Membuka website langsung dalam iframe.
- Tidak perlu hash.

Contoh:
{
  nama: "Blog",
  icon: "fa-brands fa-blogger",
  link: "https://example.com",
  mode: "iframe"
}

mode: "OUT"
- Keluar dari aplikasi dan membuka link.
- Tidak perlu hash.

Contoh:
{
  nama: "Blog",
  icon: "fa-brands fa-blogger",
  link: "https://example.com",
  mode: "OUT"
}

icon:
- Font Awesome:
  icon: "fa-solid fa-house"

- Gambar lokal:
  icon: "icon/logo.png"

- Gambar URL:
  icon: "https://example.com/logo.png"

Cara menambah menu:
1. Salin salah satu item.
2. Ubah nama, icon, link, mode.
3. Jika mode "tab", isi hash yang berbeda.
*/

window.LAIN_MENU = [

  {
    nama: "AHMAD RIJANI BLOGSPOT",
    icon: "fa-brands fa-blogger",
    link: "https://ahmadrijaniofficial.blogspot.com/",
    mode: "tab",
    hash: "#blogspot"
  },

  {
    nama: "Tes 2",
    icon: "fa-brands fa-blogger",
    link: "https://ahmadrijaniofficial.blogspot.com/",
    mode: "OUT"
  },

  {
    nama: "Tes 3",
    icon: "fa-brands fa-blogger",
    link: "https://ahmadrijaniofficial.blogspot.com/",
    mode: "iframe"
  }

];
