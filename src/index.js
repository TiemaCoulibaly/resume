import React, { Suspense } from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import "./i18n.js";
import CircularProgress from "@material-ui/core/CircularProgress";

ReactDom.render(
	<Suspense
		fallback={
			<CircularProgress
				size={100}
				style={{
					width: "100%",
					display: "flex",
					direction: "column",
					justifyContent: "center",
					alignContent: "center",
					marginTop: "400px",
					minHeight: "20vh",
					color: "#209cee",
				}}
			/>
		}>
		<App />
	</Suspense>,
	document.getElementById("root")
);
