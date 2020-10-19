import React from "react";

function Contact(){
  return(
    <section id="contact" class="container">
    <div class="row">
      <div class="col-md-6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10490.371597625672!2d2.295304744620486!3d48.90409516867056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f0c8459badf%3A0x705da473b0136bcb!2sClichy!5e0!3m2!1sen!2sfr!4v1603135428114!5m2!1sen!2sfr" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
      <div class="col-md-6">
           <ul class="list-group list-group-flush ">
                       
                            <li class="list-group-item lead">Clichy</li>
                            <li class="list-group-item lead">tiema.couly@outlook.com</li>
                            <li class="list-group-item lead">+336 05 91 67 85</li>
                            <li class="list-group-item lead mx-auto"><a class="btn btn-outline-dark" href="./images/resume.pdf">Mon C.V</a></li>
                        </ul>
      </div>
    </div>

    </section>
  )
}

export default Contact;