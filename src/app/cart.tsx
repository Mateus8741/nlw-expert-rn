import { Header, Products } from '@/components'
import { useCarStore } from '@/stores'
import { FormatCurrency } from '@/utils'
import { FlatList, Text, View } from 'react-native'

export default function Cart() {
  const { products } = useCarStore()

  const total = FormatCurrency(
    products.reduce((acc, p) => acc + p.price * p.quantity, 0),
  )

  return (
    <View className="flex-1">
      <Header title="Seu carrinho" />

      <View className="flex-1 p-5">
        {/* {products.length > 0 ? (
          products.map((product) => (
            <Products key={product.id} data={product} />
          ))
        ) : (
          <Text className="text-slate-400 text-center font-body my-8">
            Seu carrinho está vazio
          </Text>
        )} */}

        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Products data={item} />}
          ListEmptyComponent={() => (
            <Text className="text-slate-400 text-center font-body my-8">
              Seu carrinho está vazio
            </Text>
          )}
          className="pb-8"
        />

        <View className="flex-row gap-2 items-center mt-5 mb-4">
          <Text className="text-white text-xl font-subtitle">Total: </Text>

          <Text className="text-lime-400 text-2xl font-bold">{total}</Text>
        </View>
      </View>
    </View>
  )
}
