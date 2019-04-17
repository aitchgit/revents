import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import testReducer from '../../Features/TestArea/TestReducer';
import eventReducer from '../../Features/Event/eventReducer';
import modalReducer from '../../Features/Modals/ModalReducer';
import authReducer from '../../Features/Auth/AuthReducer';
import asyncReducer from '../../Features/Async/AsyncReducer';

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    form: FormReducer,
    test: testReducer,
    events: eventReducer,
    modal: modalReducer,
    auth: authReducer,
    async: asyncReducer,
    toastr: toastrReducer
})

export default rootReducer;