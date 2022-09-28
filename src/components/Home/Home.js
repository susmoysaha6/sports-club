import React from 'react';
import { useEffect, useState } from 'react';
import Players from '../Players/Players';
import './Home.css';
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
    const [search, setSearch] = useState("");
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
            .then(res => res.json())
            .then(data => {
                setPlayers(data?.player);
            });
    }, [search]);
    const handleDelete = (id) => {
        const leftPlayer = cart.filter(cartItem => cartItem.idPlayer !== id);
        setCart(leftPlayer);
        toast("You deleted a player from cart");
    };
    return (
        <div>
            <div className='home-container'>
                <div className="left-side">
                    <input onChange={(e) => setSearch(e.target.value)} type="text" className='search-input' placeholder='Input player name here' />
                    <button className='search-btn'>Search</button>
                    <div className="players-container">
                        <Players players={players} cart={cart} setCart={setCart}></Players>
                    </div>
                </div>
                <div className="right-side">
                    <div className="cart">
                        <h1>This is cart</h1>
                        {
                            cart.map(p => (
                                <div key={p.idPlayer} className='cart-item'>
                                    <img width={50} src={p.strCutout} alt="" />
                                    <p className='player-name'>{p.strPlayer}</p>
                                    <button onClick={() => handleDelete(p.idPlayer)} className='delete-btn'>x</button>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;