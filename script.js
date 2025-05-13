document.getElementById("medicForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const blood = document.getElementById("blood").value;
  const address = document.getElementById("address").value;
  const condition = document.getElementById("condition").value;
  const allergies = document.getElementById("allergies").value;
  const contact = document.getElementById("contact").value;

  const url = `${window.location.origin}/medical-info.html?name=${encodeURIComponent(name)}&blood=${encodeURIComponent(blood)}&address=${encodeURIComponent(address)}&condition=${encodeURIComponent(condition)}&allergies=${encodeURIComponent(allergies)}&contact=${encodeURIComponent(contact)}`;

  QRCode.toCanvas(document.createElement('canvas'), url, function (error, canvas) {
    if (error) console.error(error);
    const qrDiv = document.getElementById("qrcode");
    qrDiv.innerHTML = '';
    qrDiv.appendChild(canvas);
  });
});
