import React from "react";
import { Route as RouterRoute } from "react-router-dom";

const Route = ({ component: Component, isPrivate = false, ...rest }) => {
    // const { isAuth, loading } = useContext(AuthContext);
    return (
        <>
            <RouterRoute {...rest} component={Component} />
        </>
    );
};

export default Route;