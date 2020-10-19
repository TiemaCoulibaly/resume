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
    <Button><a href="#profil"><HomeIcon  style={{color: 'white'}}/></a></Button>
    <Button><a href="#formation"><AccountBoxIcon style={{color: 'white'}}/></a></Button>
    <Button><a href="#competence"><SchoolIcon style={{color: 'white'}}/></a></Button>
 <Button> <a href="#realisation"><LaptopIcon style={{color: 'white'}}/></a></Button>
 <Button><a href="#contact"><VisibilityIcon style={{color: 'white'}}/></a></Button>
 <Button><a href="#contact"><ContactMailIcon style={{color: 'white'}}/></a></Button>
   
</div>
 <article id="title"><h1>Tiema Coulibaly</h1>
 <hr class="line"></hr>
   <h3>Développeur web & web mobile</h3>
 </article>

    </header>
   
  )
}
export default Header;