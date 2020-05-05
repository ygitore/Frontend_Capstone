import React, { useState } from 'react'
import "./AppController.css"
import "./Layout.css"   
import { ApartmentProvider } from './apartment/ApartmentProvider'
import ApartmentList from './apartment/ApartmentList'
import { UserProvider } from './user/UserProvider'
import { CommentProvider } from './comment/CommentProvider'
import AddCommentForm from './comment/AddCommentForm'
import { LikeProvider } from './like/LikeProvider'

export const Dashboard = () => {
    return (
        <div className="mainContainer">
            <UserProvider>
                <ApartmentProvider>
                    <CommentProvider>
                        <LikeProvider>
                            <AddCommentForm />
                            <ApartmentList />
                        </LikeProvider>

                    </CommentProvider>
                </ApartmentProvider>
            </UserProvider>
           
        </div>
    )
}