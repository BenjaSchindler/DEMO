import { title } from "process"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
  }

export function Card({ id, name, price, imgUrl }: StoreItemProps) {
    const {
      getItemQuantity,
      increaseCartQuantity,
      decreaseCartQuantity,
    } = useShoppingCart()
    const quantity = getItemQuantity(id)
  
  return (
    <div className="w-80 bg-Beige shadow rounded">
        <div className="h-50 w-full bg-gray-200 bg-cover bg-center">
            <div className="relative">
                <img className="object-cover w-80 h-30 " src={imgUrl} alt={name} />

            </div>
        </div>
        <div className="p-4 flex flex-col items-center">
            <h1 className="font-bold text-4xl mb-2 pt-4 text-center">{title}</h1>
            <p className="font-bold text-2xl mb-1 text-center">{formatCurrency(price)}</p>
            <div className="inline-flex items-center mt-2">
                <button
                    className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
                    onClick={() => decreaseCartQuantity(id)}
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 12H4"
                    />
                    </svg>
                </button>
                <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                {quantity}
                </div>
            <button
                className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
                onClick={() => increaseCartQuantity(id)}
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                />
                </svg>
            </button>
        </div>

            <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
            Agregar al carrito
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
            </svg>
            </button>
        </div>
    </div>
  );
};

