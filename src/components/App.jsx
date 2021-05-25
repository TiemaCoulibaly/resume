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
				subtitle="Dawan"
				dateF="Mars 2021 - Juin2021"
				titleF={t("formation.8")}
				description={t("formation.9")}
				link="https://www.dawan.fr/"
			/>
			<Formation
				subtitle="Greta"
				dateF="Oct 2019 - Juillet 2020"
				titleF={t("formation.1")}
				description={t("formation.2")}
				link="http://www.greta-92.fr/1-formations-tous-secteurs/36737-titre-professionnel-developpeur-web-et-web-mobile-formation-conventionnee-4"
			/>
			<Formation
				subtitle="Greta"
				dateF="Dec 2019 - Jan 2020"
				titleF="Photoshop/Illustrator"
				description={t("formation.3")}
				link="http://www.greta-92.fr/1-formations-tous-secteurs/35762-webdesigner-certification-tosa-photoshop-formation-conventionnee-5"
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
				title1="Disability Provider"
				icon1="fab fa-wordpress icon-realisation mx-2"
				source1="./images/disabilityprovider.png"
				link1="https://mydisabilityprovider.com.au/"
			/>
			<Realisation
				title="Search Movie App"
				icon="fab fa-react icon-realisation mx-2"
				iconF="fab fa-css3-alt icon-realisation mx-2"
				source="./images/movieApp.png"
				link="https://movieapp-99013.web.app/"
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
