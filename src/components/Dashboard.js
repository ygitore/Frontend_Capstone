import React from 'react'
import "./AppController.css"
import "./Layout.css"   
import { ApartmentProvider } from './apartment/ApartmentProvider'
import ApartmentList from './apartment/ApartmentList'
import { UserProvider } from './user/UserProvider'
import { CommentProvider } from './comment/CommentProvider'
import AddCommentForm from './comment/AddCommentForm'

export const Dashboard = () => {
    
    return (
        <div className="mainContainer">
            <UserProvider>
                <ApartmentProvider>
                    <CommentProvider>
                        <AddCommentForm />
                    </CommentProvider>
                        <ApartmentList />
                </ApartmentProvider>
            </UserProvider>
           
        </div>
    )
}