import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Dashboard;