import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../Reducers/RootReducer';

export const ConfigStore = (preloadState) => {
    const middlewares = [];
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