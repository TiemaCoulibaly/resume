import React from "react";

function Contact(){
  return(
    <section id="contact" class="container-fluid">
    <h1 id="contact-title" class="text-center">Contact</h1>
     <hr class="line mx-auto"></hr>
    <div class="row">
      <div class="col-md-6">
        <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10490.371597625672!2d2.295304744620486!3d48.90409516867056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f0c8459badf%3A0x705da473b0136bcb!2sClichy!5e0!3m2!1sen!2sfr!4v1603135428114!5m2!1sen!2sfr" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
      <div class="col-md-6">
           <div class="card text-center" style={{width:"500px"}} >
                       <img class="card-img-top" src="./images/contact.jpg" alt="Contact"></img>
                            <div class="card-text ">tiema.couly@outlook.com</div>
                            <div class="card-text ">+336 05 91 67 85</div>
                            <div class="card-text "><i class="fab fa-github"><a href="https://github.com/TiemaCoulibaly"></a></i></div>
                            <div class="card-text "><i class="fab fa-linkedin"><a href="https://www.linkedin.com/in/tiema-coulibaly-063b94195/"></a></i></div>
                            <div class="cad-text"><a class="btn btn-outline-warning" href="./images/resume.pdf">Mon C.V</a></div>
                        </div>
      </div>
    </div>

    </section>
  )
}

export default Contact;