import React from 'react'

export default ({apartment}) => {
    
    return (
        <div>
            <img 
                src = {apartment.uploadImage} 
                alt = "apartment image" 
                className = "edit_apartment_image" 
            />
        <div>{apartment.apartmentName}</div>
        <div>{apartment.city}, {apartment.state}</div>
        <div>{apartment.description}</div> 
        </div>
    )
}
