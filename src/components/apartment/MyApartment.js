import React, { useState } from 'react'
import { Button, ModalHeader, ModalBody, Modal } from 'reactstrap'
import DeleteMyApartment from './DeleteMyApartment'

export default ({userApartment}) => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    return (
        <div className="userApartment">
            <img 
                className = "userApartmentImage" 
                src = {userApartment.uploadImage} 
                alt = {userApartment.uploadImage}
            />
            <h4 className="userApartment_name">
            {
                userApartment.apartmentName
            }</h4>
            <h6 className="userApartment__city_state">
                {userApartment.city},{ userApartment.state}
            </h6>
            <p className="userApartment__description">{userApartment.description}</p>
            <Button
                color="danger" 
                size="sm" 
                id = {userApartment.id} 
                className="delete_user_apartment"
                onClick = {toggle}
                >delete</Button>   

            <Modal isOpen = {modal} toggle = {toggle}>
            <ModalHeader toggle = {toggle}>Delete {userApartment.apartmentName}</ModalHeader>
                <ModalBody>
                    <DeleteMyApartment 
                        apartmentId = {userApartment.id} 
                        toggleDeleteApartment = {toggle} 
                    />
                </ModalBody>
            </Modal>     
        </div>
    )
}
