import React from "react";
import { useTranslation } from "react-i18next";

function Profil() {
	const { t } = useTranslation();
	return (
		<div className="background-color">
			<section id="profil" className="container">
				<div className="my-5 text-center">
					<h2>{t("profil.1")}</h2>
					<p>
						<em>{t("profilSubtitle.1")}</em>
					</p>
				</div>
				<hr className="line mx-auto"></hr>
				<div className="mx-auto">
					<div className="row">
						<div className="col-md-3 offset-md-2">
							<h3>{t("about.1")}</h3>
							<p>{t("about.2")}</p>
						</div>
						<div className="col-md-auto">
							<img
								id="profil-img"
								src="./images/profil.png"
								alt="Tiema Coulibaly"
								width="200"
								height="200"
							/>
						</div>
						<div className="col">
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

							<p className="icon-social">
								<a href="https://github.com/TiemaCoulibaly">
									<i className="fab fa-github"></i>
								</a>
								<a href="https://www.linkedin.com/in/tiema-coulibaly-063b94195/">
									<i className="fab fa-linkedin"></i>
								</a>
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Profil;
