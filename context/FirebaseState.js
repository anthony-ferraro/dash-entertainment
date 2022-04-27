import { createContext, useReducer, } from "react";

export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
    const [state, dispatch] = useReducer(FirebaseReducer, initialState);
    return (
        <FirebaseContext.Provider value={{
            
        }}>
            {children}
        </FirebaseContext.Provider>
    );
};