import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const MyApartmentContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const MyApartmentProvider = (props) => {
    const [myApartments, setMyApartments] = useState([])

    const getMyApartments = () => {
        return fetch("http://localhost:8088/favorites")
            .then(res => res.json())
            .then(setMyApartments)
    }

    const addMyApartment = myApartment => {
        return fetch("http://localhost:8088/favorites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(myApartment)
        })
            .then(getMyApartments)
    }

    const deleteMyApartment = myApartmentId => {
        return fetch(`http://localhost:8088/favorites/${myApartmentId}`, {
            method: "DELETE"
        })
            .then(getMyApartments)
    }

   

    /*
        Load all MyApartments when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getMyApartments()
    }, [])

    useEffect(() => {
        console.log("****  MyApartment APPLICATION STATE CHANGED  ****")
    }, [myApartments])

    return (
        <MyApartmentContext.Provider value={{
            myApartments, 
            addMyApartment, 
            deleteMyApartment
        }}>
            {props.children}
        </MyApartmentContext.Provider>
    )
}