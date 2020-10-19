import React from "react";
import Header from "./Header";
import Profil from "./Profil";
function Section(){
  return (<div>
     <Header/>
    <Profil/>
 
    <section class="formation">Ma formation</section>
    <section class="competence">Mes competence</section>
    <section class="realisations">mes realisations</section>
    <section class="contact">Contacter moi</section>
  </div>)
}
export default Section;