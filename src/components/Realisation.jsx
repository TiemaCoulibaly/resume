import React from "react";

import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core";
function Realisation({
	title,
	icon,
	iconF,
	iconS,
	iconL,
	source,
	link,
	github,
}) {
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
		},

		icon: {
			backgroundImage: "linear-gradient(to left, 	#ffe787, #fad02c)",

			color: "black",
			padding: "10px",
			margin: "10px",
			borderRadius: "0.3rem",
			boxShadow: "2px 2px 2px black",
			[root.breakpoints.down("md")]: {
				padding: "20px",
				fontSize: "40px",
				margin: "10px",
				borderRadius: "0.5rem",
				boxShadow: "4px 4px 4px black",
			},
		},

		github: {
			backgroundImage: "linear-gradient(to right, #c2e7d9, #209cee)",
			color: "black",
			padding: "10px",
			margin: "10px",
			borderRadius: "0.3rem",
			boxShadow: "2px 2px 2px black",

			[root.breakpoints.down("md")]: {
				padding: "20px",
				fontSize: "40px",
				margin: "10px",
				borderRadius: "0.5rem",
				boxShadow: "4px 4px 4px black",
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
					<a href={link} target="_blank" rel=" noopener noreferrer">
						<img
							src={source}
							alt="peoples"
							className={classes.picture}
						/>
					</a>
					<Box display="flex" justifyContent="space-around">
						{link ? (
							<Link
								href={link}
								target="_blank"
								rel=" noopener noreferrer"
								underline="none"
								className={classes.icon}
								variant="contained">
								Project
							</Link>
						) : null}

						{github ? (
							<Link
								href={github}
								target="_blank"
								rel=" noopener noreferrer"
								underline="none"
								className={classes.github}>
								Github
							</Link>
						) : null}
					</Box>

					<div id="card" className={classes.cardBody}>
						<h3 className={classes.cardTitle}>{title}</h3>
						<p className={classes.techno}>
							<i className={`${classes.techno} ${icon}`}></i>
							<i className={`${classes.techno} ${iconF}`}></i>
							<i className={`${classes.techno} ${iconS}`}></i>
							<i className={`${classes.techno} ${iconL}`}></i>
						</p>
					</div>
				</div>
			</article>
		</section>
	);
}

export default Realisation;
