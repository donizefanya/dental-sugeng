// Logika halaman Buat Janji Temu:
// - memperbarui Ringkasan Janji Temu saat pilihan berubah
// - menonaktifkan tanggal yang tidak sesuai jadwal dokter

const form = document.getElementById("bookingForm");
const dateGrid = document.getElementById("dateGrid");
const sessionGrid = document.getElementById("sessionGrid");

const sum = {
  layanan: document.getElementById("sumLayanan"),
  dokter: document.getElementById("sumDokter"),
  tanggal: document.getElementById("sumTanggal"),
  waktu: document.getElementById("sumWaktu"),
};

function selectedDoctor() {
  return form.querySelector('input[name="dokter"]:checked');
}

// Aktifkan hanya tanggal yang cocok dengan hari praktik dokter
function updateAvailableDates() {
  const days = selectedDoctor().dataset.days.split(",").map(Number);
  let activeBtn = dateGrid.querySelector(".date-btn.active");

  dateGrid.querySelectorAll(".date-btn").forEach((btn) => {
    const ok = days.includes(Number(btn.dataset.dow));
    btn.disabled = !ok;
    if (!ok) btn.classList.remove("active");
  });

  // Jika tanggal aktif tidak tersedia, pilih tanggal pertama yang tersedia
  if (!activeBtn || activeBtn.disabled) {
    const first = dateGrid.querySelector(".date-btn:not(:disabled)");
    if (first) first.classList.add("active");
  }
}

function updateSummary() {
  const layanan = form.querySelector('input[name="layanan"]:checked');
  const tanggal = dateGrid.querySelector(".date-btn.active");
  const sesi = sessionGrid.querySelector(".session-btn.active");

  sum.layanan.textContent = layanan ? layanan.value : "-";
  sum.dokter.textContent = selectedDoctor().value;
  sum.tanggal.textContent = tanggal ? tanggal.dataset.label : "-";
  sum.waktu.textContent = sesi ? sesi.dataset.time : "-";
}

form.addEventListener("change", (e) => {
  if (e.target.name === "dokter") updateAvailableDates();
  updateSummary();
});

dateGrid.addEventListener("click", (e) => {
  const btn = e.target.closest(".date-btn");
  if (!btn || btn.disabled) return;
  dateGrid.querySelectorAll(".date-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  updateSummary();
});

sessionGrid.addEventListener("click", (e) => {
  const btn = e.target.closest(".session-btn");
  if (!btn) return;
  sessionGrid.querySelectorAll(".session-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  updateSummary();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // TODO: ganti dengan pengiriman data ke backend / WhatsApp API
  alert("Permintaan janji temu terkirim! Klinik akan menghubungi Anda melalui WhatsApp.");
});

updateAvailableDates();
updateSummary();
