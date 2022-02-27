import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core";

function Profil() {
	const { t } = useTranslation();
	const useStyles = makeStyles((root) => ({
		container: {
			textAlign: "center",
			[root.breakpoints.down("md")]: {
				fontSize: "40px",
			},
		},
		titleContainer: {
			margin: "10px",
		},
		titleh2: {
			fontWeight: "800",
			[root.breakpoints.down("md")]: {
				fontSize: "70px",
			},
		},
		profilContainer: {
			textAlign: "center",
			display: "flex",
			justifyContent: "space-around",
			[root.breakpoints.down("md")]: {
				display: "block",
			},
		},
		about: {
			width: "400px",
			[root.breakpoints.down("md")]: {
				width: "1000px",
				padding: "0px 50px 0px",
			},
		},

		details: {
			width: "400px",
			paddingRight: "150px",
			[root.breakpoints.down("md")]: {
				width: "1000px",
				padding: "0px 50px 0px",
			},
		},
		titleh3: {
			[root.breakpoints.down("md")]: {
				fontSize: "60px",
			},
		},
		iconContainer: {
			margin: "40px",
			fontSize: "50px",
			[root.breakpoints.down("md")]: {
				fontSize: "90px",
			},
		},
		icon: {
			color: "#fad02c",
			marginLeft: "25px",
		},
	}));
	const classes = useStyles();
	return (
		<div>
			<section className={classes.container}>
				<div className={classes.titleContainer}>
					<h2 className={classes.titleh2}>{t("profil.1")}</h2>
					<p>
						<em>{t("profilSubtitle.1")}</em>
					</p>
				</div>
				<hr className="line mx-auto"></hr>

				<div className={classes.profilContainer}>
					<div className={classes.about}>
						<h3 className={classes.titleh3}>{t("about.1")}</h3>
						<p className="about">{t("about.2")}</p>
					</div>
					<div>
						<p className={classes.iconContainer}>
							<a
								target="_blank"
								rel="noopener noreferrer"
								className={classes.icon}
								href="https://github.com/TiemaCoulibaly">
								<i className="fab fa-github"></i>
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								className={classes.icon}
								href="https://www.linkedin.com/in/tiema-coulibaly/">
								<i className="fab fa-linkedin"></i>
							</a>
						</p>
					</div>
					<div className={classes.details}>
						<h3 className={classes.titleh3}>{t("details.1")}</h3>
						<p className="about">
							<strong>{t("details.2")} </strong>Coulibaly
						</p>
						<p className="about">
							<strong>{t("details.3")} </strong>Tiema
						</p>
						<p className="about">
							<strong>{t("details.4")} </strong>Paris
						</p>
						<br></br>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Profil;
