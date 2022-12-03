import React from 'react'
import { SiPokemon } from 'react-icons/si'

const Header = (props) => {
    return (
        <div className='header'>
            <h1>{props.name} <SiPokemon className='icons' /></h1>
        </div>
    )
}

export default Header
