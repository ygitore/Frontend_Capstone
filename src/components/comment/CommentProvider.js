import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const CommentContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const CommentProvider = (props) => {
    const [comments, setComments] = useState([])

    const getComments = () => {
        return fetch("http://localhost:8088/comments")
            .then(res => res.json())
            .then(setComments)
    }

    const addComment = comment => {
        return fetch("http://localhost:8088/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment)
        })
            .then(getComments)
    }

    const deleteComment = commentId => {
        return fetch(`http://localhost:8088/comments/${commentId}`, {
            method: "DELETE"
        })
            .then(getComments)
    }

    const updateComment = comment => {
        return fetch(`http://localhost:8088/animals/${comment.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment)
        })
            .then(getComments)
    }


    /*
        Load all Comments when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getComments()
    }, [])

    useEffect(() => {
        console.log("****  Comment APPLICATION STATE CHANGED  ****")
    }, [comments])

    return (
        <CommentContext.Provider value={{
            Comments, 
            addComment, 
            deleteComment,
            updateComment
        }}>
            {props.children}
        </CommentContext.Provider>
    )
}