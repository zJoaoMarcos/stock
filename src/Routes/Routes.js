import React, { Fragment } from 'react';
import {
    Routes,
    Route
 } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';
import Stock from  '../Pages/Stock/Stock';
import Shop from  '../Pages/Shop/Shop';
import { PrivateRoutes } from './Index';

export default function MainRoutes() {
    return (
        <Routes>
            <Fragment>    
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<PrivateRoutes />}>
                    <Route path="/home" element={<Home />} />
                </Route>
                <Route path="/register" element={<PrivateRoutes />}>
                    <Route path="/register" element={<Register />} />
                </Route>
                <Route path="/stock" element={<PrivateRoutes />}>
                    <Route path="/stock" element={<Stock />} />
                </Route>
                <Route path="/shop" element={<PrivateRoutes />}>
                    <Route path="/shop" element={<Shop />} />
                </Route>
            </Fragment>
        </Routes>
    );
}