import React from 'react';
import Header from "./Header";
import Profil from "./Profil";
import Formation from "./Formation";
import Title from "./Title";
import Competence from "./Competence";
import Realisation from "./Realisation";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return <div>
   <Header/>
   <Title name="Mon Profil"/>
   <Profil/>
   <Title name="Formation"/>
  <Formation
    name="Formation"
    subtitle="Greta"
    dateF="Oct 2019 - Juillet 2020"
    titleF="Développeur web & web mobile"
    description="Développer le front-end d’une application web
Maquetter une application
Réaliser une interface utilisateur web
Développer une interface utilisateur web dynamique
Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce

Développer le back-end d’une application web
Créer une base de données
Développer les composants d’accès aux données
Élaborer et mettre en œuvre des composants dans une application de gestion de contenu ou e-commerce"
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
/>
<Title name="Compétence"/>
<Competence/>
<Title name="Réalisation"/>
<Realisation/>
<Title name="Contact"/>
<Contact/>
<Footer/>

  </div>
}

export default App;