import React, { useContext } from 'react'
import { FavoriteContext } from './FavoriteProvider'
import { Button } from 'reactstrap'
import { ApartmentContext } from '../apartment/ApartmentProvider'
import { UserContext } from '../user/UserProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import "./Favorite.css"

export default ({favorite}) => {
    const {deleteFavorite} = useContext(FavoriteContext)
    const {apartments} = useContext(ApartmentContext)
    const logedInUserId = localStorage.getItem("reviewApartment_user")
    const {users} = useContext(UserContext)
   
    const user = users.find(u=>u.id === parseInt(logedInUserId))
    const apartmentInFavorite = apartments.filter(apt => apt.id === favorite.apartmentId)||{}
    const deleteFromFavorites =()=>{
        deleteFavorite(favorite.id)
    }
    
    if(parseInt(user.id) === parseInt(favorite.userId) && user !== null)
    {
        return(
            <>
                <div className = "favorite">
                    <div>
                        {
                            apartmentInFavorite.map(apt => {
                                return (
                                    <div> 
                                        {apt.apartmentName}{
                                            <div 
                                                className = "deleteFavorites" 
                                                onClick = {(evt) =>{
                                                    evt.preventDefault()
                                                    deleteFromFavorites()
                                            }}><span><FontAwesomeIcon icon={faTrashAlt} /></span></div>
                                        }
                                            
                                    </div>
                                )
                            })    
                        }
                    </div>
                </div>
            </>
        )
    }else{
        return(
            <div className = "favorites">
                <div></div>                
            </div>
        )
    }
}