export const loginStart = (userCredential) => {
    return {
        type: "LOGIN_START",
    };
};

export const loginSuccess = (user) => {
    return {
        type: "LOGIN_SUCCESS",
        payload: user,
    };
};

export const loginFailure = (user) => {
    return {
        type: "LOGIN_FAILURE",
    };
};


export const logout = () => {
    return {
        type: "LOGOUT",
    };
};
