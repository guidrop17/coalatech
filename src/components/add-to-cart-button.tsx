'use client'
import { useCart } from "@/context/cart-context"

export interface addToCartProps {
    productId: number
}

export function AddToCartButton({productId}: addToCartProps){
    const {addToCart} = useCart()

    function handleAddProductToCart(){
        addToCart(productId)
    }

    return(
        <button 
            type="button" 
            className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
            onClick={handleAddProductToCart}
        >
            Adicionar ao carrinho
        </button>
    )
}