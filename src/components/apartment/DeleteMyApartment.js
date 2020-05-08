import React, { useContext } from 'react'
import { Button } from 'reactstrap';
import { ApartmentContext } from './ApartmentProvider';

export default (props) => {
    const {deleteApartment} = useContext(ApartmentContext)
    return(
        <>
            <div>Are you sure you want to delete {props.apartmentName}?</div>
            <Button color="danger" size = "sm" onClick={() => {
                deleteApartment(props.apartmentId)
                props.toggleDeleteApartment()
            }}>delete</Button>
        </>
    )
}
