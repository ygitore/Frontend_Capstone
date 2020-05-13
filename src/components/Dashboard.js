import React, { useState, useEffect, useContext } from 'react'
import { ApartmentProvider } from './apartment/ApartmentProvider'
import ApartmentList from './apartment/ApartmentList'
import { UserProvider, UserContext } from './user/UserProvider'
import { CommentProvider } from './comment/CommentProvider'
import { LikeProvider } from './like/LikeProvider'
import { FavoriteProvider } from './favorite/FavoriteProvider'
import AddApartmentForm from './apartment/AddApartmentForm'
import FavoriteList from './favorite/FavoriteList'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import CommentList from './comment/CommentList'
import { SearchBar } from "./search/SearchBar";
import { SearchResults } from "./search/SearchResults";
import MyApartmentList from './myApartment/MyApartmentList'
import { RatingProvider } from './rating/RatingProvider'
import "./AppController.css"
import "./Layout.css"   

export const Dashboard = (props) => {
    const [searchTerms, setTerms] = useState(null)
    const [activeList, setActiveList] = useState("allApartments")
    const [components, setComponents] = useState()
    
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    
    // Components needed to display all apartments
    const showAllApartments = () => (
        <UserProvider>
            <ApartmentProvider>
                <LikeProvider>
                    <CommentProvider>
                        <RatingProvider>
                            <FavoriteProvider>
                                <CommentList />
                                <ApartmentList />
                            </FavoriteProvider>
                        </RatingProvider>
                    </CommentProvider>
                </LikeProvider>
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
    const showMyApartments = () => (
        <UserProvider>
            <ApartmentProvider>
                <MyApartmentList />                
            </ApartmentProvider>
        </UserProvider>
    )
    const showFavorites = () => (
        <UserProvider>
            <ApartmentProvider>
                <FavoriteProvider>
                    <FavoriteList />
                </FavoriteProvider>
            </ApartmentProvider>
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
        else if (activeList === "showMyApartments") {
            setComponents(showMyApartments)
        }
        
    }, [activeList])
   
    return (
        <>
            <ApartmentProvider>
                <div className="mainContainer">  
                    <div className="links">    
                        <div className="main-header navbar">Review Apartments</div>
                        <div className="navbar href" onClick={() => setActiveList("showHomePage")}>Home</div>
                        <div className="navbar href" onClick={() => setActiveList("createApartmentForm")}>Create Apartment</div>
                        <div className="navbar href" onClick={() => setActiveList("showMyApartments")}>My Apartments</div>
                        <div className="navbar href" onClick={() => setActiveList("favorites")}>Favorites</div>
                        <div className="navbar href" onClick={
                            () => {
                                localStorage.setItem("reviewApartment_user","") 
                                props.toggle()
                            }
                        }>Logout</div>
                    </div>
                    <div className="main-section">
                        <div className="searchContainer">
                            <div>
                                <UserProvider>
                                    <ApartmentProvider>
                                        <SearchBar setTerms={setTerms} />
                                        <SearchResults searchTerms={searchTerms} />
                                    </ApartmentProvider>
                                </UserProvider>        
                            </div>
                        </div>
                        <div className="listDisplay">
                            {components}
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
                </div>
            </ApartmentProvider>
            
        </>
    )
}