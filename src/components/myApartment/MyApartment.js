import React, { useState } from 'react'
import { Button, ModalHeader, ModalBody, Modal } from 'reactstrap'
import DeleteMyApartment from './DeleteMyApartment'
import {EditMyApartmentForm} from './EditMyApartmentForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './MyApartment.css'

export default ({myApartment}) => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)

    return (
        <>
            <div className="my_apartment">
                <img 
                    className = "my_apartment_image" 
                    src = {myApartment.uploadImage} 
                    alt = {myApartment.uploadImage}
                />
                <div className="my_apartment_name">
                {
                    myApartment.apartmentName.charAt(0)+
                    myApartment.apartmentName.slice(1)
                }</div>
                <div className="my_apartment__city_state">
                    {myApartment.city.charAt(0).toUpperCase() + myApartment.city.slice(1)},
                    { myApartment.state.charAt(0).toUpperCase()+myApartment.state.slice(1)}
                </div>
                <p className="my_apartment__description">{myApartment.description}</p>
                <div className = "edit_delete_btn">
                    <Button
                        size = "sm"
                        color = "info"
                        id = {myApartment.id} 
                        className="edit_my_apartment"
                        onClick = {toggleEdit}
                    >Edit</Button>

                    <div
                        id = {myApartment.id} 
                        className="delete_my_apartment"
                        onClick = {toggle}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                    </div>
                </div>
            </div>
            <Modal isOpen = {modal} toggle = {toggle} size = "sm">
            <ModalHeader toggle = {toggle}>{myApartment.apartmentName}
            </ModalHeader>
            <ModalBody>
                <DeleteMyApartment 
                    apartmentId = {myApartment.id} 
                    toggleDeleteApartment = {toggle} 
                />
            </ModalBody>
            </Modal>   

            <Modal isOpen = {editModal} toggle = {toggleEdit}>
            <ModalHeader toggle = {toggleEdit}>Edit {myApartment.apartmentName}</ModalHeader>
                <ModalBody>
                    <EditMyApartmentForm 
                        selectedApartment = {myApartment} 
                        toggleEditApartment = {toggleEdit} 
                    />
                </ModalBody>
            </Modal>  
        </>
    )
}
