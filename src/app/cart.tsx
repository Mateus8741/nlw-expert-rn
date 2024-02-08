import { Button, Header, LinkButton, Products, TextInput } from '@/components'
import { useCarStore } from '@/stores'
import { FormatCurrency, ProductProps } from '@/utils'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'
import { useState } from 'react'
import { Alert, Linking, ScrollView, Text, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const PHONE_NUMBER = '5588981321566'

export default function Cart() {
  const [address, setAddress] = useState('')

  const { products, removeProduct, clearCart } = useCarStore()

  const { goBack } = useNavigation()

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

  function handleOrder() {
    if (address.trim().length === 0) {
      return Alert.alert('Endereço de entrega', 'Informe o endereço de entrega')
    }

    const productsOrder = products
      .map(
        (p) =>
          `\n${p.title} - ${p.quantity} und(s) - ${FormatCurrency(p.price)}`,
      )
      .join('')

    const message = `
    NOVO PEDIDO
    \nEndereço de entrega: ${address}

    ${productsOrder}
    
    \nTotal: ${total}`

    Linking.openURL(
      `http://api.whatsapp.com:/send?phone=${PHONE_NUMBER}&text=${message}`,
    )

    clearCart()
    goBack()
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

            <TextInput
              placeholder="Informe o enfderço de entrega com rua, número e bairro e complemento"
              value={address}
              onChangeText={setAddress}
            />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>

      <View className="flex-row items-center w-full px-5">
        <Text className="text-white text-xl font-subtitle">Total: </Text>
        <Text className="text-lime-400 text-2xl font-bold">{total}</Text>
      </View>

      <View className="p-5 gap-5">
        <Button onPress={handleOrder}>
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
