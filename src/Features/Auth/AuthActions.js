import { LOGIN_USER, LOGOUT_USER } from './AuthConstants';

export const login = ( creds) => {
    return {
        type: LOGIN_USER,
        payload: {
            creds
        }
    }
}

export const logout = () => {
    return {
        type: LOGOUT_USER
    }
}