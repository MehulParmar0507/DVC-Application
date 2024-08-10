
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

// Product Sections:-

function addProduct(c)
{
let ProductAccordianBody = document.getElementById(`Product-accordian-body${c}`);
let productContainer = document.createElement('div');
productContainer.innerHTML = `<hr/>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Upload Product Image:</label>
                  </div>

                  <div class="mb-3">
                    <span class="image-profile-photo">
                      <div class="image-photo">
                        <img src="./images/oneplus9-1-500x500.webp" height="64px" width="64px">
                      </div>
                      <div class="delete-box" onclick="deleteImage(this)">
                        <i class="bi bi-trash3" style="color:red"></i>
                      </div>
                      <label for="prod_uplaod">
                        <div class="download-photo">
                          <box-icon name='upload'></box-icon>
                        </div>
                      </label>
                      <input type="file" name="" id="prod_uplaod" style="display: none;">
                    </span>
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
                  </div>`;

console.log(ProductAccordianBody);
console.log(productContainer);
ProductAccordianBody.appendChild(productContainer);
}

// Team Section Functionalities


function addTeamMember(c)
{
let teamAccordianBody = document.getElementById(`team-accordian-body${c}`);
let teamContainer = document.createElement('div');
teamContainer.innerHTML = `<hr/><div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Title</label>
                    <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="Title" />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                      placeholder="Description"></textarea>
                  </div>
  
                  <p>Profile (250x250px, 1:1 Ratio)</p>
                  <span class="image-profile-photo" for="link_upload">
                    <div class="image-photo">
                        <img src="./images/pexels-italo-melo-881954-2379004.jpg" height="64px" width="64px">
                      </div>
                      <div class="delete-box" onclick="deleteImage(this)">
                        <i class="bi bi-trash3" style="color:red"></i>
                      </div>
                    <label for="team_upload">
                    <div class="download-photo">
                      <box-icon name='upload'></box-icon>
                    </div>
                    </label>
                    <input type="file" id="team_upload" style="display: none;">
                  </span>
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
                    </div>`;
 console.log(teamAccordianBody);
 console.log(teamContainer);
 teamAccordianBody.appendChild(teamContainer);
}

// Social Links Functionalities

function addSocialLink(t){
let my_social_link = document.getElementById("my_social_link");
let slDiv = document.createElement("div");
slDiv.innerHTML = `<div class="py-3">
                  <div class="input-group mb-3">
                    <span>
                      <select class="form-select" aria-label="Default select example">
                        <option selected>${t}</option>
                      </select>
                    </span>
                    <input type="text" class="form-control" placeholder="URL" aria-label="Username"
                      aria-describedby="basic-addon1" />
                  </div>
                  <span class="image-profile-photo" for="profile_upload">
                    <div class="image-photo">
                      <img src="./images/${t} png.png" height="64px" width="80px">
                    </div>
                    <label for="${t}_upload">
                      <div class="download-photo">
                        <box-icon name='upload'></box-icon>
                      </div>
                    </label>
                    <input type="file" name="" id="${t}_upload" style="display: none;">
                  </span>
      
                 <div class="input-group py-2">
                  <div class="me-3 col-sm-12 col-md-12 col-lg-5">
                    <label for="exampleFormControlInput2" class="form-label">Title</label>
                    <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="${t}">
                  </div>
  
                  <div class="col-sm-12 col-md-12 col-lg-6">
                    <!-- <label for="exampleFormControlInput2" class="form-label">Subtitle</label> -->
                    <div class="profile-photo d-flex align-items-center">
                      <label for="exampleFormControlInput2" class="form-label">SUBTITLE</label>
                      <div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="">
                        <label class="form-check-label" for="flexSwitchCheckChecked"></label>
                      </div>
                   </div>
                    
                    <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Follow us on ${t}">
                  </div>
                </div>
                </div>`;
my_social_link.appendChild(slDiv);
}

