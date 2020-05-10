import React, { useState } from 'react'
import { Button, ModalHeader, ModalBody, Modal } from 'reactstrap'
import DeleteMyApartment from './DeleteMyApartment'
import {EditMyApartmentForm} from './EditMyApartmentForm'
import './MyApartment.css'

export default ({myApartment}) => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)

    return (
        <div className="userApartment">
            <img 
                className = "userApartmentImage" 
                src = {myApartment.uploadImage} 
                alt = {myApartment.uploadImage}
            />
            <h4 className="userApartment_name">
            {
                myApartment.apartmentName
            }</h4>
            <h6 className="userApartment__city_state">
                {myApartment.city},{ myApartment.state}
            </h6>
            <p className="userApartment__description">{myApartment.description}</p>
            
            <Button
                color="info" 
                size="sm" 
                id = {myApartment.id} 
                className="edit_my_apartment"
                onClick = {toggleEdit}
            >edit</Button>

            <Button
                color="danger" 
                size="sm" 
                id = {myApartment.id} 
                className="delete_my_apartment"
                onClick = {toggle}
            >delete</Button> 

            <Modal isOpen = {modal} toggle = {toggle}>
            <ModalHeader toggle = {toggle}>Delete {myApartment.apartmentName}</ModalHeader>
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
        </div>
    )
}
