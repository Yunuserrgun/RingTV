function dijitalSaatGuncelle() {
    const saat = new Date();
    const saatHTML = document.getElementById('saat');
    const saatString = `${saat.getHours().toString().padStart(2, '0')}:${saat.getMinutes().toString().padStart(2, '0')}:${saat.getSeconds().toString().padStart(2, '0')}`;
    saatHTML.textContent = saatString;
  }
  
  setInterval(dijitalSaatGuncelle, 1000);
  
  dijitalSaatGuncelle();

  