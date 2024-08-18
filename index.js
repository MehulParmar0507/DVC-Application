
// generate QR Code
function generateQRCode() {
  var text = document.getElementById("url").value;
  var qrcodeContainer = document.getElementById("qrcode");
  qrcodeContainer.innerHTML = ""; // Clear previous QR code
  new QRCode(qrcodeContainer, {text:text, width:200, height:200});


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
                      <label for="product_upload0">
                        <div class="download-photo">
                          <box-icon name='upload'></box-icon>
                        </div>
                      </label>
                      <input type="file" name="" id="product_uplaod0" style="display: none;">
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


// function addTeamMember(c)
// {
// let teamAccordianBody = document.getElementById(`team-accordian-body${c}`);
// let teamContainer = document.createElement('div');
// teamContainer.innerHTML = `<hr/><div class="mb-3">
//                     <label for="exampleFormControlInput1" class="form-label">Title</label>
//                     <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="Title" />
//                   </div>
//                   <div class="mb-3">
//                     <label for="exampleFormControlTextarea1" class="form-label">Description</label>
//                     <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
//                       placeholder="Description"></textarea>
//                   </div>
  
//                   <p>Profile (250x250px, 1:1 Ratio)</p>
//                   <span class="image-profile-photo" for="link_upload">
//                     <div class="image-photo">
//                         <img src="./images/pexels-italo-melo-881954-2379004.jpg" height="64px" width="64px">
//                       </div>
//                       <div class="delete-box" onclick="deleteImage(this)">
//                         <i class="bi bi-trash3" style="color:red"></i>
//                       </div>
//                     <label for="team_upload">
//                     <div class="download-photo">
//                       <box-icon name='upload'></box-icon>
//                     </div>
//                     </label>
//                     <input type="file" id="team_upload" style="display: none;">
//                   </span>
//                      <br>
//                     <div class="row  mt-10 last-container">
//                       <div class="col-sm-12 col-md-12 col-lg-6">
//                         <label for="" class="form-label">Name</label>
//                         <input type="text" class="form-control" placeholder="Name" aria-label="First name">
//                       </div>
//                       <div class="col-sm-12 col-md-12 col-lg-6">
//                         <label for="" class="form-label">Designation</label>
//                         <input type="text" class="form-control" placeholder="Designation" aria-label="Last name">
//                       </div>
//                     </div>
//                     <div class="mb-3">
//                       <label for="exampleFormControlTextarea1" class="form-label">Description</label>
//                       <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
//                         placeholder="Description"></textarea>
//                     </div>`;
//  console.log(teamAccordianBody);
//  console.log(teamContainer);
//  teamAccordianBody.appendChild(teamContainer);
// }

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
let testimonialAccordionDiv = document.createElement("div");
testimonialAccordionDiv.innerHTML = `<div class="accordion-item">
            <h2 class="accordion-header" id="ta">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#tac" aria-expanded="false" aria-controls="tac">
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
            <div id="tac" class="accordion-collapse collapse" aria-labelledby="ta"
              data-bs-parent="#accordionExample">
              <div class="accordion-body py-3">
                <div id="testimonial-accordion-body">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Upload Testimonial Image:</label>
                  </div>

                  <div class="mb-3">
                    <span class="image-profile-photo" for="images_upload">
                      <div class="image-photo">
                        <img src="./images/pexels-italo-melo-881954-2379004.jpg" height="64px" width="64px" id="test_preview">
                      </div>
                      <label for="mytest_upload0">
                        <div class="download-photo">
                          <box-icon name='upload'></box-icon>
                        </div>
                      </label>
                      <input type="file" name="" id="mytest_upload0" style="display: none;" onchange="changeDVCImg(this, 'test_preview', '')">
                    </span>
                  </div>

                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Testimonial Name:</label>
                    <input type="text" class="form-control" id="tname" placeholder="Enter Testimonial Name" />
                  </div>

                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Review:</label>
                    <textarea class="form-control" id="treview" rows="3"
                      placeholder="Add Their Review"></textarea>
                      </div>
              <button type="button" class="btn btn-primary" onclick="addTestimonialAtDVC(this, document.getElementById('tname').value, document.getElementById('treview').value, 'mytest_upload0')">Add New Testimonial</button>
              </div>
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
                <span class="d-flex align-items-center"> 
                    <i class="bx bx-video me-1"></i>Bussiness Hours
                </span>
                <div class="form-check form-switch mb-2">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                    <label class="form-check-label" for="flexSwitchCheckChecked"></label>
                </div>
            </div>
        </button>
    </h2>
    <div id="ba${count}" class="accordion-collapse collapse" aria-labelledby="ba${count}" data-bs-parent="#accordionExample">
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
                <label class="form-check-label" for="flexSwitchCheckChecked"></label>
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

            <!-- Monday Section -->
            <div class="my-4">
                <div class="mb-2">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label class="form-check-label" for="defaultCheck1">Monday</label>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <input type="text" class="form-control" id="exampleFormControlInput3" value="Monday" />
                    </div>
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
                        <button class="btn btn-outline-primary bussinessHourButton" onclick="SetBussinessHours(this,'Monday','MondayStartTime','MondayEndTime')">
                            <i class="bi bi-plus-lg"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Tuesday Section -->
            <div class="my-4">
                <div class="mb-2">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label class="form-check-label" for="defaultCheck1">Tuesday</label>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <input type="text" class="form-control" id="exampleFormControlInput3" value="Tuesday" />
                    </div>
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
                        <button class="btn btn-outline-primary bussinessHourButton" onclick="SetBussinessHours(this,'Tuesday','TuesdayStartTime','TuesdayEndTime')">
                            <i class="bi bi-plus-lg"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Wednesday Section -->
            <div class="my-4">
                <div class="mb-2">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label class="form-check-label" for="defaultCheck1">Wednesday</label>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <input type="text" class="form-control" id="exampleFormControlInput3" value="Wednesday" />
                    </div>
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
                        <button class="btn btn-outline-primary bussinessHourButton" onclick="SetBussinessHours(this,'Wednesday','WednesdayStartTime','WednesdayEndTime')">
                            <i class="bi bi-plus-lg"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Thursday Section -->
            <div class="my-4">
                <div class="mb-2">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label class="form-check-label" for="defaultCheck1">Thursday</label>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <input type="text" class="form-control" id="exampleFormControlInput3" value="Thursday" />
                    </div>
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
                        <button class="btn btn-outline-primary bussinessHourButton" onclick="SetBussinessHours(this,'Thursday','ThursdayStartTime','ThursdayEndTime')">
                            <i class="bi bi-plus-lg"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Friday Section -->
            <div class="my-4">
                <div class="mb-2">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label class="form-check-label" for="defaultCheck1">Friday</label>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <input type="text" class="form-control" id="exampleFormControlInput3" value="Friday" />
                    </div>
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
                        <button class="btn btn-outline-primary bussinessHourButton" onclick="SetBussinessHours(this,'Friday','FridayStartTime','FridayEndTime')">
                            <i class="bi bi-plus-lg"></i>
                        </button>
                    </div>
                </div>
              </div>
              
              <div class="my-4">
                <div class="mb-2">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label class="form-check-label" for="defaultCheck1">Saturday</label>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <input type="text" class="form-control" id="exampleFormControlInput3" value="Saturday" />
                    </div>
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
                        <button class="btn btn-outline-primary bussinessHourButton" onclick="SetBussinessHours(this,'Saturday','SaturdayStartTime','SaturdayEndTime')">
                            <i class="bi bi-plus-lg"></i>
                        </button>
                    </div>
                </div>
              </div>
              
              <div class="my-4">
                <div class="mb-2">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label class="form-check-label" for="defaultCheck1">Sunday</label>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <input type="text" class="form-control" id="exampleFormControlInput3" value="Sunday" />
                    </div>
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
                        <button class="btn btn-outline-primary bussinessHourButton" onclick="SetBussinessHours(this,'Sunday','SundayStartTime','SundayEndTime')">
                            <i class="bi bi-plus-lg"></i>
                        </button>
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
                <div id="team-accordian-body">
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
                        <img src="./images/pexels-italo-melo-881954-2379004.jpg" height="64px" width="64px" id="team_preview">
                      </div>
                  <label for="team_upload0">
                  <div class="download-photo">
                    <box-icon name='upload'></box-icon>
                  </div>
                  </label>
                  <input type="file" id="team_upload0" style="display: none;" onchange="changeDVCImg(this, 'team_preview','')">
                </span>
                   <br>
                  <div class="row  mt-10 last-container">
                    <div class="col-sm-12 col-md-12 col-lg-6">
                      <label for="" class="form-label">Name</label>
                      <input type="text" class="form-control" placeholder="Name" aria-label="First name" id="team_name">
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-6">
                      <label for="" class="form-label">Designation</label>
                      <input type="text" class="form-control" placeholder="Designation" aria-label="Last name" id="team_design">
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                      placeholder="Description"></textarea>
                  </div>
                  <button class="btn btn-primary" onclick="addTeamAtDVC(document.getElementById('team_name').value, document.getElementById('team_design').value)">Add Team Member</button>
                </div>
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
                <div id="Product-accordian-body">
                
                <div class="profile-photo">
                  <span>Heading, Description</span>
                  <div class="form-check form-switch mb-2">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="">
                    <label class="form-check-label" for="flexSwitchCheckChecked"></label>
                  </div>
               </div>
                <div class="mb-3">
                  <label for="prod_heading" class="form-label">Heading</label>
                  <input type="text" class="form-control" id="prod_heading" placeholder="About me" onfocusout="changeDVCText(this,'Product_Heading')"/>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                    placeholder="Description" onfocusout="changeDVCText(this,'productDescription')"></textarea>
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Upload Product Image:</label>
                </div>

                <div class="mb-3">
                  <span class="image-profile-photo">
                    <div class="image-photo">
                      <img src="./images/oneplus9-1-500x500.webp" height="64px" width="64px" id="prod_preview">
                    </div>
                    <div class="delete-box" onclick="deleteImage(this)">
                      <i class="bi bi-trash3" style="color:red"></i>
                    </div>
                    <label for="product_upload0">
                      <div class="download-photo">
                        <box-icon name='upload'></box-icon>
                      </div>
                    </label>
                    <input type="file" name="" id="product_upload0" style="display: none;" onchange="changeDVCImg(this, 'prod_preview', '')">
                  </span>
                </div>

                <div class="mb-3 col-lg-12 col-md-12 col-sm-12">
                  <label for="prod_name0" class="form-label">Product Name:</label>
                  <input type="text" class="form-control" id="prod_name0" placeholder="Enter Product Name" />
                </div>

                <div class="profile-photo">
                  <span>Ratings</span>
                  <div class="form-check form-switch mb-2">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="">
                    <label class="form-check-label" for="flexSwitchCheckChecked"></label>
                  </div>
               </div>

                <div class="row  mt-10 last-container">
                      <div class="col-sm-12 col-md-12 col-lg-6">
                        <label for="prod_rating" class="form-label">Ratings</label>
                        <input type="text" class="form-control" placeholder="Enter Number From 1 to 5" aria-label="Product Rating" id="prod_rating">
                      </div>
                      <div class="col-sm-12 col-md-12 col-lg-6">
                        <label for="" class="form-label">Product Price</label>
                        <input type="text" class="form-control" placeholder="Enter Product Price" aria-label="Product Price" id="prod_price0">
                      </div>
                    </div>
                    <br>

                    <div class="row  mt-10 last-container">
                      <div class="col-sm-12 col-md-12 col-lg-6">
                        <label for="" class="form-label">Button Label</label>
                        <input type="text" class="form-control" placeholder="" id="prod_btn0" aria-label="button label" value="Buy Online">
                      </div>
                      <div class="col-sm-12 col-md-12 col-lg-6">
                        <label for="" class="form-label">Product Link</label>
                        <input type="text" class="form-control" placeholder="Enter Product link" aria-label="Product link" id="prod_link">
                      </div>
                    </div>
                
                <button type="button" class="btn btn-primary mt-3" onclick="addProductAtDVC()">Add New Product</button>

              </div>
            </div>
          </div>`;

  homeAccordion.appendChild(productAccordianDiv);
}


