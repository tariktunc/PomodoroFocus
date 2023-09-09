// PomoTimeContext.js
import React, { createContext, useContext, useState } from "react";

const PomoTimeContext = createContext();

export function usePomoTime() {
  return useContext(PomoTimeContext);
}

export function PomoTimeProvider({ children }) {
  const [pomoTime, setPomoTime] = useState({
    pm: 25,
    sb: 5,
    lb: 10,
  });

  const updatePomoTime = (newPomoTime) => {
    setPomoTime(newPomoTime);
  };

  return (
    <PomoTimeContext.Provider value={{ pomoTime, updatePomoTime }}>
      {children}
    </PomoTimeContext.Provider>
  );
}
