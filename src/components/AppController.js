import React, { useState, useContext } from "react"
import {Dashboard} from "./Dashboard"
import Auth from "./auth/Auth"

export default () => {
    const [check, update] = useState(false)
    const toggle = () => update(!check)
    return (
        localStorage.getItem("reviewApartment_user") ? <Dashboard toggle={toggle} /> : <Auth toggle={toggle} />
    )
}
