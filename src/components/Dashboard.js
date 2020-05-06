import React, { useState, useEffect } from 'react'
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
import CommentList from './comment/CommentList'
import { SearchBar } from "./search/SearchBar";
import { SearchResult } from "./search/SearchResult";
import "./AppController.css"
import "./Layout.css"   

export const Dashboard = () => {
    const [searchTerms, setTerms] = useState(null)
    const [activeList, setActiveList] = useState("allApartments")
    const [components, setComponents] = useState()
    
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    
    // Components needed to display all apartments
    const showAllApartments = () => (
        <UserProvider>
            <ApartmentProvider>
                <CommentProvider>
                    <LikeProvider>
                        <FavoriteProvider>
                            <CommentList />
                            <ApartmentList />
                        </FavoriteProvider>
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
        else if (activeList === "showHomePage") {
            setComponents(showAllApartments)
        }
        
    }, [activeList])
    return (
        <>
         <div className="dataContainer">
                <h1>Review Apartments</h1>
                <div>
                    <UserProvider>
                        <ApartmentProvider>
                            <SearchBar setTerms={setTerms} />
                            <SearchResult searchTerms={searchTerms} />
                        </ApartmentProvider>
                    </UserProvider>        
                </div>
                <div className="listContainer">
                    <div className="links">
                        <div className="fakeLink href" onClick={() => setActiveList("showHomePage")}>Home</div>
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
}