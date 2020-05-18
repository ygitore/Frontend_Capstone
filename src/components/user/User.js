import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserProvider'

export const User = () => {
    const {users} = useContext(UserContext)

    const userId = parseInt(localStorage.getItem("reviewApartment_user"))
    const activeUser = users.find(user => user.id === userId)||{}

    console.log("user", activeUser.userName)
    return (
        <div>
            {
                activeUser.userName
            }
        </div>
    )
}

