import React from "react";
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SchoolIcon from '@material-ui/icons/School';
import LaptopIcon from '@material-ui/icons/Laptop';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ContactMailIcon from '@material-ui/icons/ContactMail';
function Header(){
  return (
    <header>
    <div id="icon">
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
   <h2>Développeur web & web mobile</h2>
 </article>

</header>
   
  )
}
export default Header;

