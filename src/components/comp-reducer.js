import React, { useReducer } from 'react';

/*******************Вспомогательное***************************** */
const init = (initialCount) => ({ count: initialCount });

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return init(action.payload);
    default:
      throw new Error('invalid action.type');
  }
};
/************************************************************** */

const CompReducer = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <div>
      CompReducer, count is {state.count}
      <button
        onClick={() =>
          dispatch({ type: 'reset', payload: initialCount })
        }
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        -
      </button>
      <button onClick={() => dispatch({ type: 'increment' })}>
        +
      </button>
    </div>
  );
};

export default CompReducer;
