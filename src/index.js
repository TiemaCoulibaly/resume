import React, { Suspense } from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import "./i18n.js";
import { CircularProgress, Box } from "@material-ui/core";

ReactDom.render(
	<Suspense
		fallback={
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				minHeight="100vh">
				<CircularProgress size={100} />
			</Box>
		}>
		<App />
	</Suspense>,
	document.getElementById("root")
);
