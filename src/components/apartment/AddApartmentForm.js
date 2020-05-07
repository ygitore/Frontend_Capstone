import React, { useContext, useRef } from "react"
import { ApartmentContext } from "./ApartmentProvider"
import { UserContext } from "../user/UserProvider"

export default props => {
    const { addApartment } = useContext(ApartmentContext)    
    const { users } = useContext(UserContext)
    const apartmentName = useRef()
    const uploadImage = useRef()
    const city = useRef()
    const state = useRef()
    const description = useRef()
    const userId = localStorage.getItem('reviewApartment_user')
    const user = users.find(u => u.id === parseInt(userId))
    const addNewApartment = () => {
        if (userId) {
            addApartment({
                userId:parseInt(userId),
                uploadImage: uploadImage.current.value,
                apartmentName: apartmentName.current.value,
                city: city.current.value,
                state: state.current.value,
                description: description.current.value,
            })
            .then(props.showAllApartments)
        }
    }

    return (
        <form className="apartmentForm">
            <h5 className="Create_new_apartment">Create New Apartment</h5>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="apartmentImage">Upload image: </label>
                    <input
                        type="text"
                        id="uploadImage"
                        ref={uploadImage}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Upload image"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="apartmentName">Apartment name: </label>
                    <input
                        type="text"
                        id="apartmentName"
                        ref={apartmentName}
                        className="form-control"
                        placeholder="Apartment name"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="city">City: </label>
                    <input
                        type="text"
                        id="city"
                        ref={city}
                        required
                        className="form-control"
                        placeholder="city"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="state">State: </label>
                    <input
                        type="text"
                        id="state"
                        ref={state}
                        className="form-control"
                        placeholder="State"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input
                        type="text"
                        id="description"
                        ref={description}
                        className="form-control"
                        placeholder="Description"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="userName">By: </label>
                    <select
                        defaultValue=""
                        name="userId"
                        id="userId"
                        className="form-control">
                        <option value="0">
                        {
                            user.userName
                        }
                        </option>
                        
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        addNewApartment()
                    }
                }
                className="btn btn-primary">
                Create 
            </button>
        </form>
    )
}