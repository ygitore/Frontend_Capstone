import React, { useContext, useRef, useState } from "react"
import { UserContext } from "../user/UserProvider"
import { CommentContext } from "./CommentProvider"
import { ApartmentContext } from "../apartment/ApartmentProvider"
import { ModalHeader, Modal, ModalBody } from "reactstrap"
import Comment from './Comment'
export default () => {
    const { comments } = useContext(CommentContext)    
    const { users } = useContext(UserContext)
    const { apartments } = useContext(ApartmentContext)
    const apartment = apartments.filter(apt => apt.id === comments.apartmentId)
    const userId = localStorage.getItem('reviewApartment_user')
    
    const [userCommentModal, setUserCommentModal] = useState(false)
    const toggleUserComment = () => setUserCommentModal(!userCommentModal)
    

    return (
        <>
            <div>
                    
            </div>
            <Modal isOpen = {userCommentModal} toggle = {toggleUserComment}>
                <ModalHeader toggle = {toggleUserComment}>Comment Apartment</ModalHeader>
                <ModalBody>
                </ModalBody>
            </Modal>                     
                
        </>
        
    )
}