import React, { createContext, useContext } from "react";

const StoreContext = createContext();

export default function StoreProvider({ children }) {
  const store = { urls: [] };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export function useStoreContext() {
  return useContext(StoreContext);
}
