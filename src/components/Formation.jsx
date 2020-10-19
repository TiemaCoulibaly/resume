import React from "react";

function Formation(props){
  return (
    <section id="formation" class="container">
      <div class="row">
     <div class="col-md-4">
       <h3>{props.subtitle}</h3>
       <p>{props.dateF}</p>
     </div>
    
     <div class="col-md-8">
<h4>{props.titleF}</h4>
<p>{props.description}</p>
     </div>
     </div>
    </section>

  )
}
export default Formation;