count = 0;

let homeAccordion = document.getElementById("home_accordion");

function addTestimonialAccordion(){
count++;
let testimonialAccordionDiv = document.createElement("div");
testimonialAccordionDiv.innerHTML = `<div class="accordion-item">
            <h2 class="accordion-header" id="ta${count}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#tac${count}" aria-expanded="false" aria-controls="tac${count}">
                <div class="btn-container">
                  <span class="d-flex align-items-center"><i class="bi bi-people-fill"></i>&nbsp;Testimonials</span>
                  <div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                        <label class="form-check-label" for="flexSwitchCheckChecked"
                          ></label
                        >
                      </div>
                </div>
              </button>
            </h2>
            <div id="tac${count}" class="accordion-collapse collapse" aria-labelledby="ta${count}"
              data-bs-parent="#accordionExample">
              <div class="accordion-body py-3">
                <div id="testimonial-accordion-body${count}">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Upload Testimonial Image:</label>
                  </div>

                  <div class="mb-3">
                    <span class="image-profile-photo" for="images_upload">
                      <div class="image-photo">
                        <img src="./images/pexels-italo-melo-881954-2379004.jpg" height="64px" width="64px">
                      </div>
                      <div class="delete-box" onclick="deleteImage(this)">
                        <i class="bi bi-trash3" style="color:red"></i>
                      </div>
                      <label for="test_upload">
                        <div class="download-photo">
                          <box-icon name='upload'></box-icon>
                        </div>
                      </label>
                      <input type="file" name="" id="test_upload" style="display: none;">
                    </span>
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

              </div>
              <button type="button" class="btn btn-primary" onclick="addTestimonial(${count})">Add New Testimonial</button>
              </div>


              

            </div>
          </div>`;

homeAccordion.appendChild(testimonialAccordionDiv);
}

function addVideoAccordion(){
count++;
let videoAccordionDiv = document.createElement("div");
videoAccordionDiv.innerHTML = `<div class="accordion-item">
            <h2 class="accordion-header" id="va${count}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#vac${count}" aria-expanded="false" aria-controls="vac${count}">
                <div class="btn-container">
                  <span class="d-flex align-items-center"> <i class="bx bx-video me-1"></i>Video</span>
                  <div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                        <label class="form-check-label" for="flexSwitchCheckChecked"
                          ></label
                        >
                      </div>
                </div>
              </button>
            </h2>
            <div id="vac${count}" class="accordion-collapse collapse" aria-labelledby="va${count}"
              data-bs-parent="#accordionExample">
              <div class="accordion-body py-3">
                <div class="profile-photo">
                  <span>Title, Description</span>
                  <div class="form-check form-switch mb-2">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="">
                    <label class="form-check-label" for="flexSwitchCheckChecked"></label>
                  </div>
               </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Title</label>
                  <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="About me" onfocusout="changeDVCText(this,'video_heading')"/>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                    placeholder="Description" onfocusout="changeDVCText(this,'video_desc')"></textarea>
                </div>

                <!-- <a href="#"><button type="button" class="btn btn-secondary mb-3">Youtube</button></a> -->
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" checked>
                  <label class="btn btn-outline-primary" for="btnradio1">Youtube</label>
                
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio2">
                  <label class="btn btn-outline-primary" for="btnradio2">Vimeo</label>
                </div>
                <br><br>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">video link</label>
                  <input type="text" class="form-control" id="exampleFormControlInput3" onfocusout="changeDVC_URL(this,'YoutubeVideo')" placeholder="Put Embed Link of Youtube Video"/>
                </div>
              </div>
            </div>
          </div>`;

          homeAccordion.appendChild(videoAccordionDiv);
}

