import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const UserContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const UserProvider = (props) => {
    // Users = data
    // setUsers = function that React created, so we can use it to set state of Users
    const [users, setUsers] = useState([])

    const getUsers = () => {
        return fetch("http://localhost:8088/users")
            .then(res => res.json())
            .then(setUsers)
    }

    const addUser = user => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(getUsers)
    }

    const deleteUser = userId => {
        return fetch(`http://localhost:8088/users/${userId}`, {
            method: "DELETE"
        })
            .then(getUsers)
    }

    const updateUser = user => {
        return fetch(`http://localhost:8088/users/${user.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(getUsers)
    }

    /*
        Load all Users when the component is initialized. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getUsers()
    }, [])

    return (
        <UserContext.Provider value={
            {
                users,
                addUser,
                deleteUser,
                updateUser
            }
        }>
            {props.children}
        </UserContext.Provider>
    )
}