import React from 'react';
import './Player.css';

const Player = ({ player, cart, setCart }) => {
    const { strPlayer, idPlayer, strCutout } = player;
    const handleAddToCart = (id) => {
        const info = {
            strPlayer,
            strCutout,
            idPlayer,
            price: 115
        };
        if (cart?.length) {
            const isExist = cart.find(selectedProduct => selectedProduct.idPlayer === id)
            if (isExist) {
                alert('Already Selected');
            } else {
                setCart([...cart, info]);
            }
        }
        else {
            setCart([info])
        }
    };
    console.log(cart);
    return (
        <div className='card'>
            <img className='card-img' src={strCutout} alt="" />
            <h6>{strPlayer}</h6>
            <button className='card-btn'> Details</button>
            <button onClick={() => handleAddToCart(idPlayer)} className='card-btn'>Add to cart</button>
            <button className='card-btn'>Bookmark</button>
        </div>
    );
};

export default Player;

// 01.52