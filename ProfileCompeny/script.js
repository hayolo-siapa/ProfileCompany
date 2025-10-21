// Toggle mobile menu
const menuBtn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// Contact form submit ke Formspree
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get('name');

    try {
      const response = await fetch(contactForm.action, {
        method: contactForm.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        formMessage.textContent = `Terima kasih, ${name}! Pesan Anda berhasil dikirim.`;
        formMessage.classList.remove('hidden', 'error');
        formMessage.classList.add('success');
        contactForm.reset();
      } else {
        throw new Error('Gagal mengirim pesan');
      }
    } catch (error) {
      formMessage.textContent = 'Terjadi kesalahan saat mengirim pesan. Coba lagi nanti.';
      formMessage.classList.remove('hidden', 'success');
      formMessage.classList.add('error');
    }

    // Sembunyikan pesan setelah 4 detik
    setTimeout(() => {
      formMessage.classList.add('hidden');
    }, 4000);
  });
}

  // JavaScript untuk zoom gambar
  const zoomModal = document.getElementById("zoomModal");
  const zoomImg = document.getElementById("zoomImg");
  const zoomables = document.querySelectorAll(".zoomable");
  const closeBtn = document.querySelector(".close");

  zoomables.forEach(img => {
    img.addEventListener("click", (e) => {
      e.stopPropagation();
      zoomModal.style.display = "flex";
      zoomImg.src = img.src;
    });
  });

  closeBtn.onclick = () => zoomModal.style.display = "none";
  zoomModal.onclick = (e) => {
    if (e.target === zoomModal) zoomModal.style.display = "none";
  };

function showPopup(productName) {
  const popup = document.getElementById('popup');
  const title = document.getElementById('popup-title');
  title.textContent = productName;
  popup.style.display = 'flex';
}

// Tutup popup dengan tombol close
function closePopup(event) {
  event.stopPropagation(); // cegah klik ganda
  document.getElementById('popup').style.display = 'none';
}

// Tutup popup jika klik di luar konten
window.onclick = function(event) {
  const popup = document.getElementById('popup');
  if (event.target === popup) {
    popup.style.display = 'none';
  }
}