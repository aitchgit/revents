import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../Reducers/RootReducer';
import thunk from 'redux-thunk';

export const ConfigStore = (preloadState) => {
    const middlewares = [thunk];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const storeEnhancers = [middlewareEnhancer];

    const composedEnhancer = compose(...storeEnhancers);

    const store = createStore(
        rootReducer,
        preloadState,
        composedEnhancer
    );
    return store;
}