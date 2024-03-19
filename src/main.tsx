import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import ReduxProvider from "./providers/ReduxProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import PrivateRoute from "./providers/PrivateRoute.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ReduxProvider>
			<BrowserRouter>
				<PrivateRoute>
					<App />
				</PrivateRoute>
			</BrowserRouter>
		</ReduxProvider>
	</React.StrictMode>
);
