import React, { Fragment } from 'react';
import {
    Routes,
    Route
 } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Stock from  '../Pages/Stock/Stock';
import Shop from  '../Pages/Shop/Shop';
import Movements from '../Pages/Movements/Movements';
import Printers from '../Pages/Printers/Printers';
import Machines from '../Pages/Machines/Machines';
import { PrivateRoutes } from './Index';

export default function MainRoutes() {
    return (
        <Routes>
            <Fragment>    
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<PrivateRoutes />}>
                    <Route path="/register" element={<Register />} />
                </Route>
                <Route path="/stock" element={<PrivateRoutes />}>
                    <Route path="/stock" element={<Stock />} />
                </Route>
                <Route path="/shop" element={<PrivateRoutes />}>
                    <Route path="/shop" element={<Shop />} />
                </Route>
                <Route path="/movements" element={<PrivateRoutes />}>
                    <Route path="/movements" element={<Movements />} />
                </Route>
                <Route path="/printers" element={<PrivateRoutes />}>
                    <Route path="/printers" element={<Printers />} />
                </Route>
                <Route path="/machines" element={<PrivateRoutes />}>
                    <Route path="/machines" element={<Machines />} />
                </Route>
            </Fragment>
        </Routes>
    );
}