import React from 'react';
import './Player.css';
import Swal from 'sweetalert2'

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
                Swal.fire(
                    'You Already Selected This Player',
                    'Try Another',
                    'failed'
                );
                return;
                // alert('Already Selected');
            } else {
                setCart([...cart, info]);
            }
        }
        else {
            setCart([info])
        }
    };
    const handleBookmark = () => {
        const info = {
            strPlayer,
            strCutout,
            idPlayer,
            quantity: 1,
            bookmark: true
        };
        const prevBookmark = localStorage.getItem('bookmark');
        const oldBookmark = JSON.parse(prevBookmark);
        if (oldBookmark) {
            const isExist = oldBookmark.find(bookmarked => bookmarked.idPlayer === idPlayer);
            if (isExist) {
                const prevQuantity = parseFloat(isExist.quantity);
                const newQuantity = prevQuantity + 1;
                isExist.quantity = newQuantity;
                localStorage.setItem('bookmark', JSON.stringify(oldBookmark));
                return;
            } else {
                localStorage.setItem('bookmark', JSON.stringify([...oldBookmark, info]));
            }
        }
        else {
            localStorage.setItem('bookmark', JSON.stringify([info]));
        }

    };
    return (
        <div className='card' data-aos="zoom-in">
            <img className='card-img' src={strCutout} alt="" />
            <h6>{strPlayer}</h6>
            <button className='card-btn'> Details</button>
            <button onClick={() => handleAddToCart(idPlayer)} className='card-btn'>Add to cart</button>
            <button className='card-btn' onClick={handleBookmark}>Bookmark</button>
        </div>
    );
};

export default Player;

// 01.52