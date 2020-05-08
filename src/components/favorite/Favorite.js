import React, { useContext } from 'react'
import { FavoriteContext } from './FavoriteProvider'
import { Button } from 'reactstrap'
import { ApartmentContext } from '../apartment/ApartmentProvider'
import { UserContext } from '../user/UserProvider'
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
    let count = 0
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
                                            <Button className = "deleteFavorites"color = "danger" size = "sm" onClick = {(evt) =>{
                                                evt.preventDefault()
                                                deleteFromFavorites()
                                            }}>delete</Button>
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