import React from 'react'
import { Link } from 'react-router-dom'

const About = () =>
{
    return (
    <Link to='/allproducts' className='text-center container mx-auto px-6 w-1/2 h-screen flex justify-center items-center text-2xl cursor-default'>
            <h1 className="cursor-alias" >Go to shop</h1>
            <span className="cursor-alias">→</span>
        </Link>
        )
}

export default About;