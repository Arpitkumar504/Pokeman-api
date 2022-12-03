import React from 'react'
import { BiCopyright } from 'react-icons/bi'
const Footer = (props) => {
    return (
        <div className='footer'>
            <h1>{props.name} <BiCopyright /> All Right Reserved</h1>
        </div>
    )
}

export default Footer