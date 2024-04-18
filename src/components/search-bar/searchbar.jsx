import React from 'react';
import './searchbar.css';

const SearchBar = ({ handleInputChange }) => {
    return (
        <div className='Search-Container'>
            <input onChange={(event) => {
                handleInputChange(event.target.value);
            }} placeholder='Type something' className='Search-Box'></input>
        </div>

    );
}

export default SearchBar;

