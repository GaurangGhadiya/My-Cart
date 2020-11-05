import React from 'react';
import Cart from './Cart';
const CartList = ({cart, setCart, filteredCart}) => {
    return (  
        <>
       <div className="todo-container">
                <ul className="todo-list">
                    {filteredCart.map(cat => (
                        <Cart cart={cart} cat={cat} setCart={setCart} key={cat.id} text={cat.text}/>
                ))}
                </ul>
        </div>
        </>
    );
}
 
export default CartList;
