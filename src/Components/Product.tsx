import { useEffect, useState } from "react";
import { IProduct } from "../models";

interface ProductProps
{
  product: IProduct
}

const Product = ( props: ProductProps ) =>
{
  const [hidden, setHidden] = useState( true );
  
  return (
    <>
      <div className="border w-3/5 py-2 rounded px-4 flex flex-col text-center items-center justify-items-center mb-2">{ props.product.title }
        <img className="w-1/6 mb-2" src={ props.product.image } />
        <button onClick={ () => setHidden( prev => !prev ) } className={ hidden ? "py-2 px-4 border bg-yellow-400 transition-colors" : "py-2 px-4 border bg-blue-400 transition-colors" }>Click to { hidden ? "show" : "hide" }</button>
        <div className={ hidden ? "hidden " : "block text-center w-2/4" }>
          <p className=" text-center mb-3">{ props.product.description }</p>
          <span >{ props.product.price }</span>
          <br />
          <span>{ props.product?.rating?.rate }★</span>
        </div>
      </div>
    </>
  )
}

export default Product