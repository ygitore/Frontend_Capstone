import React, { useContext } from 'react'
import { FavoriteContext } from './FavoriteProvider'
import { Button } from 'reactstrap'
import { ApartmentContext } from '../apartment/ApartmentProvider'

export default ({favorite}) => {
    const {deleteFavorite} = useContext(FavoriteContext)
    const {apartments} = useContext(ApartmentContext)
    const deleteApartmentFromFavorite = () => {
        deleteFavorite(favorite.id)
    }
    return(
        <div className = "favorites">
            <div>{favorite.id}</div>
            <Button color = "info" size = "sm" onClick = {(evt) =>{
                evt.preventDefault()
                deleteApartmentFromFavorite()
            }}>delete</Button>
        </div>
    )
}