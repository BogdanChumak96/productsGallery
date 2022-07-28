import axios from "axios"
import { useEffect, useState } from "react"
import { IProduct } from "../models"

export function useProducts ()
{
    const [loading, setLoading] = useState( true )
    const [products, setProducts] = useState<IProduct[]>( [] );
    const [error, setError] = useState( ' ' )
    function addProduct ( product: IProduct )
    {
        setProducts( prev => [...prev, product] )
    }
    async function fetchItems ()
    {
        try {
            const response = await axios.get<IProduct[]>( 'https://fakestoreapi.com/products' )
            setProducts( response.data )
            setLoading( false )
        } catch ( error ) {
            setLoading( false )
            setError( `Error fetching products, ${ error }` )
        }
    }
    useEffect( () =>
    {
        fetchItems()
    }, [] )

    return { products, error, loading, addProduct }
}

