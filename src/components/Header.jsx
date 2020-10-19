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
    <Button><a href="#home"><HomeIcon  style={{color: 'white'}}/></a></Button>
    <Button><a href="#profil"><AccountBoxIcon style={{color: 'white'}}/></a></Button>
    <Button><a href="#formation"><SchoolIcon style={{color: 'white'}}/></a></Button>
 <Button> <a href="#competence"><LaptopIcon style={{color: 'white'}}/></a></Button>
 <Button><a href="#realisation"><VisibilityIcon style={{color: 'white'}}/></a></Button>
 <Button><a href="#contact"><ContactMailIcon style={{color: 'white'}}/></a></Button>
   
</div>
 <article id="title"><h3>Tiema Coulibaly</h3>
 <hr id="line"></hr>
   <h5>Développeur web & web mobile</h5>
 </article>

    </header>
   
  )
}
export default Header;