document.getElementById('medicForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const userData = {
      name: document.getElementById('name').value,
      bloodGroup: document.getElementById('bloodGroup').value,
      allergies: document.getElementById('allergies').value,
      conditions: document.getElementById('conditions').value,
      medications: document.getElementById('medications').value,
      emergencyContact: document.getElementById('emergencyContact').value
    };
  
    localStorage.setItem('medicData', JSON.stringify(userData));
  
    const dataUrl = `${window.location.origin}/medical-info.html`;
generateQR(dataUrl);

    generateQR(dataUrl);
  });
  
  function generateQR(data) {
    const qrDiv = document.getElementById('qrResult');
    qrDiv.innerHTML = '';
    const img = document.createElement('img');
    img.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(data)}&size=200x200`;
    qrDiv.appendChild(img);
  }
  