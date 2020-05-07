import React, { useState, useContext, useEffect } from "react"
import { Button, Modal, ModalHeader, ModalBody, Alert } from "reactstrap"
import DeleteApartment from "./DeleteApartment"
import {UserContext} from '../user/UserProvider'
import AddCommentForm from '../comment/AddCommentForm'
import { CommentContext, CommentProvider } from "../comment/CommentProvider"
import { LikeContext } from "../like/LikeProvider"
import { FavoriteContext } from "../favorite/FavoriteProvider"
import Comment from "../comment/Comment";
import './Apartment.css'

export default ({apartment}) => {
    const {users} = useContext(UserContext)  
    const {comments} = useContext(CommentContext)
    const {likes, addLike, deleteLike} = useContext(LikeContext)
    const {favorites, addFavorite} = useContext(FavoriteContext)

    const [commentModal, setCommentModal] = useState(false)
    const toggleComment = () => setCommentModal(!commentModal)

    const [user_Comments, setUserComments] = useState(false)
    const toggleUserComments = () => setUserComments(!user_Comments)

    // const [likeModal, setLikeModal] = useState(false)
    // const toggleLike = () => setLikeModal(!likeModal)

    
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
    const loggedInUser = parseInt(localStorage.getItem("reviewApartment_user")) 
    const user = users.find(u => parseInt(u.id) === parseInt(loggedInUser))||{}
    const userComment = comments.filter(comt => comt.apartmentId === apartment.id)
    let userComments = userComment.length
    const userLikedApartment = likes.filter(like => like.apartmentId === apartment.id)
    const userLiked = likes.filter(like => like.userId === loggedInUser)
    
    const alreadyLiked = userLiked.filter(u => u.apartmentId === apartment.id)
    console.log("i liked this apartment", alreadyLiked.length)
    if(alreadyLiked.length >= 1) {
        console.log("more than one", alreadyLiked)
    }else{
    }   
    
    let count = 0
    const addLikeToApi = () => {      
        if(alreadyLiked.length >= 1 && count > 1) {

        }else{
            const userLikedApartment = {
                userId: loggedInUser,
                apartmentId:apartment.id
            }
            addLike(userLikedApartment)
            count = 1           
        }

        
    }
    return (
        <>
            <section className="apartment">
                <img 
                    className = "apartmentImage" 
                    src = {apartment.uploadImage} 
                    alt = {apartment.uploadImage} 
                />
                <h3 className="apartment__name">
                {
                    apartment.apartmentName.charAt(0).toUpperCase() +
                    apartment.apartmentName.slice(1)
                }</h3>
                <h6 className="apartment__city_state">
                {
                    (apartment.city.charAt(0).toUpperCase() +
                    apartment.city.slice(1))
                },{
                    (apartment.state.charAt(0).toUpperCase()) +
                    apartment.state.slice(1)
                }</h6>
                <p className="apartment__description">{apartment.description}</p>
                <div className = "likes">{userLikedApartment.length} likes</div>
                <div 
                    color="info" 
                    size = "sm" 
                    className = "comments"
                    onClick = {
                        toggleUserComments
                    }
                >{userComments} comments</div>
                <Button 
                    color="info" 
                    size="sm" 
                    className = "likeButton" 
                    onClick = {() => {
                        count++
                        addLikeToApi()
                    }
                }>Like</Button>
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

            <Modal isOpen = {user_Comments} toggle = {toggleUserComments}>
                <ModalHeader toggle = {toggleUserComments}>Comments</ModalHeader>
                <ModalBody>
                    <Comment toggler = {toggleUserComments} apartmentCommentId = {apartment.id}/>
                </ModalBody>
            </Modal> 
        </>
        )        
    }
