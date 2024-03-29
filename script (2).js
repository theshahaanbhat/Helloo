document.querySelector('.letter-box').addEventListener('click', function() {
  document.querySelector('.page1').style.display = 'none';
  document.querySelector('.page2').classList.remove('hidden');
});

function sendWhatsappMessage(response) {
  if (response === 'YES') {
    window.open('https://api.whatsapp.com/send?phone=9149415797&text=Hii', '_blank');
  }
}

function closePage() {
  window.close();
}
