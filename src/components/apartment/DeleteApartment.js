import React, { useContext } from 'react'
import { ApartmentContext } from "./ApartmentProvider";
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Apartment.css"

export default (props) => {
    const {deleteApartment} = useContext(ApartmentContext)
    return(
        <>
            <div>Are you sure you want to delete {props.apartmentName}?</div>
            <Button 
                color="danger" 
                className = "delete_Apartment"
                onClick={
                    () => {
                    deleteApartment(props.apartmentId)
                    props.toggleDeleteApartment()
                }
            }>Delete</Button>
        </>
    )
}