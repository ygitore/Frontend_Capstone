import React from "react"
import Login from "./Login"
import Register from "./Register"

export default ({toggle}) => {
    return (
        <>
            <h1 className="business-name">Review Apartments</h1>
            <div className="authContainer">
                <Login toggle={toggle} />
                <Register toggle={toggle} />
            </div>
        </>
    )
}