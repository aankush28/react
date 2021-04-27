import React from 'react';
function a(){
    alert("we are contact you soon...");
}
function Contact(){
    return(
        <div className="lastand">
  <div class="content-wrap ">
            <div class="py-160">
                <div class="container">
                    <div class="row mb-n8">
                        <div class="col-12 col-lg-10 col-xl-8 show-on-scroll show-on-scroll-ready" data-show-distance="10" data-show-duration="600" >
                            <h1 class="h2 mt-15 pb-4 pb-sm-0 mb-130">For any enquiries, say hello, </h1>
                        </div>
                        <br/> <br/>
                    </div>
                    <div class="row gh-1 gv-2 pb-10">
                        <div class="col-12 col-lg-4">
                            <div class="mb-60 show-on-scroll show-on-scroll-ready" data-show-delay="100" data-show-distance="20" data-show-duration="500" data-show-origin="left" >
                                <p class="lead mb-17 font-weight-medium">Contact info:</p>
                                <ul class="list-group borderless font-size-17">
                                    <li class="list-group-item">Email: <a href="mailto:hello@themebau.com?subject=Test%20Address%20Email">royalgupyayes@gmail.com</a></li>
                                    <li class="list-group-item">Phone: <a href="callto:+1 202-358-0309">+91 1234 5678 90</a></li>
                                </ul>
                            </div>
                            <div class="mb-60 mt-n15 show-on-scroll show-on-scroll-ready" data-show-delay="200" data-show-distance="20" data-show-duration="500" data-show-origin="left" >
                                <p class="lead mb-17 font-weight-medium">Address:</p>
                                <ul class="list-group borderless font-size-17">
                                    <li class="list-group-item">Earth, Asia</li>
                                    <li class="list-group-item">India , new Delhi</li>
                                </ul>
                            </div>
                            <div class="mt-n15 show-on-scroll show-on-scroll-ready" data-show-delay="300" data-show-distance="20" data-show-duration="500" data-show-origin="left" >
                                <p class="lead mb-17 font-weight-medium">Hours of Operation:</p>
                                <ul class="list-group borderless font-size-17">
                                    <li class="list-group-item">Monday - Friday</li>
                                    <li class="list-group-item">10:00 am - 7:30 pm</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-12 col-lg-8 mt-5 mt-lg-0">
                        <form class="row g-3">
                        <h3> For Apoemant...</h3>
  <div class="col-md-4">
    
    <label for="validationServer01" class="form-label"></label>
    <input type="text" class="form-control " placeholder="First name......!" id="validationServer01"  required/>
    <div class="valid-feedback">
      
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationServer02" class="form-label"></label>
    <input type="text" class="form-control " placeholder="Last name......!" id="validationServer02"  required/>
    <div class="valid-feedback">
      
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationServerUsername" class="form-label">Email ID</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend3">@</span>
      <input type="text" class="form-control "placeholder="abc@email.com" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required/>
      <div id="validationServerUsernameFeedback" class="invalid-feedback">
        
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationServer05" class="form-label">Contact Number</label>
    <input type="text" class="form-control " placeholder="+91 123 123 1232" id="validationServer05" aria-describedby="validationServer05Feedback" required/>
    <div id="validationServer05Feedback" class="invalid-feedback">
      
    </div>
  </div>
  <br/>
  <div class="col-md-6">
    <label for="validationServer03" class="form-label">Address</label>
    <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required/>
    <div id="validationServer03Feedback" class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
 
  
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required/>
      <label class="form-check-label" for="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div id="invalidCheck3Feedback" class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  
  <div class="col-12">
    <button class="btn btn-primary" type="submit" onClick={a()}>Submit form</button>
  </div>
</form>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
        </div>
    )
}
export default Contact;
