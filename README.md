# Sunflower Dental

Website klinik gigi (HTML + CSS + JavaScript biasa, tanpa framework).

## Struktur

```
sunflower-dental/
├── index.html        # Landing page
├── booking.html      # Buat janji temu
├── dashboard.html    # Dashboard pasien
├── css/style.css     # Semua gaya (warna ada di :root)
├── js/booking.js     # Logika form janji temu
└── images/           # Taruh gambar dari Figma di sini
```

## Cara menjalankan di VS Code

1. Buka folder ini di VS Code (`File > Open Folder`).
2. Install ekstensi **Live Server** (Ritwick Dey).
3. Klik kanan `index.html` > **Open with Live Server**.

## Gambar yang perlu Anda ekspor dari Figma

Ekspor lalu simpan ke folder `images/` dengan nama berikut:

| Nama file      | Dipakai di                                   |
|----------------|----------------------------------------------|
| `hero.jpg`     | Landing page (banner) dan kartu tips di booking |
| `dokter-1.jpg` | drg. Rahayu Setia, Sp.KG                     |
| `dokter-2.jpg` | drg. Sugeng Santoso, Sp.Ort                  |
| `dokter-3.jpg` | drg. Ayu Rahma, Sp.BM                        |

Di Figma: pilih gambar > panel **Export** (kanan bawah) > JPG/PNG > Export.

## Mengubah warna

Buka `css/style.css`, ubah variabel di bagian `:root`:

```css
--primary: #4f6980;  /* biru keabu-abuan */
--accent:  #f6c760;  /* kuning */
```

## Catatan

- Ikon memakai [Lucide](https://lucide.dev) lewat CDN (butuh internet).
- Tombol "Kirim Permintaan Janji Temu" saat ini hanya menampilkan alert.
  Hubungkan ke backend / WhatsApp API di `js/booking.js` (cari `TODO`).
- Nilai warna diperkirakan dari screenshot. Jika ada yang kurang pas,
  salin hex asli dari Figma (Inspect) ke `:root`.
