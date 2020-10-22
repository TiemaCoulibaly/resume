import React from "react";

function Profil(){
  return(  
    <div class="background-color">
     <section id="profil" class="container">
     <div class="my-5" class="text-center">
  <h2>A Propos</h2>
     <p><em>Ouvert a toutes nouvelles opportunité</em></p>
     </div>
     <hr class="line mx-auto"></hr>
     <div class="mx-auto">
     <div class="row">
     <div class="col-md-3 offset-md-2">
     <h3>About Me</h3> 
     <p>Mon envie d’apprendre, monter en compétence, mon sens du relationnel, ma force de proposition, je m’adapte facilement dans une équipe, dans le but de consolider également mes acquis et surtout partager mon savoir faire au sein d’une entreprise.</p>
     </div>
     <div class="col-md-auto">
       <img id="profil-img" src="./images/profil.png" alt="Tiema Coulibaly" width="200" height="200" />
     </div>
     <div class="col">
     <h3>Details</h3>
     <p><strong>Nom: </strong>Coulibaly</p>
     <p><strong>Prénom: </strong>Tiema</p>
     <p><strong>Location: </strong>Clichy</p>
    <br></br>
   
   <p class="icon-social">
<a href="https://github.com/TiemaCoulibaly"><i class="fab fa-github"></i></a>
<a href="https://www.linkedin.com/in/tiema-coulibaly-063b94195/"><i class="fab fa-linkedin"></i></a>
</p>



    
    
     </div>
     </div>
     </div>
  </section>
  </div>
  )
}

export default Profil;