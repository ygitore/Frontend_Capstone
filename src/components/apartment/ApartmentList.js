import React, { useContext, useState } from 'react'
import { ApartmentContext } from './ApartmentProvider'
import Apartment from './Apartment'
import './Apartment.css'
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap'
import AddApartmentForm from './AddApartmentForm'

export default () => {
    const {apartments} = useContext(ApartmentContext)
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    return (
        <>
            <Button color= "info" onClick = {toggle}>Create apartment</Button>
            <Button color= "info" onClick = {toggle}>Add to favorites</Button>
            <Button color= "info" onClick = {toggle}>Search</Button>
            
            <div className="apartments">
                {
                    apartments.map(apt => <Apartment key={apt.id} apartment={apt} />)
                }
            </div>
            <Modal isOpen = {modal} toggle = {toggle}>
                <ModalHeader toggle = {toggle}>
                    New Apartment
                </ModalHeader>
                <ModalBody>
                    <AddApartmentForm toggler = {toggle}/>
                </ModalBody>
            </Modal>
        </>
    )
}