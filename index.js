
// generate QR Code
function generateQRCode() {
    var text = document.getElementById("url").value;
    var qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = ""; // Clear previous QR code
    new QRCode(qrcodeContainer, {text:text, width:200, height:200});

    if(text==""){
      alert("Enter URL please!", "danger");
      return;
    }

    document.getElementById("downloadbtn").style.display="";
}

// download QR code
function downloadQRCode() {
    var qrcodeContainer = document.getElementById("qrcode").getElementsByTagName("img")[0];
    var link = document.createElement("a");
    link.href = qrcodeContainer.src;
    link.download = "qrcode.png";
    link.click();
}

// bootstrap alert
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}
