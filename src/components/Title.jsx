import React from "react";
import { makeStyles } from "@material-ui/core";

function Title(props) {
	const useStyles = makeStyles((root) => ({
		title: {
			[root.breakpoints.down("md")]: {
				fontSize: "70px",
			},
		},
	}));
	const classes = useStyles();
	return (
		<div id={props.id} className="text-center">
			<h2 className={classes.title}>{props.name}</h2>
			<hr className="line mx-auto"></hr>
		</div>
	);
}

export default Title;
