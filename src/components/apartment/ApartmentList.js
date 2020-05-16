import React, { useContext } from 'react'
import { ApartmentContext } from './ApartmentProvider'
import Apartment from './Apartment'
import './Apartment.css'

export default () => {
    const {apartments} = useContext(ApartmentContext)

    const apartmentList = apartments.slice().sort((a, b) =>{
            if(a.date_time < b.date_time) return 1
            if(a.date_time > b.date_time) return -1
            return 0
        })
    return (
        <>
            <div className="apartments">
                {
                    apartmentList.map(apt => <Apartment key={apt.id} apartment={apt} />)
                }
            </div>
            
        </>
    )
}