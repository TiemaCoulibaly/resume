import React from "react";
import LinkIcon from '@material-ui/icons/Link';
import Espaceur from "./Espaceur";
function Realisation(props){

  return(
<section id="realisation" class="container">
<Espaceur/>
<Espaceur/>

<div class="d-flex justify-content-center">
<div class="row">
  <div class="col col-sm-6">
	<article class="card mx-5 my-3" style={{width: "18rem"}}>
					<div class="realisation-container">
					
					
						<img
							src={props.source}
							alt="peoples"
							class="card-img-top realisation-picture"
						/>
						 <div id="card" class="card-body">
						 <h3 class="card-title">{props.title}</h3>
    <p class="card-text text-center">
		<i class={props.icon}></i>
		<i class={props.iconF}></i>
		<i class={props.iconS}></i>
	
		</p>
		<a  href={props.link} ><LinkIcon id="icon-realisation"/></a>
  </div>
					</div>
				</article>

</div>

  <div class="col col-sm-6">

	<article class="card mx-5 my-3" style={{width: "18rem"}}>
					<div class="realisation-container">
					
					
						<img
							src={props.source1}
							alt="peoples"
							class="card-img-top realisation-picture"
						/>
						 <div id="card" class="card-body">
						 <h3 class="card-title">{props.title1}</h3>
    <p class="card-text">
		<i class={props.icon1}></i>
		<i class={props.icon1F}></i>
		</p>
		<a  href={props.link1} ><LinkIcon id="icon-realisation"/></a>
  </div>
					</div>
				</article>

  </div>
  </div>
	</div>


</section>
  )
}

export default Realisation;