import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = 'Favoritos'

export default function FavoritosProvider({children}) {
    const [favoritos, setFavoritos] = useState([]);
    return (
        <FavoritosContext.Provider value={{favoritos, setFavoritos}}>
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritosContext() {
    const {favoritos, setFavoritos} = useContext(FavoritosContext);

    const adicionarFavorito = (novoAgenteFavorito) => {
        const temFavorito = favoritos.some(agente => agente.uuid === novoAgenteFavorito.uuid)
        let novaListaDeAgentesFavoritos = [...favoritos];
        if(!temFavorito){
            return setFavoritos(novaListaDeAgentesFavoritos.push(novoAgenteFavorito))
        }
        return favoritos.filter(agente => agente.uuid !== novoAgenteFavorito.id)
    }

    return {
        favoritos,
        adicionarFavorito
    }
}