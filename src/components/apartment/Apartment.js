import React, { useState, useContext } from "react"
import { Button, Modal, ModalHeader, ModalBody, Alert } from "reactstrap"
import DeleteApartment from "./DeleteApartment"
import {UserContext} from '../user/UserProvider'
import AddCommentForm from '../comment/AddCommentForm'
import { CommentContext } from "../comment/CommentProvider"
import { LikeContext } from "../like/LikeProvider"
import { FavoriteContext } from "../favorite/FavoriteProvider"
import CommentList from "../comment/CommentList";

export default ({apartment}) => {
    const {users} = useContext(UserContext)  
    const {comments} = useContext(CommentContext)
    const {likes} = useContext(LikeContext)
    const {favorites, addFavorite} = useContext(FavoriteContext)

    const [commentModal, setCommentModal] = useState(false)
    const toggleComment = () => setCommentModal(!commentModal)

    const [userCommentModal, setUserCommentModal] = useState(false)
    const toggleUserComment = () => setUserCommentModal(!userCommentModal)
    
    const addNewApartmentToFavorites = () => {

        const favoriteObject = {
            apartmentId:apartment.id,
            userId: parseInt(localStorage.getItem("reviewApartment_user"))
        }
        const apartmentExists = favorites.find(favorite => favorite.apartmentId === apartment.id)
        /* check if apartment to be added to favorites already 
        exists in the favorites section*/
        console.log('apartment exists',apartmentExists)
        if(apartmentExists){
            alert(apartment.apartmentName+" apartment already added to favorites")
        }else{
            addFavorite(favoriteObject)
        }
    }
    //get currently logedin user 
    const loggedInUser = localStorage.getItem("reviewApartment_user") 
    const user = users.find(u => parseInt(u.id) === parseInt(loggedInUser))||{}
    const userComment = comments.filter(comt => comt.apartmentId === apartment.id)
    let userComments = userComment.length
    const likedApartment = likes.filter(like => like.apartmentId === apartment.id)


    return (
        <>
            <section className="apartment">
                <img className = "apartmentImage" src = {apartment.uploadImage} alt = {apartment.uploadImage} />
                <h3 className="apartment__name">{apartment.apartmentName}</h3>
                <h6 className="apartment__name">{apartment.city},{ apartment.state}</h6>
                <p className="apartment__address">{apartment.description}</p>
                <div>{likedApartment.length} likes</div>
                <Button color="info" size = "sm">{userComments} comments</Button>
                <Button color="info" size="sm">Like</Button>
                <Button color="info" size="sm" onClick = {toggleComment}>Comment</Button>
                <Button color="info" size="sm" onClick = {(evt)=> {
                    evt.preventDefault()
                    addNewApartmentToFavorites()
                }}>Add to favorites</Button>
            </section>
            <Modal isOpen = {commentModal} toggle = {toggleComment}>
                <ModalHeader toggle = {toggleComment}>Comment Apartment</ModalHeader>
                <ModalBody>
                    <AddCommentForm toggler = {toggleComment} apartmentCommentId = {apartment.id}/>
                </ModalBody>
            </Modal>     
                 
              
            <Modal isOpen = {commentModal} toggle = {toggleComment}>
                <ModalHeader toggle = {toggleComment}>Comment Apartment</ModalHeader>
                <ModalBody>
                    <AddCommentForm toggler = {toggleComment} apartmentCommentId = {apartment.id}/>
                </ModalBody>
            </Modal>     
                
    </>
    )        
    
}