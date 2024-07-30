
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


function addContact(type){

  let sms = document.createElement("div");
  sms.innerHTML=`<div class="input-group mb-3">
                      <span>
                        <select class="form-select" aria-label="Default select example">
                          <option selected>${type}</option>
                        </select>
                      </span>
                      <input type="text" class="form-control" placeholder="${type}" aria-label="Username"
                        aria-describedby="basic-addon1" />
                        <span class="position-absolute translate-middle badge badge-center rounded-pill"><svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                        </svg></span>
                    </div>`;

  let span = sms.getElementsByTagName("span")[1];
  span.onclick = ()=>{
      sms.remove();
  };
  let contactDiv = document.getElementById("contactDiv");

contactDiv.appendChild(sms);
  console.log(type);
}

function deleteContact(t){
    let c = document.getElementById(t);
    c.remove();
}