import { LOGIN_USER, LOGOUT_USER } from './AuthConstants';
import { closeModal} from '../Modals/ModalActions';

export const login = ( creds) => {
    return dispatch => {
        dispatch({type: LOGIN_USER, payload: {creds}})
        dispatch(closeModal())
    }
}

export const logout = () => {
    return {
        type: LOGOUT_USER
    }
}