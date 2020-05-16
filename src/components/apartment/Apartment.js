import React, { useState, useContext} from "react"
import {Modal, ModalHeader, ModalBody, Button} from "reactstrap"
import {UserContext} from '../user/UserProvider'
import AddCommentForm from '../comment/AddCommentForm'
import { CommentContext, CommentProvider } from "../comment/CommentProvider"
import { LikeContext } from "../like/LikeProvider"
import { FavoriteContext } from "../favorite/FavoriteProvider"
import AddApartmentForm from './AddApartmentForm'
import UserRating from "../rating/UserRating"
import Comment from "../comment/Comment";
import { RatingList } from "../rating/RatingList"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faUser } from '@fortawesome/free-solid-svg-icons'
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
  
  
    const loggedInUserId = parseInt(localStorage.getItem("reviewApartment_user"))
    const addNewApartmentToFavorites = () => {
        const favoriteObject = {
            apartmentId:apartment.id,
            userId: loggedInUserId
        }
        
        const apts = favorites.find(favorite => favorite.apartmentId === apartment.id && favorite.userId === loggedInUserId)||{}
        console.log("apartment", apts)
        if("id" in apts){
            window.alert("you already favorited this")
        }else{
            addFavorite(favoriteObject)                        
        }
    }
    //get currently loggedin user 
    const user = users.find(u => parseInt(u.id) === loggedInUserId)||{}

    const userComment = comments.filter(comt => comt.apartmentId === apartment.id)
    let userComments = userComment.length

    const userLikedApartment = likes.filter(like => like.apartmentId === apartment.id)
    const userLiked = likes.filter(like => like.userId === loggedInUserId)
    const alreadyLiked = userLiked.find(u => u.apartmentId === apartment.id)||{}
    
    const [like, setLike] = useState(false)
    const toggleLike = () => setLike(!like)

    const [newApartmentModal, setNewApartmentModal] = useState(false)
    const toggleNewApartmentForm = () => setNewApartmentModal(!newApartmentModal)

    const addLikeToApi = () => { 
        if(user.id){
            if(!userLikedApartment.apartmentId){
                if(like){
                    const userLikedApartment = {
                        userId: loggedInUserId,
                        apartmentId:apartment.id
                    }
                    addLike(userLikedApartment)
                }else {
                    deleteLike(alreadyLiked.id)
                }
            }
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
                <div className="apartment__city_state">
                {
                    (apartment.city.charAt(0).toUpperCase() +
                    apartment.city.slice(1))
                },{
                    apartment.state.charAt(0).toUpperCase() +
                    apartment.state.slice(1)
                }</div>
                <p className="apartment__description">{apartment.description}</p>
                
                <div className = "likeCommentFavRating">
                    <div className = "btns likeBtn_NumOflikes">
                        <div className = "likes">{userLikedApartment.length} likes</div>
                        <div className = "likeButton " 
                            onClick = {
                                () =>{
                                    toggleLike()
                                    addLikeToApi()
                                }
                            }><FontAwesomeIcon 
                                icon={faThumbsUp} 
                                className="fas fa-camera fa-xs fa-like-icon" />Like
                        </div>
                    </div>
                    <div className = "btns comment_num_of_comments">
                        <div  
                            className = "comments"
                            onClick = {
                                toggleUserComments
                            }>{userComments} comments
                        </div>    
                        <Button
                            size = "sm"
                            color = "info" 
                            className = "btns commentButton" 
                            onClick = {toggleComment}>Comment
                        </Button>  
                    </div>
                    <div className = "btns user_rating_stars">
                        <RatingList apt = {apartment} />
                        <UserRating apt = {apartment} /><span className = "star">&#9734;</span>                  
                    </div>
                    <Button
                        size = "sm"
                        color = "info" 
                        className = "btns add_to_favorite" 
                        onClick = {
                            (evt)=> {
                                evt.preventDefault()
                                addNewApartmentToFavorites()
                            }   
                        }>Add to favorites
                    </Button>
                </div>                
            </section>

            <Modal isOpen = {newApartmentModal} toggle = {toggleNewApartmentForm}>
                <ModalHeader toggle = {toggleNewApartmentForm}>Create New Apartment</ModalHeader>
                <ModalBody>
                    <AddApartmentForm toggler = {toggleNewApartmentForm} />
                </ModalBody>
            </Modal> 

            <Modal isOpen = {commentModal} toggle = {toggleComment}>
                <ModalHeader toggle = {toggleComment}>Comment Apartment</ModalHeader>
                <ModalBody>
                    <AddCommentForm toggler = {toggleComment} apartmentCommentId = {apartment.id}/>
                </ModalBody>
            </Modal> 

            <Modal 
                size="md"            
                centered
                isOpen = {user_Comments} 
                toggle = {toggleUserComments}>
                <ModalBody className = "user_Comments">
                    <Comment toggler = {toggleUserComments} apartmentCommentId = {apartment.id}/>
                </ModalBody>
            </Modal> 
        </>
        )        
    }