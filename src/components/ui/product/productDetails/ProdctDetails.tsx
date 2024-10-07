'use client'

import Image from 'next/image'
import { Star, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  rating: number
  inStock: boolean
  category: string
  subCategory: string
}

interface ProductDetailsProps {
  product: Product
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { cartItems, addToCart, removeFromCart } = useCart()
  const cartItem = cartItems.find((item) => item.id === product.id)
  const quantity = cartItem ? cartItem.quantity : 0

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative w-full h-96 md:h-auto max-w-md mx-auto overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.round(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="ml-2 text-gray-600">
                ({product.rating.toFixed(1)})
              </span>
            </div>
            <p className="text-xl font-semibold text-gray-800 mb-4">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-600 mb-6">{product.description}</p>
          </div>

          <div className="flex items-center gap-4">
         
              <>
                <button
                  onClick={() => removeFromCart(product.id)}
                  aria-label={`Remove one ${product.name}`}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-red-100 text-red-500"
                >
                  <span className="text-xl font-bold">-</span>
                </button>
                <span className="text-xl font-bold text-black">{quantity}</span>
                <button
                  onClick={() => addToCart(product.id)}
                  aria-label={`Add one more ${product.name}`}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100 text-green-500"
                >
                  <span className="text-xl font-bold">+</span>
                </button>
              </>
      
          </div>

          <div>
            <div className="mb-4">
              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  product.inStock
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
            <Link href="/cart">
              <button
                onClick={() => addToCart(product.id)}
                className={`w-full py-3 flex items-center justify-center gap-2 font-semibold text-white rounded-md transition-colors ${
                  product.inStock
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
                disabled={!product.inStock}
              >
                <ShoppingCart className="w-6 h-6" />
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
