import React, { useContext } from 'react'
import { ApartmentContext } from './ApartmentProvider'
import Apartment from './Apartment'
import './Apartment.css'

export default () => {
    const {apartments} = useContext(ApartmentContext)
    return (
        <>
            <div className="apartments">
                {
                    apartments.map(apt => <Apartment key={apt.id} apartment={apt} />)
                }
            </div>
            
        </>
    )
}