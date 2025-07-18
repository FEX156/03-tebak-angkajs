# 🔢 Tebak Angka CLI Game

Game CLI sederhana berbasis Node.js di mana kamu harus menebak angka yang dipilih secara acak oleh komputer. Cocok untuk belajar logika, kontrol alur, dan interaksi CLI!

## 🎮 Cara Main

1. Jalankan game dengan perintah:

   ```bash
   node index.js start
   ```

2. Pilih tingkat kesulitan:

   - `1`: Easy (10 kesempatan)
   - `2`: Medium (5 kesempatan)
   - `3`: Hard (3 kesempatan)

3. Masukkan tebakan angka (1–100) berdasarkan petunjuk apakah angka tebakan kamu terlalu tinggi atau rendah.

4. Setelah selesai, kamu akan diberi opsi untuk bermain lagi (`Y/n`).

## 📦 Instalasi

Clone repo ini dan jalankan dengan Node.js:

```bash
git clone https://github.com/namauser/tebak-angka-cli.git
cd tebak-angka-cli
node index.js start
```

> **Catatan**: Pastikan kamu menggunakan Node.js versi 18 atau lebih tinggi.

## 🧠 Fitur

- Pemilihan tingkat kesulitan
- Validasi input angka dan huruf
- Perulangan "play again" sampai user berhenti
- CLI tanpa library eksternal
- Cocok untuk latihan logika dasar

## 🔧 Struktur Kode

- `index.js`: Fungsi utama (`main()`) dan entry point
- `gameStart()`: Menampilkan intro dan memulai permainan
- `playGame(chances)`: Logika utama tebak-menebak
- `playAgain()`: Menanyakan ulang apakah ingin main lagi
- `prompt()`: Utility sederhana untuk menerima input

## 🤓 Belajar Apa dari Proyek Ini?

- `async/await` untuk CLI interaktif
- Struktur program modular
- Validasi input
- Kontrol flow dengan `if`, `switch`, dan `loop`

## 💡 Rencana Pengembangan (opsional)

- [ ] Tambahkan skor & sistem leaderboard
- [ ] Simpan data riwayat permainan
- [ ] Mode tantangan waktu (timer)
- [ ] Paketkan sebagai CLI global (`npm link`)

## 🧑‍💻 Author

Made with 💻 by [Taufiq Hidayat](https://github.com/namagithubmu)

---

Selamat bermain dan semoga beruntung! 🎯

```

---

Kalau kamu pakai **VS Code**, tinggal:
- Tekan `Ctrl + A` di sini untuk seleksi semua
- `Ctrl + C` untuk copy
- Pindah ke `README.md` → `Ctrl + V` untuk paste

Nanti GitHub otomatis menampilkan markdown ini dengan gaya keren 😎
Kalau mau aku bantu *custom* lagi README-nya biar kelihatan super profesional (pakai badge, demo, GIF), tinggal bilang aja.
```
