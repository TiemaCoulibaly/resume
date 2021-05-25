import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core";

function Competence() {
	const { t } = useTranslation();
	const useStyles = makeStyles((root) => ({
		container: {
			textAlign: "center",
		},
		title: {
			[root.breakpoints.down("md")]: {
				fontSize: "70px",
			},
		},
		iconRow: {
			display: "flex",
			justifyContent: "space-around",
			padding: "15px",
			[root.breakpoints.down("md")]: {
				fontSize: "60px",
			},
		},
		icon: {
			fontSize: "50px",
			[root.breakpoints.down("md")]: {
				fontSize: "90px",
			},
		},
	}));

	const classes = useStyles();
	return (
		<div className="background-color">
			<section className={classes.container}>
				<h2 className={classes.title}>{t("title.2")}</h2>
				<hr className="line mx-auto mb-5"></hr>

				<div className={classes.iconRow}>
					<div className={classes.icon}>
						<i className="fab fa-html5 ico"></i>
					</div>
					<div className={classes.icon}>
						<i className="fab fa-css3-alt ico"></i>
					</div>
					<div className={classes.icon}>
						<i className="fab fa-js-square ico"></i>
					</div>
				</div>
				<div className={classes.iconRow}>
					<div className={classes.icon}>
						<i className="fab fa-php ico"></i>
					</div>
					<div className={classes.icon}>
						<i className="fab fa-react ico"></i>
					</div>
					<div className={classes.icon}>
						<i className="fab fa-node ico"></i>
					</div>
				</div>

				<div className={classes.iconRow}>
					<div className={classes.icon}>
						<i className="fab fa-git ico"></i>
					</div>
					<div className={classes.icon}>
						<i className="fab fa-wordpress ico"></i>
					</div>
					<div className={classes.icon}>
						<i className="fab fa-bootstrap ico"></i>
					</div>
					<div className={classes.icon}>
						<i className="fab fa-sass ico"></i>
					</div>
				</div>
			</section>
		</div>
	);
}
export default Competence;
