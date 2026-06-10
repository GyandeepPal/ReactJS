import React, { createContext, useReducer } from "react";

export const storeContext = createContext();

const initialState = {
  input: "",
  todos: [],
};

function reducer(state, action) {
  if (action.type === "SET_INPUT") {
    return {
      ...state,
      input: action.payload,
    };
  } 
  else if (action.type === "ADD_TODO") {
    if (!state.input.trim()) return state;

    return {
      ...state,
      todos: [...state.todos, state.input],
      input: "",
    };
  } 
  else if (action.type === "DELETE_TODO") {
    return {
      ...state,
      todos: state.todos.filter((_, i) => i !== action.payload),
    };
  }

  return state;
}

const Context = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <storeContext.Provider value={{ store, dispatch }}>
      {children}
    </storeContext.Provider>
  );
};

export default Context;