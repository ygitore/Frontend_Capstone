import React, { useContext, useState } from "react"
import { ApartmentContext } from "../apartment/ApartmentProvider"
import { UserContext } from "../user/UserProvider"

export const EditMyApartmentForm = ({ selectedApartment, toggleEditApartment }) => {
    const { updateApartment } = useContext(ApartmentContext)
    const { users } = useContext(UserContext)

    // Separate state variable to track the apartment as it is edited
    const [ updatedApartment, setApartment ] = useState(selectedApartment)

    const handleControlledInputChange = (event) => {
        // Create a new copy of the apartment being edited
        const newApartment = Object.assign({}, updatedApartment)

        // Change the property value on the copy
        newApartment[event.target.name] = event.target.value

        // Set the copy as the new state
        setApartment(newApartment)
    }
    
    const userId = parseInt(localStorage.getItem("reviewApartment_user"))
    const user = users.find(u=>u.id === userId)
    const editApartment = () => {
        
        updateApartment({
            id: updatedApartment.id,
            userId: userId,
            uploadImage: updatedApartment.uploadImage,
            apartmentName: updatedApartment.apartmentName,
            city: updatedApartment.city,
            state: updatedApartment.state,
            description: updatedApartment.description
        })
        .then(toggleEditApartment)        
    }
    return (
        <form className="editApartmentForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="userName">user name: </label>
                    <input 
                        type="text" 
                        name="userName" 
                        required 
                        autoFocus 
                        className="form-control"
                        disabled
                        defaultValue={user.userName}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="apartmentImage">Upload image: </label>
                    <input 
                        type="text" 
                        name = "apartmentImage"
                        className="form-control"
                        defaultValue={selectedApartment.uploadImage}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="apartmentName">apartment name </label>
                    <input type="text"
                        name="apartmentName" 
                        className="form-control"
                        defaultValue={selectedApartment.apartmentName}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <input 
                        type="text" 
                        name="city" 
                        className="form-control"
                        defaultValue={selectedApartment.city}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="state">State:</label>
                    <input 
                        type="text" 
                        name="state" 
                        className="form-control"
                        defaultValue={selectedApartment.state}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">description:</label>
                    <input 
                        type="text" 
                        name="description" 
                        className="form-control"
                        defaultValue={selectedApartment.description}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
           
            <button 
                type="submit" 
                className="btn btn-primary"
                onClick={
                    evt => {
                        evt.preventDefault()
                        editApartment()
                    }
                }>
                Save Changes
            </button>            
        </form>
    )
}