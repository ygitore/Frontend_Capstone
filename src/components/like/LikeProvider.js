import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const LikeContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const LikeProvider = (props) => {
    const [likes, setLikes] = useState([])

    const getLikes = () => {
        return fetch("http://localhost:8088/likes")
            .then(res => res.json())
            .then(setLikes)
    }

    const addLike = like => {
        return fetch("http://localhost:8088/likes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(like)
        })
            .then(getLikes)
    }

    const deleteLike = likeId => {
        return fetch(`http://localhost:8088/likes/${likeId}`, {
            method: "DELETE"
        })
            .then(getLikes)
    }

    const updateLike = like => {
        return fetch(`http://localhost:8088/likes/${like.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(like)
        })
            .then(getLikes)
    }


    /*
        Load all Likes when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getLikes()
    }, [])

    useEffect(() => {
        console.log("****  Like APPLICATION STATE CHANGED  ****")
    }, [likes])

    return (
        <LikeContext.Provider value={{
            Likes, 
            addLike, 
            deleteLike,
            updateLike
        }}>
            {props.children}
        </LikeContext.Provider>
    )
}