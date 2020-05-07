import React, { useContext } from 'react'
import { ApartmentContext } from './ApartmentProvider'
import MyApartment from "./MyApartment";
export default () => {
    const {apartments} = useContext(ApartmentContext)
    const userId = parseInt(localStorage.getItem("reviewApartment_user"))
    const userApartments = apartments.filter(apt => apt.userId === userId)
    
    return (
        <div>
            {
                userApartments.map(apt =><MyApartment key = {apt.id} userApartment = {apt} />)
            }
        </div>
    )
}
