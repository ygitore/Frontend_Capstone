import React, { useRef } from "react"
import "./Login.css"
import { Button } from "reactstrap"

const Register = props => {
    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    
    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(_ => _.json())
            .then(user => {
                if (user.length) {
                    return true
                }
                return false
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            existingUserCheck()
                .then(() => {
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email.current.value,
                            password: password.current.value,
                            userName: `${firstName.current.value} ${lastName.current.value}`
                        })
                    })
                        .then(_ => _.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("reviewApartment_user", createdUser.id)
                                props.toggle()
                            }
                        })
                })
        } else {
            window.alert("Passwords do not match")
        }
    }

    return (
        <main className = "container-register">
            <form onSubmit={handleRegister}>
                <div className = "create-account">Create account</div>
                <fieldset>
                    <input 
                        className = "register-firstname-field"
                        ref={firstName} 
                        type="text"
                        name="firstName"
                        placeholder="first name"
                        required  
                    />
                </fieldset>
                <fieldset>
                    <input 
                        className = "register-lastname-field"
                        ref={lastName} 
                        type="text"
                        name="lastName"
                        placeholder="last name"
                        required />
                </fieldset>
                <fieldset>
                    <input 
                        className = "register-email-field"
                        ref={email} 
                        type="email"
                        name="email"
                        placeholder="email address"
                        required 
                    />
                </fieldset>
                <fieldset>
                    <input 
                        className = "register-password-field"
                        ref={password} 
                        type="password"
                        name="password"
                        placeholder="password"
                        required />
                </fieldset>
                <fieldset>
                    <input 
                        className = "register-verify-password"
                        ref={verifyPassword} 
                        type="password"
                        name="verify-Password"
                        placeholder="verify password"
                        required />
                </fieldset>
                <fieldset>
                    <Button 
                        color = "info" 
                        size = "sm" 
                        type="submit" 
                        className = "register-signin-btn"
                    >
                        Sign in
                    </Button>
                </fieldset>
            </form>
        </main>
    )
}

export default Register