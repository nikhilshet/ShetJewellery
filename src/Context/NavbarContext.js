import { createContext, useContext } from "react";

export const navContext = createContext()

export function useNav(){
    return useContext(navContext)
}