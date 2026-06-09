const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.detail-card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.8s ease-out";
    observer.observe(card);
});

// 1. Ambil semua elemen HTML yang dibutuhkan (DOM Selection)
const weightInput = document.getElementById('weightInput');
const calcBtn = document.getElementById('calcBtn');
const resultBox = document.getElementById('resultBox');
const waterResult = document.getElementById('waterResult');
const tipsText = document.getElementById('tipsText');

const drinkBtn = document.getElementById('drinkBtn');
const progressText = document.getElementById('progressText');
const targetText = document.getElementById('targetText');

// Variabel untuk menyimpan data angka
let totalKebutuhan = 0;
let jumlahMinumSkrg = 0;

// 2. Fungsi saat tombol "Hitung Kebutuhan" diklik
calcBtn.addEventListener('click', function() {
    const beratBadan = parseFloat(weightInput.value);

    // Validasi jika input kosong atau tidak masuk akal
    if (!beratBadan || beratBadan < 20) {
        alert('Silakan masukkan berat badan yang valid terlebih dahulu ya!');
        return;
    }

    // Rumus kesehatan standar: Berat Badan x 30 ml, lalu dijadikan Liter (dibagi 1000)
    totalKebutuhan = (beratBadan * 30) / 1000;
    
    // Tampilkan hasil di HTML (.toFixed(1) agar hanya ada 1 angka di belakang koma)
    waterResult.innerText = totalKebutuhan.toFixed(1);
    targetText.innerText = totalKebutuhan.toFixed(1);
    
    // Set narasi tips santai
    tipsText.innerText = `Setara dengan sekitar ${Math.round(totalKebutuhan / 0.25)} gelas air berukuran 250ml harianmu.`;

    // Reset progress minum setiap kali hitung ulang
    jumlahMinumSkrg = 0;
    progressText.innerText = "0";

    // Munculkan kotak hasil dengan menghapus class 'hidden'
    resultBox.classList.remove('hidden');
});

// 3. Fungsi interaktif saat tombol "Saya Sudah Minum" diklik
drinkBtn.addEventListener('click', function() {
    // Tambah 250ml (0.25 Liter) ke progress saat ini
    jumlahMinumSkrg += 0.25;
    
    // Update teks progress di layar
    progressText.innerText = jumlahMinumSkrg.toFixed(2);

    // Kasih efek selamat kalau target minum sudah tercapai!
    if (jumlahMinumSkrg >= totalKebutuhan) {
        alert('Keren banget! Target hidrasimu hari ini sudah terpenuhi 🥳');
    }
});

/* ================= LOGIKA TAB PILAR LAYANAN ================= */
function bukaPilar(event, namaPilar) {
    // 1. Ambil semua elemen dengan class="tab-content" lalu sembunyikan
    const semuaKonten = document.getElementsByClassName("tab-content");
    for (let i = 0; i < semuaKonten.length; i++) {
        semuaKonten[i].classList.remove("aktif");
    }

    // 2. Ambil semua tombol dengan class="tab-btn" lalu matikan status aktifnya
    const semuaTombol = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < semuaTombol.length; i++) {
        semuaTombol[i].classList.remove("active");
    }

    // 3. Tampilkan konten pilar yang sedang diklik dengan menambahkan class "aktif"
    document.getElementById(namaPilar).classList.add("aktif");

    // 4. Tambahkan class "active" ke tombol yang baru saja diklik pengguna
    event.currentTarget.classList.add("active");
}