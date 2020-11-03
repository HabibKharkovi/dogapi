

import React from 'react';
import './searchBox.scss';

function SearchBox({ handleChange, handleSubmit }) {
    return (
        <div className="search-box">
            <form onSubmit={(e) => handleSubmit(e)}>
                <input placeholder="search breed" onChange={e => handleChange(e)}/>
                <button type="submit">Add Breed</button>
            </form>
        </div>
    )
}

export default SearchBox;
