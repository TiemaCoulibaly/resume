import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core";

function Contact() {
	const { t } = useTranslation();
	const useStyles = makeStyles((root) => ({
		container: {
			height: "70vh",
			width: "100%",
			textAlign: "center",
			backgroundColor: "#0f084b",
			[root.breakpoints.down("md")]: {
				height: "56vh",
			},
		},
		titleh2: {
			color: "white",
			[root.breakpoints.down("md")]: {
				fontSize: "70px",
			},
		},
		card: {
			width: "500px",
			backgroundColor: "white",
			borderRadius: "10px",
			[root.breakpoints.down("md")]: {
				width: "53rem",
			},
		},
		iframe: {
			borderRadius: "10px",
			border: "4px solid #fad02c",
			width: "500px",
			height: "200px",
			[root.breakpoints.down("md")]: {
				fontSize: "40px",
				width: "53rem",
				height: "30rem",
			},
		},
		icon: {
			color: "#209cee",
			[root.breakpoints.down("md")]: {
				fontSize: "40px",
			},
		},
		titleh5: {
			[root.breakpoints.down("md")]: {
				fontSize: "40px",
			},
		},
		btnResume: {
			[root.breakpoints.down("md")]: {
				fontSize: "40px",
			},
		},
	}));
	const classes = useStyles();
	return (
		<section className={classes.container}>
			<h2 className={classes.titleh2}>Contact</h2>
			<hr className="line mx-auto"></hr>

			<div className={`${classes.card} mx-auto my-5`}>
				<div alt="Contact">
					<iframe
						className={classes.iframe}
						title="map"
						frameBorder="0"
						id="map"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84000.46344111013!2d2.258823965615589!3d48.85793422347505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sen!2sfr!4v1609926884327!5m2!1sen!2sfr"
						allowFullScreen=""
						aria-hidden="false"
						tabIndex="0"></iframe>
				</div>
				<div className="text-center">
					<div className="card-text">
						<h5 className={classes.titleh5}>
							<i
								className={`${classes.icon} far fa-envelope contact-icon`}></i>{" "}
							tiema.couly@outlook.com
						</h5>
					</div>
					<div className="card-text">
						<h5 className={classes.titleh5}>
							<i
								className={`${classes.icon} fas fa-mobile-alt contact-icon`}></i>{" "}
							+336 05 91 67 85
						</h5>
					</div>

					<div className={`${classes.btnResume} mx-auto`}>
						<a
							target="_blank"
							rel=" noopener noreferrer"
							className={`${classes.btnResume} btn btn-outline-primary my-3`}
							href={t("resume.1")}>
							{t("resume.2")}
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
