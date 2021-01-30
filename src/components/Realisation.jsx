import React from "react";
import LinkIcon from "@material-ui/icons/Link";
import Espaceur from "./Espaceur";
function Realisation(props) {
	return (
		<section id="realisation" className="container">
			<Espaceur />
			<Espaceur />

			<div className="d-flex justify-content-center">
				<div className="row">
					<div className="col col-sm-6">
						<article
							className="card mx-5 my-3"
							style={{ width: "18rem" }}>
							<div className="realisation-container">
								<a
									target="_blank"
									rel=" noopener noreferrer"
									href={props.link}>
									<img
										src={props.source}
										alt="peoples"
										className="card-img-top realisation-picture"
									/>
									<LinkIcon id="icon-realisation" />
								</a>
								<div id="card" className="card-body">
									<h3 className="card-title">
										{props.title}
									</h3>
									<p className="card-text text-center">
										<i className={props.icon}></i>
										<i className={props.iconF}></i>
										<i className={props.iconS}></i>
									</p>
								</div>
							</div>
						</article>
					</div>

					<div className="col col-sm-6">
						<article
							className="card mx-5 my-3"
							style={{ width: "18rem" }}>
							<div className="realisation-container">
								<a
									target="_blank"
									rel=" noopener noreferrer"
									href={props.link1}>
									<img
										src={props.source1}
										alt="peoples"
										className="card-img-top realisation-picture"
									/>
									<LinkIcon id="icon-realisation" />
								</a>
								<div id="card" className="card-body">
									<h3 className="card-title">
										{props.title1}
									</h3>
									<p className="card-text">
										<i className={props.icon1}></i>
										<i className={props.icon1F}></i>
									</p>
								</div>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Realisation;
