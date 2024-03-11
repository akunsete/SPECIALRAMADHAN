// Fungsi untuk membuat bunga bergerak secara acak
function animateFlower(flower) {
    const duration = Math.random() * 4500 + 1000; // Durasi animasi antara 2-7 detik
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    const endX = Math.random() * window.innerWidth;
    const endY = Math.random() * window.innerHeight;
  
    flower.style.transition = `transform ${duration}ms ease-in-out`;
    flower.style.transform = `translate(${endX - startX}px, ${endY - startY}px)`;
  
    setTimeout(() => {
      flower.style.transform = `translate(0, 0)`; // Kembali ke posisi awal
      animateFlower(flower); // Mengulangi animasi
    }, duration);
  }
  
  // Ambil semua elemen bunga dan jalankan animasinya
  const flowers = document.querySelectorAll('.flower');
  flowers.forEach((flower) => {
    animateFlower(flower);
  });
  
  