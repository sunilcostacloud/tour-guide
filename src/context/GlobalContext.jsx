import { createContext, useContext, useReducer } from "react";
import tourGuideReducer, {
  tourGuideInitialState,
} from "./reducers/tourGuideReducer";

// Create context with initial state as default value
export const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [tourGuideState, tourGuideDispatch] = useReducer(
    tourGuideReducer,
    tourGuideInitialState
  );
  return (
    <GlobalContext.Provider
      value={{
        tourGuideState,
        tourGuideDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// create a custom hook
export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context)
    throw new Error("useGlobalContext must be used within the GlobalProvider");
  return context;
}
