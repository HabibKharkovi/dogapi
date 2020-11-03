import React, { useEffect, useState } from 'react';
import Slider from '../image-slider';
import BreedList from '../breedlist';
import SearchBox from '../searchBox';
import './main.scss';

function Main(){

    const [ value, setValue ] = useState('');
    const [ allBreed, setAllBreed ] = useState([]);
    const [ collection, setCollection ] = useState([]);
    const [ breedName, setBreedName] = useState('');

    useEffect(() => fetch(`https://dog.ceo/api/breeds/list/all`)
        .then(response => response.json())
        .then(data => setAllBreed(Object.keys(data.message)))
        .catch(error => console.log(error)), [])

    useEffect(() => fetch(`https://dog.ceo/api/breed/${breedName}/images`)
        .then(response => response.json())
        .then(images =>  {
                images.status !== "error" &&
                breedName.length && setCollection([...collection, {id: collection.length++, breedName, images}])
            }
        
        )
        .catch(error => console.log(error)), [breedName])


    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setBreedName(value);
    }

    const hanldeBreedName = (value) => {
        setBreedName(value);
    }

    const handleDelete = (id) => {
        const collections = collection.filter(item => item.id != id)
        setCollection([...collections])
    }
    
    console.log(collection)

    return(
        <div className="main-body">

            <SearchBox
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />

            {
            collection.length > 0 &&
                <div className="collection-wrap">
                    <div className="collection-list">
                        { 
                            collection.map(item => 
                            <div className="collection" key={item.id}>
                                <span className="close-btn" onClick={() => handleDelete(item.id)}>
                                    <i className="fa fa-times" aria-hidden="true"></i>
                                </span>
                                <div className="collection-item">
                                    {
                                        item.images.message.length > 1 ?
                                        <Slider images={item.images.message} />
                                        : <div className="img-wrap">
                                            <img src={item.images.message[0]}/>
                                        </div>
                                    }
                                    <h3>{item.breedName}</h3>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            }
  
            <BreedList
              hanldeBreedName={hanldeBreedName}
              allBreed={allBreed}
            /> 

        </div>
    )
}


export default Main;