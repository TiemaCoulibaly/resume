import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core";

function Profil() {
	const { t } = useTranslation();
	const useStyles = makeStyles((root) => ({
		container: {
			textAlign: "center",
		},
		titleContainer: {
			margin: "10px",
		},
		profilContainer: {
			textAlign: "center",
			display: "flex",
			justifyContent: "space-around",
		},
		about: {
			width: "400px",
		},

		details: {
			width: "400px",
			paddingRight: "150px",
		},
		iconContainer: {
			fontSize: "30px",
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
					<h2>{t("profil.1")}</h2>
					<p>
						<em>{t("profilSubtitle.1")}</em>
					</p>
				</div>
				<hr className="line mx-auto"></hr>

				<div className={classes.profilContainer}>
					<div className={classes.about}>
						<h3>{t("about.1")}</h3>
						<p>{t("about.2")}</p>
					</div>
					<div>
						<img
							className={classes.img}
							id="profil-img"
							src="./images/profil.png"
							alt="Tiema Coulibaly"
							width="200"
							height="200"
						/>
					</div>
					<div className={classes.details}>
						<h3>{t("details.1")}</h3>
						<p>
							<strong>{t("details.2")} </strong>Coulibaly
						</p>
						<p>
							<strong>{t("details.3")} </strong>Tiema
						</p>
						<p>
							<strong>{t("details.4")} </strong>Paris
						</p>
						<br></br>

						<p className={classes.iconContainer}>
							<a
								target="_blank"
								rel=" noopener noreferrer"
								className={classes.icon}
								href="https://github.com/TiemaCoulibaly">
								<i className="fab fa-github"></i>
							</a>
							<a
								target="_blank"
								rel=" noopener noreferrer"
								className={classes.icon}
								href="https://www.linkedin.com/in/tiema-coulibaly-063b94195/">
								<i className="fab fa-linkedin"></i>
							</a>
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Profil;
