import React, { useContext } from 'react'
import { Button } from 'reactstrap';
import { ApartmentContext } from '../apartment/ApartmentProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import "./MyApartment.css"

export default (props) => {
    const {deleteApartment} = useContext(ApartmentContext)
    return(
        <>
            <div className = "delete-warning">
                <span 
                    className = "warning-sign">&#9888;
                </span>&nbsp;Delete {props.apartmentName}?
            </div>
            <div 
                className = "deleting_my_apartment" 
                onClick={
                    () => {
                    deleteApartment(props.apartmentId)
                    props.toggleDeleteApartment()
                }
            }><FontAwesomeIcon icon = {faTrashAlt} className = "fa-delete-my-apartment"/></div>
        </>
    )
}
