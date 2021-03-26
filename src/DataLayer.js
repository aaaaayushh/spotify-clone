import React from "react";
import { createContext, useContext, useReducer } from "react";

// Creates a Context object. When React renders a component that subscribes
// to this Context object it will read the current context value from the closest
// matching Provider above it in the tree.
export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => {
  return (
    //   Every Context object comes with a Provider React component that allows
    // consuming components to subscribe to context changes.
    // All consumers that are descendants of a Provider will re-render whenever
    // the Provider’s value prop changes
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataLayerContext.Provider>
  );
};

export const useDataLayerValue = () => useContext(DataLayerContext);
