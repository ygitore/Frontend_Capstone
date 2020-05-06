import React, { useContext } from 'react'
import { FavoriteContext } from './FavoriteProvider'
import { Button } from 'reactstrap'
import { ApartmentContext } from '../apartment/ApartmentProvider'
import { UserContext } from '../user/UserProvider'

export default ({favorite}) => {
    const {deleteFavorite} = useContext(FavoriteContext)
    const {apartments} = useContext(ApartmentContext)
    const logedInUserId = localStorage.getItem("reviewApartment_user")
    const {users} = useContext(UserContext)
    const deleteApartmentFromFavorite = () => {
        deleteFavorite(favorite.id)
    }
    const user = users.find(u=>u.id === parseInt(logedInUserId))
    const apartmentInFavorite = apartments.filter(apt => apt.id === favorite.apartmentId)||{}
    for (const i of apartmentInFavorite) {
        console.log(i.apartmentName)
    }
    if(parseInt(user.id) === parseInt(favorite.userId) && user !== null)
    {
        return(
            <>
                <div className = "favorites">
                    <div>
                        {
                            apartmentInFavorite.map(apt => {
                                return (
                                    <div>
                                        {apt.apartmentName}
                                            <Button color = "info" size = "sm" onClick = {(evt) =>{
                                                evt.preventDefault()
                                                deleteApartmentFromFavorite()
                                            }}>delete</Button>
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