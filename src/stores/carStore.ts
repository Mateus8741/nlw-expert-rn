import { ProductProps } from '@/utils'
import { create } from 'zustand'

import { Add } from './helpers/cartInMemory'

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
      const newProducts = Add(state.products, product)
      return { products: newProducts }
    }),
  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),
  clearCart: () => set({ products: [] }),
}))
