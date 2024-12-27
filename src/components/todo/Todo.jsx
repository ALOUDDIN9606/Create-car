import React, { useReducer, useState } from 'react';

const initalState = {
    count: 0,
    show: false
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'DEC':
            return state.count <= 1 ? state : { ...state, count: state.count - 1 };
        case 'INC':
            return { ...state, count: state.count + 1 };
            case 'SHOW':
                return { ...state, show: !state.show };
        default:
            return state;
    }
};

const Todo = () => {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <div>
        <button onClick={() => setCount((state) => state + 1)}>Todo {count}</button><br />
        <h2>{state.count}</h2>
        <button
          className='bg-red-500 m-2 p-2'
          onClick={() => dispatch({ type: "INC" })}
        >
          INCREMENT
        </button>
        <button
          className='bg-red-500 m-2 p-2'
          onClick={() => dispatch({ type: "DEC" })}
          disabled={state.count <= 1}
        >
          DECREMENT
        </button>

        <button onClick={() => dispatch({ type: "SHOW" })}>Show more</button>
        {
            !state.show && 
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis placeat ratione ducimus sit in, ut dolores error recusandae sunt aliquam, odit at molestiae facere fugit vitae voluptatibus repudiandae, officia et.</p>
            
        }

    </div>
  );
};

export default Todo

