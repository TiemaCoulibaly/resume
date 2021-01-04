import React from "react";
import { useTranslation } from "react-i18next";

function Formation(props) {
	const { t, i18n } = useTranslation();
	return (
		<section class="container">
			<article class="row">
				<div class="col-md-3 offset-md-2">
					<h3>{props.subtitle}</h3>
					<p id="dateF">{props.dateF}</p>
					<a href={props.link} class="btn btn-md btn-outline-warning">
						{t("readmore.1")}
					</a>
				</div>

				<div class="col-md-7">
					<h4>{props.titleF}</h4>
					<p>{props.description}</p>
				</div>
			</article>
		</section>
	);
}

export default Formation;
