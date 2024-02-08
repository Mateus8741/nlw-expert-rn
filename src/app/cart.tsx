import { Header, Products } from '@/components'
import { useCarStore } from '@/stores'
import { View } from 'react-native'

export default function Cart() {
  const { products } = useCarStore()

  return (
    <View className="flex-1">
      <Header title="Seu carrinho" />

      <View className="fle-1 p-5">
        {products.map((product) => (
          <Products key={product.id} data={product} />
        ))}
      </View>
    </View>
  )
}
