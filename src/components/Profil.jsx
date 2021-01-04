import React from "react";
import { useTranslation } from "react-i18next";

function Profil() {
	const { t, i18n } = useTranslation();
	return (
		<div class="background-color">
			<section id="profil" class="container">
				<div class="my-5" class="text-center">
					<h2>{t("profil.1")}</h2>
					<p>
						<em>{t("profilSubtitle.1")}</em>
					</p>
				</div>
				<hr class="line mx-auto"></hr>
				<div class="mx-auto">
					<div class="row">
						<div class="col-md-3 offset-md-2">
							<h3>{t("about.1")}</h3>
							<p>{t("about.2")}</p>
						</div>
						<div class="col-md-auto">
							<img
								id="profil-img"
								src="./images/profil.png"
								alt="Tiema Coulibaly"
								width="200"
								height="200"
							/>
						</div>
						<div class="col">
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

							<p class="icon-social">
								<a href="https://github.com/TiemaCoulibaly">
									<i class="fab fa-github"></i>
								</a>
								<a href="https://www.linkedin.com/in/tiema-coulibaly-063b94195/">
									<i class="fab fa-linkedin"></i>
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
