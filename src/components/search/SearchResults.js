import React, { useState, useContext, useEffect } from "react"
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from "reactstrap"
import { ApartmentContext } from "../apartment/ApartmentProvider"
import GetApartment from "../apartment/GetApartment"
import '../Layout.css'

export const SearchResults = ({ searchTerms }) => {
    const { apartments } = useContext(ApartmentContext)

    const userId = parseInt(localStorage.getItem("reviewApartment_user"))
    const [filteredApartments, setFiltered] = useState([])
    const [selectedApartment, setApartment] = useState({
        apartment: {
            userId: userId,
            apartmentName: "",
            city:"",
            state:"",
            uploadImage:"",
            description:""
        },        
    })

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = apartments.filter(apt => apt.apartmentName.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            setFiltered([])
        }
    }, [searchTerms, apartments])

    return (
        <div className="searchResults">
            <div className="searchapartments">
                {
                    filteredApartments.map(apartment => <div
                        className="searchLink searchResultLink  href"
                        onClick={() => {
                            setApartment({ apartment})
                            toggle()
                        }}
                    >{apartment.apartmentName}</div>)
                }
            </div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalBody>
                    <GetApartment key={selectedApartment.apartment.id} {...selectedApartment} />
                </ModalBody>                
            </Modal>
        </div>
    )
}