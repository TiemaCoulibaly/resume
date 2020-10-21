import React from "react";


function Bandeau(props){
  return(
    <div id="bandeau" class="container-fluid">
   
 <p>{props.quote}</p>
    </div>
  )
}
export default Bandeau;