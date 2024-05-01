import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const PrivateComp = () => {
    return (
        localStorage.getItem('authtoken') ? <Outlet /> : <Navigate to='/login' />
    )
}

export default PrivateComp