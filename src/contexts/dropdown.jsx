import { createContext, useState, useContext } from "react";

const DropdownContext = createContext();

export const DropdownProvider = ({ children }) => {
  const [shouldChange, setShouldChange] = useState(false);

  return (
    <DropdownContext.Provider value={{ shouldChange, setShouldChange }}>
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdownContext = () => useContext(DropdownContext);
