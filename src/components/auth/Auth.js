import React, { useEffect, useState } from "react"
import Login from "./Login"
import Register from "./Register"
import { Button } from "reactstrap"

export default ({toggle}) => {

    const [activeList, setActiveList] = useState("login")
    const [component, setComponent] = useState()

    const showLogin = () => (
        <Login toggle={toggle} setActiveList={setActiveList}/>
    )
    const showRegister = () => (
        <Register toggle={toggle} setActiveList={setActiveList}/>
    )
    useEffect(() => {
        if(activeList === "login"){
            setComponent(showLogin)
        }
        if(activeList === "register"){
            setComponent(showRegister)
        }
    }, [activeList])
    return (
        <div className = "big-wrapper">
            <h2 className="welcome">Welcome to Review Apartments</h2>
            <div className="authContainer">
            <div className="navbar href" onClick={() => setActiveList("login")}>Login</div>
            <div className="navbar href" onClick={() => setActiveList("register")}>Register</div>
            <div>
                {component}
            </div>
            </div>
        </div>
    )
}