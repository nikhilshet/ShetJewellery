import { createContext, useContext ,useState } from "react";

export const navContext = createContext()

export function useNav(){
    return useContext(navContext)
}

export function NavProvider({children}){
    const [navData , setNavData] = useState({isVisible:false})
    return(
        <navContext.Provider value={{navData , setNavData}}>
            {children}
        </navContext.Provider>

    )
}