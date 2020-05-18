import React, { useRef } from "react"
import "./Login.css"
import { Button } from "reactstrap"


const Login = props => {
    const email = useRef()
    const password = useRef()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(_ => _.json())
            .then(user => {
                if (user.length) {
                    return user[0]
                }
                return false
            })
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists && exists.password === password.current.value) {
                    localStorage.setItem("reviewApartment_user", exists.id)
                    props.toggle()
                } else if (exists && exists.password !== password.current.value) {
                    window.alert("Password does not match")
                } else if (!exists) {
                    window.alert("User account does not exist")
                }
            })
    }

    return (
        <main className = "container-login">
            <form onSubmit={handleLogin}>
                <div className = "propmpt-signin">Please sign in</div>
                <fieldset>
                    <input 
                        className = "login-email-field"
                        ref={email} 
                        type="email"
                        id="email"
                        autoFocus
                        placeholder="Email address"
                        required autoFocus />
                </fieldset>
                <fieldset>
                    <input 
                        className = "login-password-field"
                        ref={password} 
                        type="password"
                        id="password"
                        placeholder="Password"
                        required />
                </fieldset>
                <fieldset>
                    <Button 
                        className = "login-submit" 
                        type="submit"
                        color = "info"
                        size = "sm"
                    >
                        SiginIn
                    </Button>
                </fieldset>
            </form>
        </main>
    )
}

export default Login