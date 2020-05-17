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
                <Button color = "info" size = "sm" className="login-page-button" onClick={() => setActiveList("login")}>Login</Button>
                <Button color = "info" size = "sm" className="register-page-button" onClick={() => setActiveList("register")}>Register</Button>
            </div>
            <div>
                {component}
            </div>
        </div>
    )
}