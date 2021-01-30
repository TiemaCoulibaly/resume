import React from "react";
import Header from "./Header";
import Profil from "./Profil";
import Formation from "./Formation";
import Title from "./Title";
import Competence from "./Competence";
import Realisation from "./Realisation";
import Contact from "./Contact";
import Footer from "./Footer";
import Divider from "./Divider";
import Bandeau from "./Bandeau";
import Espaceur from "./Espaceur";
import { useTranslation } from "react-i18next";

function App() {
	const { t } = useTranslation();
	return (
		<div>
			<Header />
			<Divider />

			<Profil />
			<Espaceur />
			<Bandeau />
			<Divider />
			<Espaceur />
			<Title id="formation" name={t("title.1")} />
			<Espaceur />
			<Formation
				subtitle="Simplon.co"
				dateF="2020 - 2021"
				titleF={t("formation.8")}
				description={t("formation.9")}
				link="https://simplon.co/formation/concepteur-developpeur-d-applications/12"
			/>
			<Formation
				subtitle="Greta"
				dateF="Oct 2019 - Juillet 2020"
				titleF={t("formation.1")}
				description={t("formation.2")}
				link="http://www.greta-92.fr/1-formations-en-web-communication-et-chaine-graphique/35790-titre-professionnel-developpeur-web-et-web-mobile-formation-conventionnee-11"
			/>
			<Formation
				subtitle="Greta"
				dateF="Dec 2019 - Jan 2020"
				titleF="Photoshop/Illustrator"
				description={t("formation.3")}
				link="http://www.greta-92.fr/1-formations-en-web-communication-et-chaine-graphique/35790-titre-professionnel-developpeur-web-et-web-mobile-formation-conventionnee-11"
			/>
			<Formation
				subtitle="Lonsdale Institute"
				dateF="2015 - 2016"
				titleF={t("formation.4")}
				description={t("formation.5")}
				link="https://www.lonsdaleinstitute.edu.au/courses/diploma-business/"
			/>
			<Formation
				subtitle="Lonsdale Institute"
				dateF="2014 - 2015"
				titleF={t("formation.6")}
				description={t("formation.7")}
				link="https://www.lonsdaleinstitute.edu.au/courses/certificate-iv-business/"
			/>

			<Espaceur />
			<Competence />
			<Espaceur />
			<Bandeau quote={t("quote.1")} />
			<Divider />
			<Espaceur />
			<Title name={t("title.3")} id="realisation" />
			<Realisation
				title="Espace Gambon"
				icon="fab fa-wordpress icon-realisation mx-2"
				iconF="fab fa-php icon-realisation mx-2"
				source="./images/espace.png"
				link="https://espace-gambon.fr/"
				title1="ToDo List"
				icon1="fab fa-react icon-realisation mx-2"
				description1="React js"
				source1="./images/todo.png"
				link1="https://cryptic-cliffs-02336.herokuapp.com/"
			/>
			<Espaceur />

			<Realisation
				title="Social CatchUp"
				icon="fab fa-html5 icon-realisation mx-2"
				iconF="fab fa-css3-alt icon-realisation mx-2"
				iconS="fab fa-js-square icon-realisation mx-2"
				source="./images/social1.png"
				link="http://makeitdigital.ml/"
				title1="Keeper App"
				icon1="fab fa-react icon-realisation mx-2"
				source1="./images/keeper-app.png"
				link1="https://keepit-f5164.web.app/"
			/>
			<Realisation
				title="Disability Provider"
				icon="fab fa-wordpress icon-realisation mx-2"
				iconF="fab fa-css3-alt icon-realisation mx-2"
				source="./images/disabilityprovider.png"
				link="https://mydisabilityprovider.com.au/"
				title1="Pomodoro App"
				icon1="fab fa-react icon-realisation mx-2"
				icon1F="fab fa-css3-alt icon-realisation mx-2"
				link1="https://pomodoro-feca0.web.app/"
				source1="./images/pomodoroApp.png"
			/>

			<Espaceur />
			<Divider />

			<Contact />
			<Footer />
		</div>
	);
}

export default App;
