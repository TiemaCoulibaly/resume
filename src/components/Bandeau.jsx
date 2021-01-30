import React from "react";

function Bandeau(props) {
	return (
		<div id="bandeau" className="container-fluid">
			<p id="quote">{props.quote}</p>
		</div>
	);
}
export default Bandeau;
