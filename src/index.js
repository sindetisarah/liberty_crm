import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/styles.scss';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { ThemeContextProvider } from './contexts/themeContext';
import './helpers/i18n';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import TagManager from 'react-gtm-module'


const tagManagerArgs = {
	gtmId: 'GTM-N2ZQHKV',
	dataLayer: {
		userId: localStorage.getItem('query') === null ? "Anonymous" : localStorage.getItem('query'),
		userProject: 'CustomerPortal'
	}
}

Sentry.init({
	dsn: "https://b2931d43d2f04ec5ac64400b96b13548@o1162014.ingest.sentry.io/6483121",
	integrations: [new BrowserTracing()],
	tracesSampleRate: 1.0,
});

TagManager.initialize(tagManagerArgs)

ReactDOM.render(
	<Router>
		<React.StrictMode>
			<ThemeContextProvider>
				<App />
			</ThemeContextProvider>
		</React.StrictMode>
	</Router>,
	document.getElementById('root'),
);

reportWebVitals();
