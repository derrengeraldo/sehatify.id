// Mengatur efek bayangan pada header saat di-scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        header.style.padding = '15px 5%';
    } else {
        header.style.boxShadow = 'none';
        header.style.padding = '20px 5%';
    }
});

// Pesan konfirmasi sederhana saat menekan tombol daftar
const buttons = document.querySelectorAll('.btn-primary, .btn-primary-full');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Terima kasih! Kamu telah memulai perjalanan sehatmu bersama SehatIfy.');
    });
});