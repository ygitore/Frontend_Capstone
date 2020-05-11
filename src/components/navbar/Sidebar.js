import React, { useState } from 'react'
import styled from 'styled-components'

const StyledNavbar = styled.div `
    background-color: 'yellow';
    width:2rem;
    height: 2rem;
    top:10px;
    left:20px;
    position:fixed;
    display:flex;
    justfiy-content:space-between;
    flex-flow: column nowrap;
    transition:all 0.3s linear;
    div{
        width:2rem;
        height: 0.25rem;
        margin-bottom:0.5rem;
        border-radius: 10px;
        background-color: ${({open})=> open ? "grey" : "#c2c2c2"};
        &:nth-child(1){
            transform: ${({open})=> open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2){
            transform: ${({open})=> open ? "translateX(100%)" : "translateX(0)"};
            ${({open})=> open ? 0 : 1};
        }
        &:nth-child(3){
            transform: ${({open})=> open ? "rotate(-45deg)" : "rotate(0)"};
        }
    }
`;
const Sidebar = () => {
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(!open)
    return (
        <StyledNavbar open = {open} onClick = {toggle}>
            <div></div>
            <div></div>
            <div></div>
        </StyledNavbar>
    )
}

export default Sidebar