function addBussinessAccordion(){
count++;

let bussinessAccordionDiv = document.createElement("div");
bussinessAccordionDiv.innerHTML = `<div class="accordion-item">
            <h2 class="accordion-header" id="ba${count}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#ba${count}" aria-expanded="false" aria-controls="collapseNine">
                <div class="btn-container">
                  <span class="d-flex align-items-center"> <i class="bx bx-video me-1"></i>Bussiness Hours</span>
                  <div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                        <label class="form-check-label" for="flexSwitchCheckChecked"
                          ></label
                        >
                  </div>
                </div>
              </button>
            </h2>
            <div id="ba${count}" class="accordion-collapse collapse" aria-labelledby="ba${count}"
              data-bs-parent="#accordionExample">
              <div class="accordion-body py-3">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Title</label>
                  <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="Bussiness Hours" />
                </div>

                <div class="mb-3">
                  <span class="image-profile-photo">
                    <div class="image-photo">
                      <img src="./images/oneplus9-1-500x500.webp" height="64px" width="64px">
                    </div>
                    <div class="delete-box" onclick="deleteImage(this)">
                      <i class="bi bi-trash3" style="color:red"></i>
                    </div>
                    <label for="buss_upload">
                      <div class="download-photo">
                        <box-icon name='upload'></box-icon>
                      </div>
                    </label>
                    <input type="file" name="" id="images_upload" style="display: none;">
                  </span>
                </div>

                <div class="form-check form-switch mb-3">
                  Open 24 hours
                  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                  <label class="form-check-label" for="flexSwitchCheckChecked"
                    ></label
                  >
                </div>

                <div class="row mb-3">
                  <div class="col-lg-6 col-md-12 col-sm-12">
                      <label for="exampleFormControlInput1" class="form-label">Open Status</label>
                      <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="Opened" />
                  </div>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <label for="exampleFormControlInput1" class="form-label">Closing Status</label>
                        <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="Closed" />
                  </div>
                </div>

                <div class="my-4">
                  <div class="mb-2">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label class="form-check-label" for="defaultCheck1">
                      Monday
                    </label>
                  </div>
                  <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12"><input type="text" class="form-control" id="exampleFormControlInput3" value="Monday" /></div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="input-group">
                        <input class="form-control" type="time"/>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="input-group">
                        <input class="form-control" type="time"/>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 col-sm-12">
                      <button class="btn btn-outline-primary"><i class="bi bi-plus-lg"></i></button>
                    </div>
                  </div>
                </div>

                <div class="my-4">
                  <div class="mb-2">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label class="form-check-label" for="defaultCheck1">
                      Tuesday
                    </label>
                  </div>
                  <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12"><input type="text" class="form-control" id="exampleFormControlInput3" value="Tuesday" /></div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="input-group">
                        <input class="form-control" type="time"/>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="input-group">
                        <input class="form-control" type="time"/>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 col-sm-12">
                      <button class="btn btn-outline-primary"><i class="bi bi-plus-lg"></i></button>
                    </div>
                  </div>
                </div>

                <div class="my-4">
                  <div class="mb-2">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label class="form-check-label" for="defaultCheck1">
                      Wednesday
                    </label>
                  </div>
                  <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12"><input type="text" class="form-control" id="exampleFormControlInput3" value="Wednesday" /></div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="input-group">
                        <input class="form-control" type="time"/>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="input-group">
                        <input class="form-control" type="time"/>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 col-sm-12">
                      <button class="btn btn-outline-primary"><i class="bi bi-plus-lg"></i></button>
                    </div>
                  </div>
                </div>

                <div class="my-4">
                  <div class="mb-2">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label class="form-check-label" for="defaultCheck1">
                      Thursday
                    </label>
                  </div>
                  <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12"><input type="text" class="form-control" id="exampleFormControlInput3" value="Thursday" /></div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="input-group">
                        <input class="form-control" type="time"/>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="input-group">
                        <input class="form-control" type="time"/>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 col-sm-12">
                      <button class="btn btn-outline-primary"><i class="bi bi-plus-lg"></i></button>
                    </div>
                  </div>
                </div>

                <div class="my-4">
                  <div class="mb-2">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label class="form-check-label" for="defaultCheck1">
                      Friday
                    </label>
                  </div>
                  <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12"><input type="text" class="form-control" id="exampleFormControlInput3" value="Friday" /></div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="input-group">
                        <input class="form-control" type="time"/>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="input-group">
                        <input class="form-control" type="time"/>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 col-sm-12">
                      <button class="btn btn-outline-primary"><i class="bi bi-plus-lg"></i></button>
                    </div>
                  </div>
                </div>

                <div class="my-4">
                  <div class="mb-2">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label class="form-check-label" for="defaultCheck1">
                      Saturday
                    </label>
                  </div>
                  <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12"><input type="text" class="form-control" id="exampleFormControlInput3" value="Saturday" /></div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="input-group">
                        <input class="form-control" type="time"/>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="input-group">
                        <input class="form-control" type="time"/>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 col-sm-12">
                      <button class="btn btn-outline-primary"><i class="bi bi-plus-lg"></i></button>
                    </div>
                  </div>
                </div>

                <div class="my-4">
                  <div class="mb-2">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label class="form-check-label" for="defaultCheck1">
                      Sunday
                    </label>
                  </div>
                  <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12"><input type="text" class="form-control" id="exampleFormControlInput3" value="Sunday" /></div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="input-group">
                        <input class="form-control" type="time"/>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="input-group">
                        <input class="form-control" type="time"/>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 col-sm-12">
                      <button class="btn btn-outline-primary"><i class="bi bi-plus-lg"></i></button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>`;
homeAccordion.appendChild(bussinessAccordionDiv);
}

