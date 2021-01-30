import React from "react";

function Title(props) {
	return (
		<div id={props.id} className="background-title">
			<h2 className="text-center">{props.name}</h2>
			<hr className="line mx-auto"></hr>
		</div>
	);
}

export default Title;
