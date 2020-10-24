import React from 'react';
import Header from "./Header";
import Profil from "./Profil";
import Formation from "./Formation";
import Title from "./Title";
import Competence from "./Competence";
import Realisation from "./Realisation";
import Contact from "./Contact";
import Footer from "./Footer";
import Divider from "./Divider";
import Bandeau from "./Bandeau";
import Espaceur from "./Espaceur";
function App() {
  return <div>
   <Header/>
   <Divider/>
  <Espaceur/>
   <Profil/>
    <Espaceur/>
    <Bandeau/>
      <Divider/>
     <Espaceur/>
     <Title 
     id="formation"
     name="Formation"/>
      <Espaceur/>
  <Formation
  
    subtitle="Greta"
    dateF="Oct 2019 - Juillet 2020"
    titleF="Développeur web & web mobile Bac+2"
    description="Développer le front-end d’une application web
Maquetter une application
Réaliser une interface utilisateur web
Développer une interface utilisateur web dynamique
Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce

Développer le back-end d’une application web
Créer une base de données
Développer les composants d’accès aux données
Élaborer et mettre en œuvre des composants dans une application de gestion de contenu ou e-commerce"
link="http://www.greta-92.fr/1-formations-en-web-communication-et-chaine-graphique/35790-titre-professionnel-developpeur-web-et-web-mobile-formation-conventionnee-11"
  />
  <Formation
  subtitle="Greta"
  dateF="Dec 2019 - Jan 2020"
  titleF="Photoshop/Illustrator"
  description="Paramétrer Photoshop et explorer Bridge
Sélectionner et détourer les parties d’une image
Opérer des retouches avancées avec les outils adaptés
Corriger finement la chromie d’une image
Gérer des documents contenant de nombreux calques
Améliorer sa productivité"
link="http://www.greta-92.fr/1-formations-en-web-communication-et-chaine-graphique/35790-titre-professionnel-developpeur-web-et-web-mobile-formation-conventionnee-11"

  />
<Formation
  subtitle="Lonsdale Institute"
  dateF="2015 - 2016"
  titleF="Diploma of Business, Commerce International (Australie)"
  description="Manage recruitment selection and induction processesElective
Manage programmes that promote personal effectivenessElective
Manage personal work priorities and professional developmentElective
Undertake project workElective
Manage riskElective
Manage people performanceElective
Manage quality customer serviceElective
Identify and evaluate marketing opportunitiesElective"
link="https://www.lonsdaleinstitute.edu.au/courses/diploma-business/"
/>
<Formation
  subtitle="Lonsdale Institute"
  dateF="2014 - 2015"
  titleF="Certificat IV in Business, Commerce International (Australie)"
  description="Implement, monitor WHS policies, procedures and programs to meet legislative requirements
Promote innovation in a team environment
Develop teams and individuals
Organise meetings
Promote products and services
Analyse and present research information
Make a presentation
Address customer needs
Organise business travel
Undertake marketing activities"
link="https://www.lonsdaleinstitute.edu.au/courses/certificate-iv-business/"
/>
 
 <Espaceur/>
<Competence/>
 <Espaceur/>
  <Bandeau  quote="«  Si vous ne pouvez pas expliquez le concept de manière simple, c’est que vous ne l’avez pas bien compris » (Richard Feynam)"/>
 <Divider/>
  <Espaceur/>
   <Title 
   name="Réalisation"
     id="realisation"
   />
<Realisation
  title="Espace Gambon"
  icon="fab fa-wordpress icon-realisation mx-2"
  iconF="fab fa-php icon-realisation mx-2"
  source="./images/espace.png"
  link="https://espace-gambon.fr/"

    title1="ToDo List"
     icon1="fab fa-react icon-realisation mx-2"
  description1="React js"
  source1="./images/todo.png"
  link1="https://cryptic-cliffs-02336.herokuapp.com/"
/>
<Espaceur/>

<Realisation 
      title="Social CatchUp"
   icon="fab fa-html5 icon-realisation mx-2"
   iconF="fab fa-css3-alt icon-realisation mx-2"
   iconS="fab fa-js-square icon-realisation mx-2"
  source="./images/social1.png"
  link="http://makeitdigital.ml/"

   title1="Keeper App"
  icon1="fab fa-react icon-realisation mx-2"
  source1="./images/keeper-app.png"
  link1="https://keepit-f5164.web.app/"
/>




 <Espaceur/>
  <Divider/>

<Contact/>
<Footer/>

  </div>
}

export default App;