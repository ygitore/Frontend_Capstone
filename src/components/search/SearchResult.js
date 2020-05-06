import React, { useState, useContext, useEffect } from "react"
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from "reactstrap"
import { EditAnimalForm } from "../animal/EditAnimalForm"
import { ApartmentContext } from "../apartment/ApartmentProvider"


export const SearchResults = ({ searchTerms }) => {
    const { apartments, deleteApartment } = useContext(ApartmentContext)
    const { customers } = useContext(CustomerContext)
    const { locations } = useContext(LocationContext)

    const [filteredApartments, setFiltered] = useState([])
    const [selectedApartment, setApartment] = useState({
        apartment: {},
        location: null,
        customer: null
    })

    // Toggle details modal
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    // Toggle edit modal
    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            setFiltered([])
        }
    }, [searchTerms, animals])

    return (
        <div className="searchResults">
            <h3>Results</h3>
            <div className="animals">
                {
                    filteredApartments.map(animal => <div
                        className="fakeLink href"
                        onClick={() => {
                            const location = locations.find(l => l.id === animal.locationId)
                            const customer = customers.find(c => c.id === animal.customerId)

                            setApartment({ animal, location, customer })
                            toggle()
                        }}
                    >{animal.name}</div>)
                }
            </div>

            <Modal isOpen={editModal} toggle={toggleEdit}>
                <ModalHeader toggle={toggleEdit}>
                    {selectedApartment.animal.name}
                </ModalHeader>
                <ModalBody>
                    <EditAnimalForm key={selectedApartment.animal.id} toggleEdit={toggleEdit} {...selectedApartment} />
                </ModalBody>
            </Modal>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    {selectedApartment.animal.name}
                </ModalHeader>
                <ModalBody>
                    <Animal key={selectedApartment.animal.id} {...selectedApartment} />
                </ModalBody>
                <ModalFooter>
                    <Button color="info" onClick={() => {
                        toggle()
                        toggleEdit()
                    }}>Edit</Button>
                    <Button color="danger" onClick={() => {
                        releaseAnimal(selectedApartment.animal.id)
                        toggle()
                    }}>Delete</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}