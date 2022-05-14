import React, { createContext } from "react";

import useAuth from "../../hooks/useAuth.js";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const { loading, user, isAuth, handleLogin, handleLogout } = useAuth();

    return (
        <AuthProvider.Provider
            value={{ loading, user, isAuth, handleLogin, handleLogout }}
        >
            {children}
        </AuthProvider.Provider>
    );
};

export { AuthContext, AuthProvider };