import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	// Top: 0 takes us all the way back to the top of the page
	// Behavior: smooth keeps it smooth!
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		// Button is displayed after scrolling for 500 pixels
		const toggleVisibility = () => {
			if (window.pageYOffset > 200) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);
	const useStyles = makeStyles((root) => ({
		container: {
			zIndex: 2,
			position: "fixed",
			cursor: "pointer",
			bottom: "0",
			right: "0",
			width: "35px",
			height: "20px",
			margin: "30px",
			[root.breakpoints.down("md")]: {
				width: "65px",
				height: "50px",
			},
		},
		scroll: {
			backgroundColor: "#fad02c",
			color: "#209cee",
			borderRadius: "10px",
			padding: "5px",
		},
	}));
	const classes = useStyles();
	//scroll-to-top classes: fixed, bottom:0, right:0
	return (
		<div className={classes.container}>
			{isVisible && (
				<div onClick={scrollToTop} className={classes.scroll}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M5 10l7-7m0 0l7 7m-7-7v18"
						/>
					</svg>
				</div>
			)}
		</div>
	);
};
export default ScrollToTop;
