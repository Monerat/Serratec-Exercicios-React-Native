import { createContext, useState } from "react";
import { Sonho } from "../../components/HomeComponent";

interface ConxtextProps {
    children: React.ReactNode
}

export interface IFavoritesContext {
    addFavorite: () => void,
    removeFavorite: () => void,
    favoriteSonhos: Sonho[]
};

export const FavoritesContext = createContext<IFavoritesContext>({
    addFavorite: () => {},
    removeFavorite: () => {},
    favoriteSonhos: []
});

export const FavoritesProvider = ( { children }  : ConxtextProps) => {
    const [favoriteSonhos, setFavoriteSonhos] = useState<Sonho[]>([])

    const addFavorite = () => {
        console.log("Favorito Adicionado");
        
    };

    const removeFavorite = () => {
        console.log("Favorito Reemovido");
        
    };

    return (
        <FavoritesContext.Provider
            value={{addFavorite, removeFavorite, favoriteSonhos}}>
            {children}
        </FavoritesContext.Provider>
    );
};