import React from 'react';
import { useEffect, useState } from 'react';
import Players from '../Players/Players';
import './Home.css';

const Home = () => {
    const [search, setSearch] = useState("");
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
            .then(res => res.json())
            .then(data => {
                setPlayers(data?.player);
            });
    }, [search]);
    console.log(players);
    return (
        <div>
            <div className='home-container'>
                <div className="left-side">
                    <input onChange={(e) => setSearch(e.target.value)} type="text" className='search-input' placeholder='Input player name here' />
                    <button className='search-btn'>Search</button>
                    <div className="players-container">
                        <Players></Players>
                    </div>
                </div>
                <div className="right-side">
                    <div className="cart">
                        <p>This player cart</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;