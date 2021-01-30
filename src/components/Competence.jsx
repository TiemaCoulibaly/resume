import React from "react";
import { useTranslation } from "react-i18next";

function Competence() {
	const { t } = useTranslation();
	return (
		<div className="background-color">
			<section id="competence" className="container">
				<h2 className="text-center">{t("title.2")}</h2>
				<hr className="line mx-auto mb-5"></hr>

				<div className="row text-center my-4">
					<div className="col">
						<i className="fab fa-html5 ico"></i>
					</div>
					<div className="col">
						<i className="fab fa-css3-alt ico"></i>
					</div>
					<div className="col">
						<i className="fab fa-js-square ico"></i>
					</div>
				</div>
				<div className="row text-center my-4">
					<div className="col">
						<i className="fab fa-php ico"></i>
					</div>
					<div className="col">
						<i className="fab fa-react ico"></i>
					</div>
					<div className="col">
						<i className="fab fa-node ico"></i>
					</div>
				</div>

				<div className="row text-center my-4">
					<div className="col">
						<i className="fab fa-git ico"></i>
					</div>
					<div className="col">
						<i className="fab fa-wordpress ico"></i>
					</div>
					<div className="col">
						<i className="fab fa-bootstrap ico"></i>
					</div>
					<div className="col">
						<i className="fab fa-adobe ico"></i>
					</div>
				</div>
			</section>
		</div>
	);
}
export default Competence;