function addTeamAccordion(){
count++;

let teamAccordianDiv = document.createElement("div");
teamAccordianDiv.innerHTML = `<div class="accordion-item">
            <h2 class="accordion-header" id="tmah${count}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#tma${count}" aria-expanded="false" aria-controls="tma${count}">
                <div class="btn-container">
                  <span class="d-flex align-items-center"> <i class="bi bi-microsoft-teams "> </i></i> &nbsp;Team</span>
                  <div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                        <label class="form-check-label" for="flexSwitchCheckChecked"
                          ></label
                        >
                      </div>
                </div>
              </button>
            </h2>
            <div id="tma${count}" class="accordion-collapse collapse" aria-labelledby="headingten"
              data-bs-parent="#accordionExample">
              <div class="accordion-body py-3">
                <div id="team-accordian-body${count}">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Title</label>
                  <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="Title" onfocusout="changeDVCText(this,'team_heading')" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                    placeholder="Description" onfocusout="changeDVCText(this,'team_company')"></textarea>
                </div>

                <p>Profile (250x250px, 1:1 Ratio)</p>
                <span class="image-profile-photo">
                  <div class="image-photo">
                        <img src="./images/pexels-italo-melo-881954-2379004.jpg" height="64px" width="64px">
                      </div>
                      <div class="delete-box" onclick="deleteImage(this)">
                        <i class="bi bi-trash3" style="color:red"></i>
                      </div>
                  <label for="link_upload">
                  <div class="download-photo">
                    <box-icon name='upload'></box-icon>
                  </div>
                  </label>
                  <input type="file" id="link_upload" style="display: none;">
                </span>
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
                </div>
                <button class="btn btn-primary" onclick="addTeamMember(${count})">Add Team Member</button>
              </div>
            </div>
          </div>`;

    homeAccordion.appendChild(teamAccordianDiv);
}

