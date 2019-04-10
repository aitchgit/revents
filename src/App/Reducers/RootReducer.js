import { combineReducers } from 'redux';
import testReducer from '../../Features/TestArea/TestReducer';
import eventReducer from '../../Features/Event/eventReducer';

const rootReducer = combineReducers({
    test: testReducer,
    events: eventReducer
})

export default rootReducer;