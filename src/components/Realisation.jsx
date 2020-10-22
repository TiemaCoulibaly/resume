import React from "react";
import LinkIcon from '@material-ui/icons/Link';
import Espaceur from "./Espaceur";
function Realisation(props){

  return(
<section id="realisation" class="container">
{/* <h2 class="text-center">Réalisation</h2>
 <hr class="line mx-auto"></hr> */}
<Espaceur/>
<Espaceur/>

 
<div class="row">
  <div class="col">
	<article class="card my-2" style={{width: "18rem"}}>
					<div class="realisation-container">
					
					
						<img
							src={props.source}
							alt="peoples"
							class="card-img-top realisation-picture"
						/>
						 <div id="card" class="card-body">
						 <h3 class="card-title">{props.title}</h3>
    <p class="card-text">{props.description}</p>
		<a  href={props.link} ><LinkIcon id="icon-realisation"/></a>
  </div>
					</div>
				</article>

</div>

  <div class="col">

	<article class="card my-2" style={{width: "18rem"}}>
					<div class="realisation-container">
					
					
						<img
							src={props.source1}
							alt="peoples"
							class="card-img-top realisation-picture"
						/>
						 <div id="card" class="card-body">
						 <h3 class="card-title">{props.title1}</h3>
    <p class="card-text">{props.description1}</p>
		<a  href={props.link1} ><LinkIcon id="icon-realisation"/></a>
  </div>
					</div>
				</article>

  </div>

	<div class="col">

	<article class="card my-2" style={{width: "18rem"}}>
					<div class="realisation-container">
					
					
						<img
							src={props.source2}
							alt="peoples"
							class="card-img-top realisation-picture"
						/>
						 <div id="card" class="card-body">
						 <h3 class="card-title">{props.title2}</h3>
    <p class="card-text">{props.description2}</p>
		<a  href={props.link2} ><LinkIcon id="icon-realisation"/></a>
  </div>
					</div>
				</article>

  </div>
  </div>


</section>
  )
}

export default Realisation;