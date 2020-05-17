import React from "react"
import Login from "./Login"
import Register from "./Register"

export default ({toggle}) => {
    return (
        <div className = "big-wrapper">
            <h2 className="business-name">Review Apartments</h2>
            <div className="authContainer">
                <Login toggle={toggle} />
                <Register toggle={toggle} />
            </div>
        </div>
    )
}