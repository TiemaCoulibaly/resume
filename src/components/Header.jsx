import React from "react";
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SchoolIcon from '@material-ui/icons/School';
import LaptopIcon from '@material-ui/icons/Laptop';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Typical from "react-typical";

function Header(){
  return (
    <header>
    <div class="icon">
    <Button><a href="#home"><HomeIcon  style={{color: 'color: #fad02c;'}}/></a></Button>
    <Button><a href="#profil"><AccountBoxIcon style={{color: 'color: #fad02c;'}}/></a></Button>
    <Button><a href="#formation"><SchoolIcon style={{color: 'color: #fad02c;'}}/></a></Button>
 <Button> <a href="#competence"><LaptopIcon style={{color: 'color: #fad02c;'}}/></a></Button>
 <Button><a href="#realisation"><VisibilityIcon style={{color: 'color: #fad02c;'}}/></a></Button>
 <Button><a href="#contact"><ContactMailIcon style={{color: 'color: #fad02c;'}}/></a></Button> 
</div>

 <article id="title">
 <h1>Tiema Coulibaly</h1>
 <hr class="line mx-auto"></hr>
   <h2><Typical
     loop={Infinity}
     wrapper="b"
     steps={[
       'Développeur Full Stack',
       1500,
       'Passionné d\'informatique',
       1500,
       'Créateur de sites web & web mobile',
       1500

     ]}
   />
   </h2>
 </article>

</header>
   
  )
}
export default Header;

