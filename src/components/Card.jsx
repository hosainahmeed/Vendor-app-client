import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { FiShoppingCart } from 'react-icons/fi'

function Card() {
    return (
        <div className='rounded-xl shadow-lg overflow-hidden bg-white'>
            <img className='w-full h-1/2 object-cover' src="https://media.istockphoto.com/id/520733611/photo/jar-of-honey-with-honeycomb.jpg?s=612x612&w=0&k=20&c=k7s6XnJvM1O3kLfy5XUn1M169j11Zcca9rFgvIBGkUE=" alt="product" />
            <div className='px-2'>
                <h1>******</h1>
                <h2>৳3513.15</h2>
                <p>Peora 18K Gold Plated American Diamond Jodha Akbar Bridal</p>
                <div>
                    <button><FiShoppingCart /></button>
                    <button><CiHeart /></button>
                </div>
            </div>
        </div>
    )
}

export default Card