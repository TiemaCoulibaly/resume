import React, { Suspense } from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import "./i18n.js";
import LinearProgress from "@material-ui/core/LinearProgress";

ReactDom.render(
	<Suspense fallback={<LinearProgress />}>
		<App />
	</Suspense>,
	document.getElementById("root")
);
