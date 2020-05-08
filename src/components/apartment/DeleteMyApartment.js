import React, { useContext } from 'react'
import { MyApartmentContext } from "./MyApartmentProvider";
import { Button } from 'reactstrap';

export default (props) => {
    const {deleteApartment} = useContext(MyApartmentContext)
    return(
        <>
            <div>Are you sure you want to delete {props.apartmentName}?</div>
            <Button color="danger" onClick={() => {
                deleteApartment(props.apartmentId)
                props.toggleDeleteApartment()
            }}></Button>
        </>
    )
}
