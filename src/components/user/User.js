import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserProvider'

export const User = () => {
    const {users} = useContext(UserContext)
    const userId = localStorage.getItem("reviewApartment_user")
    const activeUser = users.find(user => <div>{user.id === userId}</div>)
    return (
        <div>
            {
               activeUser.userName 
            }
        </div>
    )
}

