import React from "react";
import { useTranslation } from "react-i18next";

function Contact() {
	const { t } = useTranslation();
	return (
		<section id="contact" className="container-fluid">
			<h2 id="contact-title" className="text-center">
				Contact
			</h2>
			<hr className="line mx-auto"></hr>
			<div className="row">
				<div className="card mx-auto my-5" style={{ width: "500px" }}>
					<div className="card-img-top" alt="Contact">
						<iframe
							title="map"
							frameBorder="0"
							id="map"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84000.46344111013!2d2.258823965615589!3d48.85793422347505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sen!2sfr!4v1609926884327!5m2!1sen!2sfr"
							width="500"
							height="200"
							allowFullScreen=""
							aria-hidden="false"
							tabIndex="0"></iframe>
					</div>
					<div className="text-center">
						<div className="card-text">
							<h5>
								<i className="far fa-envelope contact-icon"></i>{" "}
								tiema.couly@outlook.com
							</h5>
						</div>
						<div className="card-text">
							<h5>
								<i className="fas fa-mobile-alt contact-icon"></i>{" "}
								+336 05 91 67 85
							</h5>
						</div>

						<div className="card-text mx-auto">
							<a
								target="_blank"
								rel=" noopener noreferrer"
								className="btn btn-outline-primary my-3"
								href={t("resume.1")}>
								{t("resume.2")}
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
