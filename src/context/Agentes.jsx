import { createContext, useContext, useState } from "react";

export const AgentesContext = createContext();
AgentesContext.displayName = 'Agentes'

export default function AgentesProvider({children}) {
    const [agentes, setAgentes] = useState([]);

    
    return (
        <AgentesContext.Provider value={{agentes, setAgentes}}>
            {children}
        </AgentesContext.Provider>
    )
}

export function useAgentesContext() {
    const {agentes, setAgentes} = useContext(AgentesContext);
    const favorito = false;
    async function getAgentsAPI(url) {
        const response = await fetch(url)
        const data = await response.json();
        setAgentes(data.data)
    }
   
   
    return {
        agentes,
        setAgentes,
        getAgentsAPI
    }
}