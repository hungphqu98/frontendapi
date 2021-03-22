import React from 'react'

const CharacterItem = ({ item }) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={item.image} alt='' />
                </div>
                <div className='card-back'>
                    <h1>{item.name}</h1>
                    <ul>
                        <li><strong>Gender :</strong> {item.gender}</li>
                        <li><strong>Race:</strong> {item.race}</li>
                        <li><strong>Profession :</strong> {item.profession}</li>
                        <li><strong>Nationality :</strong> {item.nationality}</li>
                        <li><strong>First Appearance :</strong> {item.fappearance}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem
