import axios from "axios";
import { useState } from "react";
import { IProduct } from "../models";


const productData: IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 10
    }
}

interface CreateProductProps
{
    onCreate: ( produce: IProduct ) => void
}
const CreateProduct = ( { onCreate }: CreateProductProps ) =>
{
    const [textInput, setTextInput] = useState( '' )
    const [error, setError] = useState( '' )


    const submitHandler = async ( e: React.FormEvent ) =>
    {
        e.preventDefault();
        setError( '' )
        if ( textInput.trim().length === 0 ) {
            setError( 'Please enter valid title' )
            return
        } else {
            productData.title = textInput
            const response = await axios.post<IProduct>( 'https://fakestoreapi.com/products', productData )

            onCreate( response.data )
        }


    }
    const inputHandler = ( event: React.KeyboardEvent<HTMLInputElement> ) =>
    {
        setTextInput( event.target.value )
    }
    return (
        <form onSubmit={ submitHandler } action="
   ">
            <input
                type="text"
                className="border py-2 px-4 mb-2 w-full outline-none"
                placeholder="Enter product title..."
                value={ textInput }
                onChange={ inputHandler }
            />
            { error && <h1 className="text-red-500 lg-2">Error enter valid title</h1> }
            <button
                type="submit"
                className="py-2 px-4 border bg-yellow-400 transition-colors hover:text-white"

            >
                Create
            </button>
        </form>
    )
}

export default CreateProduct