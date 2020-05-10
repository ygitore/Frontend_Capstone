import React, { useContext } from 'react'
import { Button } from 'reactstrap';
import { ApartmentContext } from '../apartment/ApartmentProvider';
import "./MyApartment.css"

export default (props) => {
    const {deleteApartment} = useContext(ApartmentContext)
    return(
        <>
            <div>Are you sure you want to delete {props.apartmentName}?</div>
            <Button 
                color="danger" 
                size = "sm" 
                className = "delete_my_apartment" 
                onClick={
                    () => {
                    deleteApartment(props.apartmentId)
                    props.toggleDeleteApartment()
                }
            }>delete</Button>
        </>
    )
}
