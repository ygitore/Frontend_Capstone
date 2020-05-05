import React, { useState } from 'react'
import "./AppController.css"
import "./Layout.css"   
import { ApartmentProvider } from './apartment/ApartmentProvider'
import ApartmentList from './apartment/ApartmentList'
import { UserProvider } from './user/UserProvider'
import { CommentProvider } from './comment/CommentProvider'
import AddCommentForm from './comment/AddCommentForm'

export const Dashboard = () => {
    const [userComment, setUserComment] = useState(false)
    const toggleUsersComment = () => setUserComment(!userComment)
    return (
        <div className="mainContainer">
            <UserProvider>
                <ApartmentProvider>
                    <CommentProvider>
                        <AddCommentForm />
                        <ApartmentList />

                    </CommentProvider>
                </ApartmentProvider>
            </UserProvider>
           
        </div>
    )
}