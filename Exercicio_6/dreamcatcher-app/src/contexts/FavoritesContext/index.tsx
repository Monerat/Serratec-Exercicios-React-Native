import { createContext, useState } from "react";
import { Sonho } from "../../components/HomeComponent";


interface ConxtextProps {
   children: React.ReactNode;
}

export interface IFavoritesContext {
   atualizaFavoritosArray: (sonho: Sonho) => void;
   addSonho: (sonho: Sonho) => void;
   editSonho: (sonho: Sonho) => void;
   sonhosArray: Sonho[];
}

export const FavoritesContext = createContext<IFavoritesContext>({
   sonhosArray: [],
   addSonho: (sonho: Sonho) => {},
   editSonho: (sonho: Sonho) => {},
   atualizaFavoritosArray: (sonho: Sonho) => {},
});

export const FavoritesProvider = ({ children }: ConxtextProps) => {
   const [sonhosArray, setSonhosArray] = useState<Sonho[]>([]);

   const addSonho = (sonho: Sonho) => {
      setSonhosArray([sonho, ...sonhosArray]);
   };

   const editSonho = (sonho: Sonho) => {
      const updatedSonhosArray = sonhosArray.map(sonhoDB => {
         if (sonhoDB.id === sonho.id) {
            return {
               ...sonhoDB,
               title: sonho.title,
               data: sonho.data,
               descricao: sonho.descricao,
               favorite: sonho.favorite,
               tags: sonho.tags,
            };
         } 

         return sonhoDB
 
      });

      const sortedArray = sortArrayByDate(updatedSonhosArray)

      setSonhosArray(sortedArray);
   };

   const atualizaFavoritosArray = (sonhoSelecionado: Sonho) => {
      const updatedSonhosArray = sonhosArray.map(sonho => {
         if (sonho.id === sonhoSelecionado.id) {
            let favoritado = sonho.favorite;

            return { ...sonhoSelecionado, favorite: !favoritado };
         }

         return sonho;
  
      });

      const sortedArray = sortArrayByDate(updatedSonhosArray)

      setSonhosArray(sortedArray);
   };

    /**
    * @returns objeto Date correspondente a string parametro
    * @param data Data no formato LocaleString (dd/mm/YYYY)
    *
    * @example stringToDateConverter("12/12/2012") => new Date(2012, 12, 12);
    */
    const stringToDateConverter = (data: string) => {
      const dataArray = data.split("/");
      const dataIntArray = dataArray.map(data => parseInt(data));

      return new Date(dataIntArray[2], dataIntArray[1], dataIntArray[0]);
   };

   const sortArrayByDate = (array: Sonho[]) => {
     const sortedArray = array.sort((a, b) => {
         const dataA = stringToDateConverter(a.data);
         const dataB = stringToDateConverter(b.data);

         return dataB.getTime() - dataA.getTime()
      });

      return sortedArray;
   };

   return (
      <FavoritesContext.Provider value={{ atualizaFavoritosArray, addSonho, editSonho, sonhosArray }}>
         {children}
      </FavoritesContext.Provider>
   );
};
