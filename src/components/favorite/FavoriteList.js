import React, { useContext } from 'react'
import { Button } from 'reactstrap'
import { FavoriteContext } from './FavoriteProvider'
import Favorite from './Favorite'
export default() => {
    const {favorites} = useContext(FavoriteContext)
    return (
        <>
            <div className= "favorites">
                {
                    favorites.map(fav => <Favorite key = {fav.id} favorite = {fav}/>)
                }
            </div>
        </>
    )
}
