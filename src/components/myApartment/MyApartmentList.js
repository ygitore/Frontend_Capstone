import React, { useContext } from 'react'
import MyApartment from './MyApartment'
import {ApartmentContext} from '../apartment/ApartmentProvider'
import './MyApartment.css'

export default () => {
    const {apartments} = useContext(ApartmentContext)
    const userId = parseInt(localStorage.getItem("reviewApartment_user"))
    const userApartments = apartments.filter(apt => apt.userId === userId)
    
    return (
        <div className = "my_apartments">
            {
                userApartments.map(apt =><MyApartment key = {apt.id} myApartment = {apt} />)
            }
        </div>
    )
}
