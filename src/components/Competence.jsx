import React from "react";
import { useTranslation } from "react-i18next";

function Competence() {
	const { t, i18n } = useTranslation();
	return (
		<div class="background-color">
			<section id="competence" class="container">
				<h2 class="text-center">{t("title.2")}</h2>
				<hr class="line mx-auto mb-5"></hr>

				<div class="row text-center my-4">
					<div class="col">
						<i class="fab fa-html5 ico"></i>
					</div>
					<div class="col">
						<i class="fab fa-css3-alt ico"></i>
					</div>
					<div class="col">
						<i class="fab fa-js-square ico"></i>
					</div>
				</div>
				<div class="row text-center my-4">
					<div class="col">
						<i class="fab fa-php ico"></i>
					</div>
					<div class="col">
						<i class="fab fa-react ico"></i>
					</div>
					<div class="col">
						<i class="fab fa-node ico"></i>
					</div>
				</div>

				<div class="row text-center my-4">
					<div class="col">
						<i class="fab fa-git ico"></i>
					</div>
					<div class="col">
						<i class="fab fa-wordpress ico"></i>
					</div>
					<div class="col">
						<i class="fab fa-bootstrap ico"></i>
					</div>
					<div class="col">
						<i class="fab fa-adobe ico"></i>
					</div>
				</div>
			</section>
		</div>
	);
}
export default Competence;
