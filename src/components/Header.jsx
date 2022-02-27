import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SchoolIcon from "@material-ui/icons/School";
import LaptopIcon from "@material-ui/icons/Laptop";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import Typical from "react-typical";
import { useTranslation } from "react-i18next";

function Header() {
	const { t, i18n } = useTranslation();
	const handleClick = (lang) => {
		i18n.changeLanguage(lang);
	};
	const useStyles = makeStyles((root) => ({
		container: {
			height: "50vh",
			[root.breakpoints.down("md")]: {
				height: "50vh",
			},
			[root.breakpoints.down("xs")]: {
				height: "50vh",
			},
		},
		icon: {
			display: "flex",
			justifyContent: "space-between",
		},
		btnIcon: {
			fontSize: "25px",
			[root.breakpoints.down("md")]: {
				fontSize: "60px",
			},
		},

		btnContainer: {
			textAlign: "center",
			marginTop: "10vh",
			marginBottom: "5vh",
			[root.breakpoints.down("xs")]: {
				marginTop: "7vh",
			},
			[root.breakpoints.down("md")]: {
				marginTop: "15vh",
			},
		},
		btnFrench: {
			backgroundColor: "#209cee",
			color: "white",
			height: "45px",
			width: "140px",
			fontSize: "15px",
			margin: "10px",
			[root.breakpoints.down("md")]: {
				height: "90px",
				width: "240px",
				fontSize: "30px",
				margin: "15px",
			},
		},
		btnEnglish: {
			height: "45px",
			width: "140px",
			fontSize: "15px",
			margin: "10px",
			[root.breakpoints.down("md")]: {
				height: "90px",
				width: "240px",
				fontSize: "30px",
				margin: "15px",
			},
		},
		flagImg: {
			height: "30px",
			padding: "5px",
			[root.breakpoints.down("md")]: {
				height: "50px",
			},
		},
		titleContainer: {
			textAlign: "center",
		},
		title: {
			color: "white",
			fontSize: "40px",
			[root.breakpoints.down("md")]: {
				fontSize: "70px",
			},
		},
		tagline: {
			color: "white",
			fontSize: "30px",
			[root.breakpoints.down("md")]: {
				fontSize: "50px",
			},
		},
	}));
	const classes = useStyles();
	return (
		<header className={classes.container} id="home">
			<Box className={classes.icon}>
				<Button href="#home">
					<HomeIcon
						className={classes.btnIcon}
						style={{ color: "#fad02c" }}
					/>
				</Button>
				<Button href="#profil">
					<AccountBoxIcon
						className={classes.btnIcon}
						style={{ color: "#fad02c" }}
					/>
				</Button>
				<Button href="#formation">
					<SchoolIcon
						className={classes.btnIcon}
						style={{ color: "#fad02c" }}
					/>
				</Button>
				<Button href="#competence">
					<LaptopIcon
						className={classes.btnIcon}
						style={{ color: "#fad02c" }}
					/>
				</Button>
				<Button href="#realisation">
					<VisibilityIcon
						className={classes.btnIcon}
						style={{ color: "#fad02c" }}
					/>
				</Button>
				<Button href="#contact">
					<ContactMailIcon
						className={classes.btnIcon}
						style={{ color: "#fad02c" }}
					/>
				</Button>
			</Box>
			<div className={classes.btnContainer}>
				<Button
					color="primary"
					className={classes.btnFrench}
					variant="contained"
					onClick={() => handleClick("fr")}>
					{t("bouton.1")}
					<img
						className={classes.flagImg}
						alt="flag-french"
						src={"../../images/french.png"}
					/>
				</Button>
				<Button
					className={classes.btnEnglish}
					variant="contained"
					onClick={() => handleClick("en")}>
					{t("bouton.2")}
					<img
						className={classes.flagImg}
						src={
							"https://img.icons8.com/emoji/2x/united-kingdom-emoji.png"
						}
						alt="flag-uk"
					/>
				</Button>
			</div>
			<article className={classes.titleContainer}>
				<h1 className={classes.title}>Tiema Coulibaly</h1>

				<hr className="line mx-auto"></hr>
				<h2 className={classes.tagline}>
					<Typical
						loop={Infinity}
						wrapper="b"
						steps={[t("dev.1"), 1500]}
					/>
				</h2>
			</article>
		</header>
	);
}
export default Header;
