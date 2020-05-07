import React, { useState, useContext, useEffect } from "react"
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from "reactstrap"
import { EditApartmentForm } from "../apartment/EditApartment"
import { ApartmentContext } from "../apartment/ApartmentProvider"
import GetApartment from "../apartment/GetApartment"


export const SearchResults = ({ searchTerms }) => {
    const { apartments, deleteApartment } = useContext(ApartmentContext)

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

    // Toggle details modal
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    // Toggle edit modal
    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)
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
                        className="link searchResultLink  href"
                        onClick={() => {
                            setApartment({ apartment})
                            toggle()
                        }}
                    >{apartment.apartmentName}</div>)
                }
            </div>

            <Modal isOpen={editModal} toggle={toggleEdit}>
                <ModalHeader toggle={toggleEdit}>
                    {selectedApartment.apartment.apartmentName}
                </ModalHeader>
                <ModalBody>
                    <EditApartmentForm key={selectedApartment.apartment.id} toggleEdit={toggleEdit} {...selectedApartment} />
                </ModalBody>
            </Modal>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    {selectedApartment.apartment.apartmentName}
                </ModalHeader>
                <ModalBody>
                    <GetApartment key={selectedApartment.apartment.id} {...selectedApartment} />
                </ModalBody>
                <ModalFooter>
                    <Button color="info" onClick={() => {
                        toggle()
                        toggleEdit()
                    }}>Edit</Button>
                    <Button color="danger" onClick={() => {
                        deleteApartment(selectedApartment.apartment.id)
                        toggle()
                    }}>Delete</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}