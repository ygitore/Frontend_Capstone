import React, { useState } from 'react'
import { Button, ModalHeader, ModalBody, Modal } from 'reactstrap'
import DeleteMyApartment from './DeleteMyApartment'

export default ({userApartment}) => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    return (
        <div>
            <img className = "userApartmentImage" src = {userApartment.uploadImage} alt = {userApartment.uploadImage} />
                <h3 className="userApartment__name">{userApartment.userApartmentName}</h3>
                <h6 className="userApartment__name">{userApartment.city},{ userApartment.state}</h6>
                <p className="userApartment__address">{userApartment.description}</p>
                <Button 
                        color="info" 
                        size="sm" 
                        id = {userApartment.id} 
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
