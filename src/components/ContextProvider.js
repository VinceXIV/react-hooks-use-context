import React, {createContext, useState} from 'react'


const myContext = createContext()

function ContextProvider({children}){
    const [theme, setTheme] = useState("dark");
    const [user, setUser] = useState(null);
    
    return (
        <myContext.Provider value={{theme, setTheme, user, setUser}}>
            {children}
        </myContext.Provider>
    )
}

export {myContext, ContextProvider}