import React from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
// import { ToastContainer } from "react-toastify";

import Login from '../pages/Login/';
import { AuthProvider } from '../context/Auth/AuthContext';
import Route from "./Route";

const Routes = () => {
    return (
        <BrowserRouter>
            {/* <AuthProvider> */}
                <Switch>
                    <Route exact path="/login" component={Login} />
                </Switch>
            {/* </AuthProvider> */}
        </BrowserRouter>
    );
};

export default Routes;