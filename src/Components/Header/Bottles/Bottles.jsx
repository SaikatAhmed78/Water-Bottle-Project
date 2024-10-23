import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLocalStorage, getStoredCart, removeFromLocalStorage } from "../../../utilities/localstorage";
import Cart from "../Cart/Cart";


const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    // load cart from local storage
    useEffect(() => {
        if (bottles.length > 0) {
            const storedCart = getStoredCart();
            const saveCart = [];


            for (const id of storedCart) {
                console.log(id)
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle) {
                    saveCart.push(bottle)
                }
            }
            setCart(saveCart)
        }

    }, [bottles])


    const handleAddToCart = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart)
        addToLocalStorage(bottle.id)
    }

    const handleRemoveFromCart = id =>{
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart)

        removeFromLocalStorage(id)
    }

    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
           
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>

            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handleAddToCart={handleAddToCart}
                    ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;