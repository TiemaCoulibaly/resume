import React from "react";

function Formation(props){
  return (
    <section class="container">

      <article class="row">
     <div class="col-md-3 offset-md-2">
    
       <h3>{props.subtitle}</h3>
       <p id="dateF">{props.dateF}</p>
       <button class="btn btn-md btn-outline-warning">Read more</button>
     </div>
    
     <div class="col-md-7">
<h4>{props.titleF}</h4>
<p>{props.description}</p>
     </div>
     </article>
    </section>

  )
}


export default Formation;

