import { useEffect, useState } from "react";


export function useFetch<T> (url: string){
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError]= useState<Error | null>(null);

    useEffect(()=>{
        const fetchData = async () => { // Added 'async' here
          try{
            const response = await fetch(url);
            if (!response.ok){
              throw new Error("hubo un error cargando los datos");
            }
            const result = await response.json();
            setData(result);        
          } catch (err) {
              setError(err instanceof Error ? err: new Error("Ocurrio un error"));
          } finally{
            setLoading(false);
          }
        };
        fetchData()
      },[url]);

      return {
        data, 
        loading,
        error,
      };
}