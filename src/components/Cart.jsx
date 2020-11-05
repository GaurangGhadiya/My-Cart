import React from 'react';

const Cart = ({ text,cat, cart, setCart }) => {
    
    const deleteHandler = () => {
        setCart(cart.filter(el => el.id !== cat.id))
    }

    const completeHendler = () => {
        setCart(cart.map((item) => {
            if (item.id === cat.id) {
                return {
                    ...item, completed: !item.completed,
                };
            }
            return item;
        }))
    }

    return ( 
        <div className='todo'>
            <li className={`todo-item ${cat.completed ? "completed" : ""}`}>
                {text}
            </li>
            <button onClick={completeHendler} className='complete-btn'><i className='fas fa-check'></i></button>
            <button onClick={deleteHandler} className='trash-btn'><i className='fas fa-trash'></i></button>
        </div>
     );
}
 
export default Cart;