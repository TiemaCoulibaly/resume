import React from "react";
import { useTranslation } from "react-i18next";

function Formation(props) {
	const { t } = useTranslation();
	return (
		<section className="container">
			<article className="row">
				<div className="col-md-3 offset-md-2">
					<h3>{props.subtitle}</h3>
					<p id="dateF">{props.dateF}</p>
					<a
						href={props.link}
						className="btn btn-md btn-outline-warning">
						{t("readmore.1")}
					</a>
				</div>

				<div className="col-md-7">
					<h4>{props.titleF}</h4>
					<p>{props.description}</p>
				</div>
			</article>
		</section>
	);
}

export default Formation;
