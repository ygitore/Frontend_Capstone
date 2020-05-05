import React, { useState, useEffect } from 'react'
import "./AppController.css"
import "./Layout.css"   
import { ApartmentProvider } from './apartment/ApartmentProvider'
import ApartmentList from './apartment/ApartmentList'
import { UserProvider } from './user/UserProvider'
import { CommentProvider } from './comment/CommentProvider'
import AddCommentForm from './comment/AddCommentForm'
import { LikeProvider } from './like/LikeProvider'
import { FavoriteProvider } from './favorite/FavoriteProvider'
import AddApartmentForm from './apartment/AddApartmentForm'
import FavoriteList from './favorite/FavoriteList'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'

export const Dashboard = () => {
    const [activeList, setActiveList] = useState("allApartments")
    const [components, setComponents] = useState()
    
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const [modalCreateApartment, setmodalCreateApartment] = useState(false)
    const toggleCreateApartment = () => setmodalCreateApartment(!modalCreateApartment)

    const [modalFavorite, setModalFavortie] = useState(false)
    const favoriteToggler = () => setModalFavortie(!modalFavorite)

    // Components needed to display all apartments
    const showAllApartments = () => (
        <UserProvider>
            <ApartmentProvider>
                <CommentProvider>
                    <LikeProvider>
                        <ApartmentList />
                    </LikeProvider>
                </CommentProvider>
            </ApartmentProvider>
        </UserProvider>
    )

    const showCreateApartmentForm = () => (
        <UserProvider>
            <ApartmentProvider>
                <AddApartmentForm showAllApartments={()=>setActiveList("allApartments")} />
            </ApartmentProvider>
        </UserProvider>
    )
    const showFavorites = () => (
        <UserProvider>
            <FavoriteProvider>
                <ApartmentProvider>
                    <FavoriteList />
                </ApartmentProvider>
            </FavoriteProvider>
        </UserProvider>
    )
    useEffect(() => {
        if (activeList === "allApartments") {
            setComponents(showAllApartments)
        }
        else if (activeList === "createApartmentForm") {
            setComponents(showCreateApartmentForm)
        }
        else if (activeList === "favorites") {
            setComponents(showFavorites)
        }
        
    }, [activeList])
    return (
        <>
         <div className="dataContainer">
                <h1>Review Apartments</h1>
                <div className="listContainer">
                    <div className="links">
                        <div className="fakeLink href" onClick={() => setActiveList("createApartmentForm")}>Create Apartment</div>
                        <div className="fakeLink href" onClick={() => setActiveList("favorites")}>Favorites</div>
                    </div>
                    <div className="listDisplay">
                        {components}
                    </div>
                </div>

            </div>

        <Modal isOpen = {modal} toggle = {toggle}>
            <ModalHeader toggle = {toggle}>
                New Apartment
            </ModalHeader>
            <ModalBody>
                <AddApartmentForm toggler = {toggle}/>
            </ModalBody>
        </Modal>
        </>
    )


    /*
    
        return (
        <>
        <div className="mainContainer">
            <UserProvider>
                <ApartmentProvider>
                    <CommentProvider>
                        <LikeProvider>
                            <FavoriteProvider>
                                <AddCommentForm />
                                <ApartmentList />
                            </FavoriteProvider>
                        </LikeProvider>

                    </CommentProvider>
                </ApartmentProvider>
            </UserProvider>
           
        </div>
        <Modal isOpen = {modal} toggle = {toggle}>
            <ModalHeader toggle = {toggle}>
                New Apartment
            </ModalHeader>
            <ModalBody>
                <AddApartmentForm toggler = {toggle}/>
            </ModalBody>
        </Modal>
        </>
    )
    
    */
}