function addProductAccordion(){
count++;

let productAccordianDiv = document.createElement("div");
productAccordianDiv.innerHTML = `<div class="accordion-item">
            <h2 class="accordion-header" id="pa${count}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#pac${count}" aria-expanded="false" aria-controls="pac${count}">
                <div class="btn-container">
                  <span class="d-flex align-items-center"><i class="bi bi-cart2"></i>&nbsp;Products</span>
                  <div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                        <label class="form-check-label" for="flexSwitchCheckChecked"
                          ></label
                        >
                      </div>
                </div>
              </button>
            </h2>
            <div id="pac${count}" class="accordion-collapse collapse" aria-labelledby="pa${count}"
              data-bs-parent="#accordionExample">
              <div class="accordion-body py-3">
                <div id="Product-accordian-body${count}">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Upload Product Image:</label>
                </div>

                <div class="mb-3">
                  <span class="image-profile-photo">
                    <div class="image-photo">
                      <img src="./images/oneplus9-1-500x500.webp" height="64px" width="64px">
                    </div>
                    <div class="delete-box" onclick="deleteImage(this)">
                      <i class="bi bi-trash3" style="color:red"></i>
                    </div>
                    <label for="prod_uplaod">
                      <div class="download-photo">
                        <box-icon name='upload'></box-icon>
                      </div>
                    </label>
                    <input type="file" name="" id="prod_uplaod" style="display: none;">
                  </span>
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
                </div>  
                <button type="button" class="btn btn-primary" onclick="addProduct(${count})">Add New Product</button>

              </div>
            </div>
          </div>`;

  homeAccordion.appendChild(productAccordianDiv);
}


// testimonial sections

function addTestimonial(c)
{
let testimonialAccordionBody = document.getElementById(`testimonial-accordion-body${c}`);
let testimonialContainer = document.createElement('div');
testimonialContainer.innerHTML = `
                    <hr/>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Upload Testimonial Image:</label>
                  </div>

                  <div class="mb-3">
                    <span class="image-profile-photo" for="images_upload">
                      <div class="image-photo">
                        <img src="./images/pexels-italo-melo-881954-2379004.jpg" height="64px" width="64px">
                      </div>
                      <div class="delete-box" onclick="deleteImage(this)">
                        <i class="bi bi-trash3" style="color:red"></i>
                      </div>
                      <label for="test_upload">
                        <div class="download-photo">
                          <box-icon name='upload'></box-icon>
                        </div>
                      </label>
                      <input type="file" name="" id="test_upload" style="display: none;">
                    </span>
                  </div>

                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Testimonial Name:</label>
                    <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="Enter Testimonial Name" onfocusout="changeDVCText(this,'testimonialName')"/>
                  </div>

                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Review:</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                      placeholder="Add Their Review" onfocusout="changeDVCText(this,'testimonialDescription')"></textarea>
                  </div>`;
console.log(testimonialContainer);
console.log(testimonialAccordionBody);
testimonialAccordionBody.appendChild(testimonialContainer);
}


let dvc = {}
  
  var iframe = document.querySelector("iframe");
  var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

  
function changeDVCText(r, f_id){
// let jobtitle = iframeDocument.getElementById("jobtitle");
  // let company = iframeDocument.getElementById("company");
  
  // dvc.name = document.getElementById("name-field").value;
  // dvc.jobtitle = document.getElementById("jobtitle-field").value;
  // dvc.company = document.getElementById("company-field").value;
  
  iframeDocument.getElementById(f_id).innerHTML = r.value;
  
}


function changeDVC_URL(r,f_id)
{
  let element = iframeDocument.getElementById(f_id);
  let inputValue = r.value;

  if(element.hasAttribute("href"))
  {
    element.setAttribute("href",inputValue);
  }
  else if(element.hasAttribute("src"))
  {
    element.setAttribute("src",inputValue);
  }
  
}

function changeDVCImg(r, siblingimg, dvcimg){
  console.log(document.getElementById(siblingimg));
  
  // document.getElementById(siblingimg).src = URL.createObjectURL(r.files[0]);

  document.getElementById(siblingimg).src = URL.createObjectURL(r.files[0]);
  iframeDocument.getElementById(dvcimg).src=URL.createObjectURL(r.files[0]);
}