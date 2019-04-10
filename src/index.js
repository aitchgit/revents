import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import App from './App/Layout/App';
import * as serviceWorker from './serviceWorker';
import { ConfigStore } from './App/Store/ConfigStore';

const store = ConfigStore();

ReactDOM.render(
                <Provider store={store}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>    
                </Provider>
                , document.getElementById('root'));

serviceWorker.unregister();
