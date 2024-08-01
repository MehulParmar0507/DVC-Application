
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


// image section functionalities:-

let DVCImage = document.getElementById('image-section-img');
let deleteImg = document.getElementById('trash-img');

function deleteImage(currElement)
{
  console.log(currElement.previousElementSibling.children[0]);
  currElement.previousElementSibling.remove();
  currElement.remove();
}

// testimonial sections

let testimonialAccordionBody = document.getElementById('testimonial-accordion-body');

function addTestimonial()
{
let testimonialContainer = document.createElement('div');
testimonialContainer.innerHTML = `<div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Upload Testimonial Image:</label>
                  </div>

                  <div class="mb-3">
                    <label class="image-profile-photo" for="images_upload">
                      <div class="image-photo">
                        <img src="./images/pexels-italo-melo-881954-2379004.jpg" height="64px" width="64px">
                      </div>
                      <div class="delete-box">
                        <i class="bi bi-trash3" style="color:red"></i>
                      </div>
                      <div class="download-photo">
                        <box-icon name='upload'></box-icon>
                      </div>
                      <input type="file" name="" id="images_upload" style="display: none;">
                   </label>
                  </div>

                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Testimonial Name:</label>
                    <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="Enter Testimonial Name" />
                  </div>

                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Review:</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                      placeholder="Add Their Review"></textarea>
                  </div>

                  <button type="button" class="btn btn-primary" onclick="addTestimonial()">Add New Testimonial</button>`
  console.log(testimonialContainer);
  console.log(testimonialAccordionBody);
  testimonialAccordionBody.appendChild(testimonialContainer);
}


// Product Sections:-

let ProductAccordianBody = document.getElementById('Product-accordian-body');

function addProduct()
{
  let productContainer = document.createElement('div');
  productContainer.innerHTML = `<div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Upload Product Image:</label>
                  </div>

                  <div class="mb-3">
                    <label class="image-profile-photo" for="images_upload">
                      <div class="image-photo">
                        <img src="./images/oneplus9-1-500x500.webp" height="64px" width="64px">
                      </div>
                      <div class="delete-box">
                        <i class="bi bi-trash3" style="color:red"></i>
                      </div>
                      <div class="download-photo">
                        <box-icon name='upload'></box-icon>
                      </div>
                      <input type="file" name="" id="images_upload" style="display: none;">
                   </label>
                  </div>

                  <div class="mb-3 col-lg-6 col-md-12 col-sm-12">
                    <label for="exampleFormControlInput1" class="form-label">Product Name:</label>
                    <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="Enter Product Name" />
                  </div>

                  <label class="form-label text-secondary">Product Information:</label>

                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Product Feature 1:</label>
                    <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="Enter Product Features" />
                  </div>

                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Product Feature 2:</label>
                    <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="Enter Product Features(Place it Empty if you have Not Enough Features)" />
                  </div>

                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Product Feature 3:</label>
                    <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="Enter Product Features(Place it Empty if you have Not Enough Features)" />
                  </div>

                  <div class="mb-4 row">
                    <label for="html5-number-input" class="col-md-0 col-form-label">Product Price:</label>
                    <div class="col-md-4">
                      <input class="form-control" type="number" value="" placeholder="Enter only Numbers" id="html5-number-input" />
                    </div>
                  </div>

                  <button type="button" class="btn btn-primary">Add New Product</button>`;

  console.log(ProductAccordianBody);
  console.log(productContainer);
  ProductAccordianBody.appendChild(productContainer);
}

// Team Section Functionalities

let teamAccordianBody = document.getElementById('team-accordian-body');


function addTeamMember()
{
  let teamContainer = document.createElement('div');
  teamContainer.innerHTML = `<div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Title</label>
                      <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="Title" />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                        placeholder="Description"></textarea>
                    </div>
    
                    <p>Profile (250x250px, 1:1 Ratio)</p>
                    <label class="image-profile-photo" for="link_upload">
                      <div class="image-photo" >
                        <img src="./images/image.png" height="64px" width="64px" style="border-radius: 5px;">
                      </div>
                      <div class="download-photo">
                        <box-icon name='upload'></box-icon>
                      </div>
                      <input type="file" id="link_upload" style="display: none;">
                    </label>
                       <br>
                      <div class="row  mt-10 last-container">
                        <div class="col-sm-12 col-md-12 col-lg-6">
                          <label for="" class="form-label">Name</label>
                          <input type="text" class="form-control" placeholder="Name" aria-label="First name">
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-6">
                          <label for="" class="form-label">Designation</label>
                          <input type="text" class="form-control" placeholder="Designation" aria-label="Last name">
                        </div>
                      </div>
                      <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                          placeholder="Description"></textarea>
                      </div>
  
                      <button type="button" class="btn btn-primary mb-2" onclick="addTeamMember()">Add More</button>`;
   console.log(teamAccordianBody);
   console.log(teamContainer);
   teamAccordianBody.appendChild(teamContainer);
}
