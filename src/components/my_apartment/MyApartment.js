import React from 'react'

export default ({userApartment}) => {
    return (
        <div>
            <img className = "userApartmentImage" src = {userApartment.uploadImage} alt = {userApartment.uploadImage} />
                <h3 className="userApartment__name">{userApartment.userApartmentName}</h3>
                <h6 className="userApartment__name">{userApartment.city},{ userApartment.state}</h6>
                <p className="userApartment__address">{userApartment.description}</p>
                
        </div>
    )
}
