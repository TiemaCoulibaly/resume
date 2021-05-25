import React from "react";
import LinkIcon from "@material-ui/icons/Link";

import { makeStyles } from "@material-ui/core";
function Realisation(props) {
	const useStyles = makeStyles((root) => ({
		container: {
			padding: "70px",
		},
		card: {
			width: "18rem",
			[root.breakpoints.down("md")]: {
				width: "53rem",
			},
		},
		realisationContainer: {
			border: "0.1rem solid #fad02c",
			borderRadius: "1rem",
			overflow: "hidden",
		},
		icon: {
			backgroundColor: "#fad02c",
			color: "black",
			width: "30px",
			height: "30px",
			borderRadius: "0.3rem",
			[root.breakpoints.down("md")]: {
				width: "60px",
				height: "60px",
			},
		},
		picture: {
			display: "block",
			width: "100%",
		},

		cardBody: {
			textAlign: "center",
			[root.breakpoints.down("md")]: {
				fontSize: "100px",
			},
		},
		cardTitle: {
			[root.breakpoints.down("md")]: {
				fontSize: "60px",
			},
		},
		techno: {
			[root.breakpoints.down("md")]: {
				fontSize: "80px",
			},
		},
	}));
	const classes = useStyles();
	return (
		<section className={classes.container}>
			<article className={classes.card}>
				<div className={classes.realisationContainer}>
					<a
						href={props.link}
						target="_blank"
						rel=" noopener noreferrer">
						<img
							src={props.source}
							alt="peoples"
							className={classes.picture}
						/>
						<LinkIcon
							className={classes.icon}
							variant="contained"
						/>
					</a>

					<div id="card" className={classes.cardBody}>
						<h3 className={classes.cardTitle}>{props.title}</h3>
						<p className={classes.techno}>
							<i
								className={`${classes.techno} ${props.icon}`}></i>
							<i
								className={`${classes.techno} ${props.iconF}`}></i>
							<i
								className={`${classes.techno} ${props.iconS}`}></i>
						</p>
					</div>
				</div>
			</article>
		</section>
	);
}

export default Realisation;
