import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import 'semantic-ui-css/semantic.min.css'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import './index.css';
import App from './App/Layout/App';
import * as serviceWorker from './serviceWorker';
import { ConfigStore } from './App/Store/ConfigStore';
import ScrollToTop from './App/Common/Util/ScrollToTop';
import { loadEvents } from './Features/Event/eventActions';

const store = ConfigStore();
store.dispatch(loadEvents());

ReactDOM.render(
                <Provider store={store}>
                    <BrowserRouter>
                        <ScrollToTop>
                            <ReduxToastr 
                                position="bottom-right"
                                transitionIn="fadeIn"
                                transitionOut="fadeOut"
                            />
                            <App />
                        </ScrollToTop>
                    </BrowserRouter>    
                </Provider>
                , document.getElementById('root'));

serviceWorker.unregister();
