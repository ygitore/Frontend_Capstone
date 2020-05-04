import React, { useContext, useState } from "react"
import { ApartmentContext } from "./ApartmentProvider"


export const EditAnimalForm = ({ apartment, toggleEdit }) => {
    const { updateApartment } = useContext(ApartmentContext)

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
        newApartment[event.target.name] = event.target.value

        // Set the copy as the new state
        setAnimal(newApartment)
    }

    const editAnimal = () => {

        
            updateApartment({
                id: updatedAnimal.id,
                name: updatedAnimal.name,
                breed: updatedAnimal.breed,
                locationId: locationId,
                customerId: parseInt(localStorage.getItem("kennel_customer"))
            })
                .then(toggleEdit)
        
    }

    return (
        <form className="animalForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Animal name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        placeholder="Animal name"
                        defaultValue={animal.name}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="breed">Animal breed: </label>
                    <input type="text" name="breed" required className="form-control"
                        placeholder="Animal breed"
                        defaultValue={animal.breed}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationId">Location: </label>
                    <select name="locationId" className="form-control"
                        defaultValue={animal.locationId}
                        onChange={handleControlledInputChange}>

                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="customer">Customer:</label>
                    <input type="text" name="customer" disabled className="form-control"
                        defaultValue={customer.name}
                    />
                </div>
            </fieldset>
            <button type="submit" className="btn btn-primary"
                onClick={evt => {
                    evt.preventDefault()
                    editAnimal()
                }}>
                Save Updates
            </button>
        </form>
    )
}