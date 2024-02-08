import { Button, Header, LinkButton, Products, TextInput } from '@/components'
import { useCarStore } from '@/stores'
import { FormatCurrency, ProductProps } from '@/utils'
import { Feather } from '@expo/vector-icons'
import { Alert, ScrollView, Text, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function Cart() {
  const { products, removeProduct } = useCarStore()

  const total = FormatCurrency(
    products.reduce((acc, p) => acc + p.price * p.quantity, 0),
  )

  function handleRemoveProduct(product: ProductProps) {
    Alert.alert(
      'Remover produto',
      `Deseja remover ${product.title} do carrinho?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Remover',
          style: 'destructive',
          onPress: () => {
            removeProduct(product.id)
          },
        },
      ],
    )
  }

  return (
    <View className="flex-1 ">
      <Header title="Seu carrinho" />

      <KeyboardAwareScrollView
        extraScrollHeight={100}
        enableOnAndroid
        className="mb-6"
      >
        <ScrollView className="mt-4">
          <View className="flex-1 p-5">
            {products.length > 0 ? (
              <View className="border-b border-slate-700 mb-5">
                {products.map((product) => (
                  <Products
                    key={product.id}
                    data={product}
                    onPress={() => handleRemoveProduct(product)}
                  />
                ))}
              </View>
            ) : (
              <Text className="text-slate-400 text-center font-body my-8">
                Seu carrinho está vazio
              </Text>
            )}

            <TextInput placeholder="Informe o enfderço de entrega com rua, número e bairro e complemento" />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>

      <View className="flex-row items-center w-full px-5">
        <Text className="text-white text-xl font-subtitle">Total: </Text>
        <Text className="text-lime-400 text-2xl font-bold">{total}</Text>
      </View>

      <View className="p-5 gap-5">
        <Button>
          <Button.Text>Enviar pedido</Button.Text>
          <Button.Icon>
            <Feather name="arrow-right-circle" size={20} />
          </Button.Icon>
        </Button>

        <LinkButton title="Voltar ao cardápio" href="/" />
      </View>
    </View>
  )
}