// testimonial sections

function addTestimonial()
{
let testimonialAccordionBody = document.getElementById(`testimonial-accordion-body`);
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

function deleteDVCImg(img){
  iframeDocument.getElementById(img).remove();
}

function changeDVCImg(r, siblingimg, dvcimg){
  document.getElementById(siblingimg).src = URL.createObjectURL(r.files[0]);
  iframeDocument.getElementById(dvcimg).src=URL.createObjectURL(r.files[0]);
}

imgId=0;
function addMultipleImg(r, siblingDiv, dvcimg){
  imgId++;
  let span = document.createElement("span");
  span.style.float='left';
  span.className="mx-2";

  // span.className = "image-profile-photo";
  span.innerHTML = ` <span class="image-photo">
                <img src="${URL.createObjectURL(r.files[0])}" height="64px" width="64px" id="images_preview">
              </span>
              <span class="delete-box" onclick="(deleteImage(this), deleteDVCImg('${"delImg"+imgId}'))">
                <i class="bi bi-trash3" style="color:red"></i>
              </span>`;

  let div = document.createElement("div");
  // span.style.float='left';
  div.className="col";
  div.id = 'delImg'+imgId;

  document.getElementById("images_grp").appendChild(span);

  // span.className = "image-profile-photo";
  div.innerHTML = ` <a href="#" data-bs-toggle="modal" data-bs-target="#imageModal" data-bs-image="img/image1.png">
                        <img src="${URL.createObjectURL(r.files[0])}" class="img-fluid" alt="...">
                    </a>`;

  iframeDocument.getElementById("gallery_images").appendChild(div);
}

i=0;
function addTestimonialAtDVC(b, tname, review){
  i++;
  let div = document.createElement("div");
  div.id="tstdvc"+i;

  // let btn = document.createElement("button");
  // btn.setAttribute("data-bs-target","#carouselExampleCaptions")
  // btn.setAttribute("data-bs-slide-to",`${i-1}`);
  // btn.setAttribute("aria-label",`Slide ${i}`);
  // btn.setAttribute("type","btn");

  let imgURL = URL.createObjectURL(document.getElementById("mytest_upload"+(i-1)).files[0]);

  div.className = "carousel-item";
  div.innerHTML = `<img src="${imgURL}" class="d-block w-100" alt="...">
                    <div class="m-4">
                        <h5 class="test_name">${tname}</h5>
                        <p  class="test_desc">${review}</p>
                    </div>`;
                    
  // iframeDocument.getElementById("test_btn").appendChild(btn);
  iframeDocument.getElementById("new_testimonials").appendChild(div);
  
  let testimonialAccordionBody = document.getElementById(`testimonial-accordion-body`);
  let testimonialContainer = document.createElement('div');
  testimonialContainer.id="tstmain"+i;
  testimonialContainer.innerHTML = `
                    
                    <div class="delete-box" onclick="removeTestimonial('tstmain${i}', 'tstdvc${i}')">
                      <i class="bi bi-trash3" style="color:red"></i>
                    </div>
                    <hr/>
                  <div class="mb-3">
                    <span class="image-profile-photo" for="images_upload">
                      <div class="image-photo">
                        <img src="./images/pexels-italo-melo-881954-2379004.jpg" height="64px" width="64px" id="test_preview${i}">
                      </div>
                      <label for="mytest_upload${i}">
                        <div class="download-photo">
                          <box-icon name='upload'></box-icon>
                        </div>
                      </label>
                      <input type="file" name="" id="mytest_upload${i}" style="display: none;" onchange="changeDVCImg(this, 'test_preview${i}', '')">
                    </span>
                  </div>

                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Testimonial Name:</label>
                    <input type="text" class="form-control" id="tname${i}" placeholder="Enter Testimonial Name" />
                  </div>

                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Review:</label>
                    <textarea class="form-control" id="treview${i}" rows="3"
                      placeholder="Add Their Review"></textarea>
                </div>

              </div>
              <button type="button" class="btn btn-primary" onclick="addTestimonialAtDVC(this, document.getElementById('tname${i}').value, document.getElementById('treview${i}').value)">Add New Testimonial</button>
              </div>`;
console.log(testimonialContainer);
console.log(testimonialAccordionBody);
testimonialAccordionBody.appendChild(testimonialContainer);

// b.remove();
alert("New Testimonial added");
}

function removeTestimonial(tstmain, tstdvc){
  document.getElementById(tstmain).remove();
  let item = iframeDocument.getElementById(tstdvc);

   // If the item being deleted is active, determine the next item to activate
   if (item.classList.contains('active')) {
    if (item.nextElementSibling) {
        item.nextElementSibling.classList.add('active');
    } else if (item.previousElementSibling) {
        item.previousElementSibling.classList.add('active');
    }
}

// Remove the item from the DOM
item.remove();
}


j=0;
function addProductAtDVC(){
  j++;
  let div = document.createElement("div");
  div.id="proddvc"+j;

  // let btn = document.createElement("button");
  // btn.setAttribute("data-bs-target","#carouselExampleCaptions")
  // btn.setAttribute("data-bs-slide-to",`${j-1}`);
  // btn.setAttribute("aria-label",`Slide ${j}`);
  // btn.setAttribute("type","btn");

  let imgURL = URL.createObjectURL(document.getElementById("product_upload"+(j-1)).files[0]);

  let prod_name = document.getElementById("prod_name"+(j-1)).value;
  let prod_price = document.getElementById("prod_price"+(j-1)).value;
  let prod_btn = document.getElementById("prod_btn"+(j-1)).value;

  div.className = "carousel-item";
  div.innerHTML = `
                    <img src="${imgURL}" class="d-block w-100" alt="...">
                    <div class="m-4">
                        <h5  class="product_name" id="ProductName">${prod_name}</h5>
                    </div>
                    <div class="rating m-5">
                      <span onclick="setRating(1)"><i class="bi bi-star"></i></span>
                      <span onclick="setRating(2)"><i class="bi bi-star"></i></span>
                      <span onclick="setRating(3)"><i class="bi bi-star"></i></span>
                      <span onclick="setRating(4)"><i class="bi bi-star"></i></span>
                      <span onclick="setRating(5)"><i class="bi bi-star"></i></span>
                  </div>
                    <div class="product-price m-4">
                      <h2 id="ProductPrice">$ ${prod_price}</h2>
                    </div>
                    <div class="product-btn m-4 ml-0">
                      <button class="btn btn-success">${prod_btn}</button>
                    </div>
                    `;
                     console.log(div);
  // iframeDocument.getElementById("prod_btn").appendChild(btn);
  iframeDocument.getElementById("NewProducts").appendChild(div);


let ProductAccordianBody = document.getElementById(`Product-accordian-body`);
let productContainer = document.createElement('div');
productContainer.id="prodmain"+j;
productContainer.innerHTML = `
                    <div class="delete-box" onclick="removeProduct('prodmain${j}', 'proddvc${j}')">
                      <i class="bi bi-trash3" style="color:red"></i>
                    </div>
                    <hr/>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Upload Product Image:</label>
                  </div>

                  <div class="mb-3">
                  <span class="image-profile-photo">
                    <div class="image-photo">
                      <img src="./images/oneplus9-1-500x500.webp" height="64px" width="64px" id="prod_preview${j}">
                    </div>
                    <div class="delete-box" onclick="deleteImage(this)">
                      <i class="bi bi-trash3" style="color:red"></i>
                    </div>
                    <label for="product_upload${j}">
                      <div class="download-photo">
                        <box-icon name='upload'></box-icon>
                      </div>
                    </label>
                    <input type="file" name="" id="product_upload${j}" style="display: none;" onchange="changeDVCImg(this, 'prod_preview${j}', '')">
                  </span>
                </div>

                  <div class="mb-3 col-lg-12 col-md-12 col-sm-12">
                  <label for="prod_name" class="form-label">Product Name:</label>
                  <input type="text" class="form-control" id="prod_name${j}" placeholder="Enter Product Name" />
                </div>

                <div class="profile-photo">
                  <span>Ratings</span>
                  <div class="form-check form-switch mb-2">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="">
                    <label class="form-check-label" for="flexSwitchCheckChecked"></label>
                  </div>
               </div>

                <div class="row  mt-10 last-container">
                      <div class="col-sm-12 col-md-12 col-lg-6">
                        <label for="prod_rating" class="form-label">Ratings</label>
                        <input type="text" class="form-control" placeholder="Enter Number From 1 to 5" aria-label="Product Rating" id="prod_rating${j}">
                      </div>
                      <div class="col-sm-12 col-md-12 col-lg-6">
                        <label for="" class="form-label">Product Price</label>
                        <input type="text" class="form-control" placeholder="Enter Product Price" aria-label="Product Price" id="prod_price${j}">
                      </div>
                    </div>
                    <br>

                    <div class="row  mt-10 last-container">
                      <div class="col-sm-12 col-md-12 col-lg-6">
                        <label for="" class="form-label">Button Label</label>
                        <input type="text" class="form-control" placeholder="" id="prod_btn${j}" aria-label="button label" value="Buy Online">
                      </div>
                      <div class="col-sm-12 col-md-12 col-lg-6">
                        <label for="" class="form-label">Product Link</label>
                        <input type="text" class="form-control" placeholder="Enter Product link" aria-label="Product link" id="prod_link${j}">
                      </div>
                    </div>
                
                <button type="button" class="btn btn-primary mt-3" onclick="addProductAtDVC()">Add New Product</button>
`;

console.log(ProductAccordianBody);
console.log(productContainer);
ProductAccordianBody.appendChild(productContainer);

alert("New Product added!");
}

function removeProduct(pmain, pdvc){
  document.getElementById(pmain).remove();
  let item = iframeDocument.getElementById(pdvc);

  console.log(document.getElementById(pmain));
  console.log(iframeDocument.getElementById(pdvc));


    // If the item being deleted is active, determine the next item to activate
    if (item.classList.contains('active')) {
        if (item.nextElementSibling) {
            item.nextElementSibling.classList.add('active');
        } else if (item.previousElementSibling) {
            item.previousElementSibling.classList.add('active');
        }
    }

    // Remove the item from the DOM
    item.remove();

}

// let username = document.getElementById('Profile_Username');
// username.innerHTML = localStorage.getItem("Email");


// console.log(localStorage);

k=0;
function addTeamAtDVC(tname, tdesign){
  k++;
  let div = document.createElement("div");
  div.id="teamdvc"+k;

  let imgURL = URL.createObjectURL(document.getElementById("team_upload"+(k-1)).files[0]);


  div.className = "team";
  div.innerHTML = `
              
              <div class="img">
                <img src="${imgURL}" alt="Link Icon">
              </div>
              <div class="link-info">
                <h3 style="font-size: 20px;">${tname}</h3>
                <a style="color: rgb(108, 108, 108) ;">${tdesign}</a>
              </div>
                    `;
  iframeDocument.getElementById("newTeam").appendChild(div);

  let teamAccordianBody = document.getElementById(`team-accordian-body`);
  let teamContainer = document.createElement('div');
  teamContainer.id="teammain"+k;
  teamContainer.innerHTML = `<div class="delete-box" onclick="removeTeam('teammain${k}', 'teamdvc${k}')">
                        <i class="bi bi-trash3" style="color:red"></i>
                      </div>
                      <hr/>

                <p>Profile (250x250px, 1:1 Ratio)</p>
                <span class="image-profile-photo">
                  <div class="image-photo">
                        <img src="./images/pexels-italo-melo-881954-2379004.jpg" height="64px" width="64px" id="team_preview${k}">
                      </div>
                  <label for="team_upload${k}">
                  <div class="download-photo">
                    <box-icon name='upload'></box-icon>
                  </div>
                  </label>
                  <input type="file" id="team_upload${k}" style="display: none;" onchange="changeDVCImg(this, 'team_preview${k}','')">
                </span>
                   <br>
                  <div class="row  mt-10 last-container">
                    <div class="col-sm-12 col-md-12 col-lg-6">
                      <label for="" class="form-label">Name</label>
                      <input type="text" class="form-control" placeholder="Name" aria-label="First name" id="team_name${k}">
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-6">
                      <label for="" class="form-label">Designation</label>
                      <input type="text" class="form-control" placeholder="Designation" aria-label="Last name" id="team_design${k}">
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                    <textarea class="form-control" id="desc${k}" rows="3"
                      placeholder="Description"></textarea>
                  </div>
                  <button class="btn btn-primary" onclick="addTeamAtDVC(document.getElementById('team_name${k}').value, document.getElementById('team_design${k}').value)">Add Team Member</button>
                </div>
 `;
  console.log(teamAccordianBody);
  console.log(teamContainer);
  teamAccordianBody.appendChild(teamContainer);
}

function removeTeam(teammain, teamdvc){
  document.getElementById(teammain).remove();
  iframeDocument.getElementById(teamdvc).remove();
}

function SetBussinessHours(buttonELement,d_id,st_id,et_id)
{
   console.log("Button is Clicked");

   const parentDiv = buttonELement.closest('.my-4');
        const checkbox = parentDiv.querySelector('input[type="checkbox"]').checked;
        const day = parentDiv.querySelector('input[type="text"]').value;
        const startTime = parentDiv.querySelectorAll('input[type="time"]')[0].value;
        const endTime = parentDiv.querySelectorAll('input[type="time"]')[1].value;

        if (checkbox && day && startTime && endTime) {
        
            iframeDocument.getElementById(d_id).innerHTML = day;
            iframeDocument.getElementById(st_id).innerHTML = startTime;
            iframeDocument.getElementById(et_id).innerHTML = endTime;

        }
}


// user profile functionalities
let userProfile = document.getElementById('Profile_Username');
userProfile.innerHTML = localStorage.getItem("Email");

