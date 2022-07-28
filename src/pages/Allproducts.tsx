import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CreateProduct from '../Components/CreateProduct'
import Loader from '../Components/Loader'
import Modal from '../Components/Modal'
import Product from '../Components/Product'
import { ModalContext } from '../context/ModalContext'
import { useProducts } from '../hooks/products'
import { IProduct } from '../models'

const Allproducts = () =>
{
    const { loading, products, error, addProduct } = useProducts()
    const { modal, close: closeModal, open: openModal } = useContext( ModalContext )
    const createHandler = ( product: IProduct ) =>
    {
        closeModal()
        addProduct( product )
    }
    return (
        <div className="container mx-auto px-4 flex-column flex flex-col items-center justify-items-center max-w-1xl pt-15">
            { loading ? <Loader /> : error }
            { products.map( ( product ) =>
            (
                <Product key={ product.id } product={ product } />
            ) ) }
            { modal && <Modal title="Create New Product" onClose={ () => closeModal() }>
                <CreateProduct onCreate={ createHandler } />
            </Modal> }
            { !modal && <>
                <button onClick={ () => openModal() } className="fixed text-white bottom-5 right-2  border-2 rounded-full bg-red-500 text-lg p-2 " >+</button>
                <Link to={ '/' } className="fixed text-white top-5 left-2  border-2 rounded-full bg-red-500 text-lg p-2 ">←</Link>
            </> }
        </div>
    );
}

export default Allproducts