import React, { useContext, useState } from "react"
import { ApartmentContext } from "./ApartmentProvider"
import { UserContext } from "../user/UserProvider"


export const EditApartmentForm = ({ apartment, toggleEdit }) => {
    const { updateApartment } = useContext(ApartmentContext)
    const { users } = useContext(UserContext)

    // Separate state variable to track the apartment as it is edited
    const [ updatedApartment, setApartment ] = useState(apartment)

    /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
    const handleControlledInputChange = (event) => {
        // Create a new copy of the animal being edited
        const newApartment = Object.assign({}, updatedApartment)

        // Change the property value on the copy
        newApartment[event.target.apartmentName] = event.target.value

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
                .then(toggleEdit)
        
    }

    return (
        <form className="animalForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">user name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        placeholder="apartment name"
                        defaultValue={user}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="image">Upload image: </label>
                    <input type="text" className="form-control"
                        placeholder="upload image"
                        defaultValue={apartment.uploadImage}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="apartment">apartment name </label>
                    <select  className="form-control"
                        defaultValue={apartment.apartmentName}
                        onChange={handleControlledInputChange}>
                        <div>{userId}</div>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <input type="text" name="city" disabled className="form-control"
                        defaultValue={apartment.city}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="state">State:</label>
                    <input type="text" name="state" disabled className="form-control"
                        defaultValue={apartment.state}
                    />
                </div>
            </fieldset>
            <button type="submit" className="btn btn-primary"
                onClick={evt => {
                    evt.preventDefault()
                    editApartment()
                }}>
                Save Updates
            </button>
        </form>
    )
}