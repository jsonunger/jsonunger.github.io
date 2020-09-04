import 'react-app-polyfill/ie9';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import * as serviceWorker from './serviceWorker';

const GlobalStyle = createGlobalStyle`
    body {
        white-space: normal;
        font-family: monospace;
        margin-bottom: 32px;
        font-size: 14px;
        line-height: 1.42857143;
    }

    @media (min-width: 768px) {
        body {
            margin-bottom: 50px;
        }
    }
`;

ReactDOM.render(
    <>
        <GlobalStyle />
        <App />
    </>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
