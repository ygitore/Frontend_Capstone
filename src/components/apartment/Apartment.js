import React, { useState, useContext } from "react"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import DeleteApartment from "./DeleteApartment"
import {UserContext} from '../user/UserProvider'
import { ApartmentContext } from "./ApartmentProvider"
export default ({apartment}) => {
    const {users} = useContext(UserContext)
    const {apartments} = useContext(ApartmentContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    const logedInUser = localStorage.getItem("reviewApartment_user") 
    console.log('loged ',logedInUser)
    const user = users.find(u => parseInt(u.id) === parseInt(logedInUser))
    console.log("object", users)
    if(user.id === parseInt(apartment.userId) && user !== null){
        return (
            <>
                <section className="apartment">
                <h3 className="apartment__name">{apartment.apartmentName}</h3>
                <p>Image goes here</p>
                <p className="apartment__address">{apartment.description}</p>
                <Button color="info" size="sm">Like</Button>
                <Button color="info" size="sm" >Comment</Button>
                <Button color="info" size="sm" >Add to favorites</Button>
                <Button 
                    color="info" 
                    size="sm" 
                    id = {apartment.id} 
                    onClick = {toggle}
                    >delete</Button>                   
                    
                <Modal isOpen = {modal} toggle = {toggle}>
                    <ModalHeader>Delete Apartment</ModalHeader>
                    <ModalBody>
                        <DeleteApartment toggler = {toggle} val = {apartment.id} />
                    </ModalBody>
                </Modal>        
            </section>
        </>
        )    
    }else{
        return (
            <>
                <section className="apartment">
                <h3 className="apartment__name">{apartment.apartmentName}</h3>
                <p>Image goes here</p>
                <p className="apartment__address">{apartment.description}</p>
                <Button color="info" size="sm">Like</Button>
                <Button color="info" size="sm" >Comment</Button>
                <Button color="info" size="sm" >Add to favorites</Button>
                       
            </section>
        </>
        )        
    }
    
}