import React, { useState, useContext} from "react"
import {Modal, ModalHeader, ModalBody} from "reactstrap"
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

    const thisUser = localStorage.getItem("reviewApartment_user")
    const userLogged = parseInt(thisUser)
    const checkUser = favorites.find(f=>f.userId === 5)
    console.log("user favorties", thisUser)
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
                <div className = "likesComments">
                    <div className = "compliment likes">{userLikedApartment.length} likes</div>
                    <div 
                        color="info" 
                        size = "sm" 
                        className = "compliment comments"
                        onClick = {
                            toggleUserComments
                        }
                    >{userComments} comments</div>      
                </div>
                <div className = "complimentButtons">
                    <div 
                        color="info" 
                        size="sm" 
                        className = "btns likeButton" 
                        onClick = {() => {
                            count++
                            addLikeToApi()
                        }
                    }>Like</div>
                    <div color="info" size="sm" className = "btns commentButton" onClick = {toggleComment}>Comment</div>
                    <div color="info" size="sm" className = "btns" onClick = {(evt)=> {
                        evt.preventDefault()
                        addNewApartmentToFavorites()
                    }}>favorites</div>
                </div>
                
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
