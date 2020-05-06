import React, { useContext, useRef } from "react"
import { UserContext } from "../user/UserProvider"
import { CommentContext } from "./CommentProvider"
import { ApartmentContext } from "../apartment/ApartmentProvider"

export default props => {
    const { comments } = useContext(CommentContext)    
    const { users } = useContext(UserContext)
    const { apartments } = useContext(ApartmentContext)

    const userId = localStorage.getItem('reviewApartment_user')
    const comment = apartments.filter(apt => apt.id === comments.apartmentId)
  
    return (
        <form>
            <fieldset>
               
            </fieldset>
        </form>
    )
}