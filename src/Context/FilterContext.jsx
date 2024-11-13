import { createContext, useContext, useState } from "react";

export const FilterContext = createContext()

export function useFilter(){
    return useContext(FilterContext)
}

export function FilterContextProvider({children}){
    const [filter , setFilter] = useState({
        gender:"",
        category:[],
        dropdown:"",
        material:[],
        color:[],
        rating:0,
        priceRange : 0,



    });
    return(
        <FilterContext.Provider value={{filter, setFilter}}>
            {children}
        </FilterContext.Provider>
    )
}
