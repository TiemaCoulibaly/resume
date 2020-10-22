import React from 'react';

function Title(props){
  return (  
    <div  id="formation" class="background-title">
  <h2 class="text-center">{props.name}</h2>
     <hr class="line mx-auto"></hr>
  </div>
  )
}

export default Title;