import React from 'react';
import './Player.css';

const Player = ({ player }) => {
    console.log(player);
    const { strNationality, strPlayer, strCutout, strDescriptionEN
    } = player;
    return (
        <div className='card'>
            <img className='card-img' src={strCutout} alt="" />
            <h6>{strPlayer}</h6>
            <button className='card-btn'> Details</button>
            <button className='card-btn'>Add to cart</button>
            <button className='card-btn'>Bookmark</button>
        </div>
    );
};

export default Player;

//01.15