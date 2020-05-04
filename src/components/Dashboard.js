import React from 'react'
import "./AppController.css"
import "./Layout.css"   
import { ApartmentProvider } from './apartment/ApartmentProvider'
import ApartmentList from './apartment/ApartmentList'
import { UserProvider } from './user/UserProvider'

export const Dashboard = () => {
    
    return (
        <div className="mainContainer">
            <UserProvider>
                <ApartmentProvider>
                    <ApartmentList />
                </ApartmentProvider>
            </UserProvider>
           
        </div>
    )
}