import React from 'react';
import './breedList.scss';

function BreedList({ allBreed, hanldeBreedName }) {
    return (
        <div className="breed-list-wrap">
            <h4 className="title">Breeds List</h4>
            <ul className="breed-list">
                {
                    allBreed.map(breed => <li onClick={() => hanldeBreedName(breed)} className="breed" key={breed}>{breed}</li>)
                }
            </ul>
        </div>
    )
}

export default BreedList;