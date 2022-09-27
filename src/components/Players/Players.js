import React from 'react';
import Player from '../Player/Player';
import './Players.css'

const Players = ({ players }) => {
    return (
        <div className='card-conatiner'>
            {
                players.map(player => (
                    <Player player={player} key={player?.idPlayer}></Player>
                ))
            }

        </div>
    );
};

export default Players;