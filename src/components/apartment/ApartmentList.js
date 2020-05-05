import React, { useContext, useState } from 'react'
import { ApartmentContext } from './ApartmentProvider'
import Apartment from './Apartment'
import './Apartment.css'
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap'
import AddApartmentForm from './AddApartmentForm'
import FavoriteList from '../favorite/FavoriteList'
import { FavoriteProvider } from '../favorite/FavoriteProvider'

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