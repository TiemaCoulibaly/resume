import React, { useState } from "react";
import Header from "./Header";
import Profil from "./Profil";
// import Formation from "./Formation";
import Title from "./Title";
import Competence from "./Competence";
import Realisation from "./Realisation";
import Contact from "./Contact";
import Footer from "./Footer";
import Divider from "./Divider";
import Bandeau from "./Bandeau";
import Espaceur from "./Espaceur";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core";

import { RealisationList } from "../helpers/RealisationList";

import {
  ThemeProvider,
  CssBaseline,
  createMuiTheme,
  Switch,
} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import FlareIcon from "@material-ui/icons/Flare";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import ScrollToTop from "./ScrollToTop";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const { t } = useTranslation();
  const useStyles = makeStyles((root) => ({
    realisation: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      [root.breakpoints.down("md")]: {
        display: "block",
      },
    },
    formControl: {
      display: "flex",
      justifyContent: "center",
      margin: "20px",
    },

    light: {
      color: "#fad02c",
    },
    dark: {
      color: "#209cee",
    },
  }));
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Header />
          <ScrollToTop />

          <Divider />

          <FormControlLabel
            className={classes.formControl}
            value="Dark Mode"
            control={
              <Switch
                color="primary"
                onChange={handleDarkMode}
                value={darkMode}
                size="medium"
              />
            }
            label={
              darkMode ? (
                <Brightness3Icon className={classes.dark} />
              ) : (
                <FlareIcon className={classes.light} />
              )
            }
            labelPlacement="start"
          />

          <Profil />
          <Espaceur />
          <Bandeau quote={t("quote.1")} />
          <Divider />
          <Espaceur />

          <Title name={t("title.3")} id="realisation" />
          <Espaceur />

          <div className={classes.realisation}>
            {RealisationList.map((realisationItem, key) => {
              return (
                <Realisation
                  key={key}
                  title={realisationItem.title}
                  icon={realisationItem.icon}
                  iconF={realisationItem.iconF}
                  iconS={realisationItem.iconS}
                  iconL={realisationItem.iconL}
                  source={realisationItem.source}
                  link={realisationItem.link}
                  github={realisationItem.github}
                />
              );
            })}
          </div>
          {/* <Formation
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
				/> */}

          <Competence />

          <Divider />
          <Contact />
          <Footer />
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
