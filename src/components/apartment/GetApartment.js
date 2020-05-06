import React from 'react'

export default ({apartment}) => {
    
    return (
        <div>
            <img src = {apartment.uploadImage} alt = "apartment image" />
            <h2>{apartment.apartmentName}</h2>
            <div>{apartment.city}</div>
            <div>{apartment.state}</div>
            <div>{apartment.description}</div>
        </div>
    )
}
