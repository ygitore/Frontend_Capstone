import React from 'react'
import './Apartment.css'
export default ({apartment}) => {
    
    return (
        <div>
            <img 
                src = {apartment.uploadImage} 
                alt = "apartment image" 
                className = "edit_apartment_image" 
            />
        <div className = "_search_Apartment_name">{apartment.apartmentName.charAt(0).toUpperCase()+
            apartment.apartmentName.slice(1)}
        </div>
        <div className = "_search_city-and-state">{apartment.city.charAt(0).toUpperCase()+apartment.city.slice(1)}, 
            {apartment.state.charAt(0).toUpperCase()+apartment.state.slice(1)}
        </div>
        <div>{apartment.description}</div> 
        </div>
    )
}
