import { Button, LinkButton } from '@/components'
import { useCarStore } from '@/stores'
import { FormatCurrency, PRODUCTS } from '@/utils'
import { Feather } from '@expo/vector-icons'

import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router'
import React from 'react'
import { Image, Text, View } from 'react-native'

export default function Product() {
  const { id } = useLocalSearchParams()

  const { addProduct } = useCarStore()

  const { goBack } = useNavigation()

  const product = PRODUCTS.find((product) => product.id === id)

  function handleAddToCart() {
    if (product) {
      addProduct(product)
      goBack()
    }
  }

  if (!product) {
    return <Redirect href="/" />
  }

  return (
    <View className="flex-1">
      <Image
        source={product.cover}
        className="w-full h-52"
        resizeMode="cover"
        alt=""
      />

      <View className="p-5 mt-8 flex-1">
        <Text className="text-white text-xl font-heading">{product.title}</Text>

        <Text className="text-lime-400 text-2xl font-heading my-2">
          {FormatCurrency(product.price)}
        </Text>
        <Text className="text-slate-400 text-base font-body leading-6 mb-6">
          {product.description}
        </Text>
        {product.ingredients.map((ingredient) => (
          <Text
            key={ingredient}
            className="text-slate-400 text-base font-body leading-6"
          >
            {'\u2022'}
            {ingredient}
          </Text>
        ))}
      </View>

      <View className="p-5 pb-8 gap-5">
        <Button onPress={handleAddToCart}>
          <Button.Icon>
            <Feather name="plus-circle" size={20} color="black" />
          </Button.Icon>

          <Button.Text>Adicionar ao carrinho</Button.Text>
        </Button>

        <LinkButton href="/" title="Ver carrinho" />
      </View>
    </View>
  )
}
