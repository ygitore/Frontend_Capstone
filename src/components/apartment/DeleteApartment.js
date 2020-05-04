import React, { useContext } from 'react'
import { ApartmentContext } from "./ApartmentProvider";
import { Button } from 'reactstrap';

export default (props) => {
    const {apartments, deleteApartment} = useContext(ApartmentContext)
    const apartment = apartments.find(apt => apt.id === props.val)
    const user = localStorage.getItem("reviewApartment_user")
   console.log(parseInt(user))
    return(
        <>
            <div>Are you sure you want to delete {apartment.apartmentName}?</div>
            <Button color="danger" onClick={() => {
                deleteApartment(props.val)
                console.log(props.val)
                props.toggler()
            }}>Delete</Button>
        </>
    )
}