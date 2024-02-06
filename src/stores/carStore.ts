import { ProductProps } from '@/utils'
import { create } from 'zustand'

export type ProductCartProps = ProductProps & {
  quantity: number
}

type StateProps = {
  products: ProductCartProps[]
  addProduct: (product: ProductProps) => void
  removeProduct: (id: string) => void
  clearCart: () => void
}

export const useCarStore = create<StateProps>((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => {
      const productIndex = state.products.findIndex(
        (cartProduct) => cartProduct.id === product.id,
      )

      if (productIndex === -1) {
        return {
          products: [...state.products, { ...product, quantity: 1 }],
        }
      }

      const newProducts = state.products.map((cartProduct, index) => {
        if (index === productIndex) {
          return { ...cartProduct, quantity: cartProduct.quantity + 1 }
        }

        return cartProduct
      })

      return { products: newProducts }
    }),
  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),
  clearCart: () => set({ products: [] }),
}))
