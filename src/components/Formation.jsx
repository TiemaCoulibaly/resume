import React from "react";
import { useTranslation } from "react-i18next";
import { Button, makeStyles } from "@material-ui/core";

function Formation(props) {
	const { t } = useTranslation();
	const useStyles = makeStyles((root) => ({
		container: {
			textAlign: "center",
			display: "flex",
			padding: "20px 0px 20px",
			justifyContent: "space-around",
			[root.breakpoints.down("md")]: {
				fontSize: "40px",
			},
		},
		left: {
			width: "300px",
			[root.breakpoints.down("md")]: {},
		},
		right: {
			width: "800px",
			[root.breakpoints.down("md")]: {
				width: "600px",
			},
		},
		titleh3: {
			[root.breakpoints.down("md")]: {
				fontSize: "60px",
			},
		},
		titleh4: {
			[root.breakpoints.down("md")]: {
				fontSize: "60px",
			},
		},
		readMore: {
			color: "#fad02c",
			border: "1px solid #fad02c",
			[root.breakpoints.down("md")]: {
				fontSize: "30px",
			},
		},
	}));
	const classes = useStyles();
	console.log("ee", props.description);
	return (
		<section className={classes.container}>
			<div className={classes.left}>
				<h3 className={classes.titleh3}>{props.subtitle}</h3>
				<p id="dateF">{props.dateF}</p>
				<Button
					className={classes.readMore}
					variant="outlined"
					href={props.link}
					target="_blank"
					rel="noopener noreferrer">
					{t("readmore.1")}
				</Button>
			</div>

			<div className={classes.right}>
				<h4 className={classes.titleh4}>{props.titleF}</h4>
				<p>{props.description}</p>
			</div>
		</section>
	);
}

export default Formation;
