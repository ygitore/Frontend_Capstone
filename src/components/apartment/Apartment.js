import React, { useState, useContext } from "react"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import DeleteApartment from "./DeleteApartment"
import {UserContext} from '../user/UserProvider'
import AddCommentForm from '../comment/AddCommentForm'
import { CommentContext } from "../comment/CommentProvider"
export default ({apartment}) => {
    const {users} = useContext(UserContext)
    const {comments} = useContext(CommentContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    

    const [commentModal, setCommentModal] = useState(false)
    const toggleComment = () => setCommentModal(!commentModal)
    
    const logedInUser = localStorage.getItem("reviewApartment_user") 
    console.log('loged ',logedInUser)
    const user = users.find(u => parseInt(u.id) === parseInt(logedInUser))
    const userComment = comments.filter(comt => comt.apartmentId === apartment.id)
    let userComments = userComment.length
    if(user.id === parseInt(apartment.userId) && user !== null){
        return (
            <>
                <section className="apartment">
                <img src = {apartment.uploadImage} alt = {apartment.uploadImage} />
                <h3 className="apartment__name">{apartment.apartmentName}</h3>
                <p className="apartment__address">{apartment.description}</p>
                <Button color="info" size="sm" >Like</Button>
                <Button color="info" size = "sm">{userComments} comments</Button>
                <Button color="info" size="sm" onClick = {toggleComment}>Comment</Button>
                <Button color="info" size="sm" >Add to favorites</Button>
                <Button 
                    color="info" 
                    size="sm" 
                    id = {apartment.id} 
                    onClick = {toggle}
                    >delete</Button>                   
                    
                <Modal isOpen = {commentModal} toggle = {toggleComment}>
                    <ModalHeader toggle = {toggleComment}>Comment Apartment</ModalHeader>
                    <ModalBody>
                        <AddCommentForm toggler = {toggleComment} apartmentCommentId = {apartment.id}/>
                    </ModalBody>
                </Modal>     
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
                <Button color="info" size = "sm">{userComments} comments</Button>
                <Button color="info" size="sm" >Comment</Button>
                <Button color="info" size="sm" >Add to favorites</Button>
                       
            </section>
        </>
        )        
    }
    
}