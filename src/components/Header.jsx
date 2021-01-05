import React from "react";
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
	return (
		<header id="home">
			<div class="icon">
				<Button>
					<a href="#home">
						<HomeIcon />
					</a>
				</Button>
				<Button>
					<a href="#profil">
						<AccountBoxIcon />
					</a>
				</Button>
				<Button>
					<a href="#formation">
						<SchoolIcon />
					</a>
				</Button>
				<Button>
					<a href="#competence">
						<LaptopIcon />
					</a>
				</Button>
				<Button>
					<a href="#realisation">
						<VisibilityIcon />
					</a>
				</Button>
				<Button>
					<a href="#contact">
						<ContactMailIcon />
					</a>
				</Button>
			</div>
			<div id="flag">
				<Button
					style={{ color: "color: #209cee;" }}
					id="bouton-flag1"
					variant="contained"
					onClick={() => handleClick("fr")}>
					FRANCAIS
					<img class="flag-img" src={"../../images/french.png"} />
				</Button>
				<Button
					id="bouton-flag"
					variant="contained"
					onClick={() => handleClick("en")}>
					ENGLISH
					<img
						class="flag-img"
						src={
							"https://img.icons8.com/emoji/2x/united-kingdom-emoji.png"
						}
					/>
				</Button>
			</div>
			<article id="title">
				<h1>Tiema Coulibaly</h1>

				<hr class="line mx-auto"></hr>
				<h2>
					<Typical
						loop={Infinity}
						wrapper="b"
						steps={[
							t("dev.1"),
							1500,
							t("dev.2"),
							1500,
							t("dev.3"),
							1500,
						]}
						// steps={[
						// 	"Développeur Web",
						// 	1500,
						// 	"Passionné d'informatique",
						// 	1500,
						// 	"Créateur de sites web & web mobile",
						// 	1500,
						// ]}
					/>
				</h2>
			</article>
		</header>
	);
}
export default Header;
