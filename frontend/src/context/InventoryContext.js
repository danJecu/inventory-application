import { createContext, useReducer } from 'react';

export const InventoryContext = createContext();

export const inventoryReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        inventory: action.payload,
      };
    case 'CREATE_PRODUCT':
      return {
        inventory: [action.payload, ...state.inventory],
      };
    default:
      return state;
  }
};

export const InventoryContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(inventoryReducer, {
    inventory: null,
  });

  return (
    <InventoryContext.Provider value={{ ...state, dispatch }}>
      {children}
    </InventoryContext.Provider>
  );
};
