import React from 'react';

const Form = ({setInputText, cart, setCart, inputText, setStatus}) => {

    const inputTextHendler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value)
    };

    const submitCartHendler = (e) => {
        e.preventDefault();
        setCart([
            ...cart, { text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        setInputText("");
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return ( 
        <>
        <form>
      <input value={inputText} onChange={inputTextHendler} type="text" className="todo-input" />
      <button onClick={submitCartHendler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>    
        </>
     );
}
 
export default Form;