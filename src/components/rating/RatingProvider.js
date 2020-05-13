import React, { useState, useEffect } from "react"


export const RatingContext = React.createContext()


export const RatingProvider = (props) => {
    const [rating, setRating] = useState([])

    const getRating = () => {
        return fetch("http://localhost:8088/rating")
            .then(res => res.json())
            .then(setRating)
    }

    const addRating = rating => {
        return fetch("http://localhost:8088/rating", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(rating)
        })
            .then(getRating)
    }

    const deleteRating = ratingId => {
        return fetch(`http://localhost:8088/Ratings/${ratingId}`, {
            method: "DELETE"
        })
            .then(getRating)
    }

    useEffect(() => {
        getRating()
    }, [])

    useEffect(() => {
    }, [rating])

    return (
        <RatingContext.Provider value={{
            rating, 
            addRating, 
            deleteRating
        }}>
            {props.children}
        </RatingContext.Provider>
    )
}