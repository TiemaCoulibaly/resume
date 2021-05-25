import React from "react";
import { makeStyles } from "@material-ui/core";

function Bandeau(props) {
	const useStyles = makeStyles((root) => ({
		quote: {
			padding: "40px",
			[root.breakpoints.down("md")]: {
				fontSize: "30px",
				padding: "20px",
			},
		},
	}));
	const classes = useStyles();
	return (
		<div id="bandeau" className="container-fluid">
			<p id="quote" className={classes.quote}>
				{props.quote}
			</p>
		</div>
	);
}
export default Bandeau;
