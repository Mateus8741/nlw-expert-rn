import { FormatCurrency, PRODUCTS } from '@/utils'

import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Image, Text, View } from 'react-native'

export default function Product() {
  const { id } = useLocalSearchParams()

  const product = PRODUCTS.filter((product) => product.id === id)[0]

  return (
    <View className="flex-1">
      <Image
        source={product.cover}
        className="w-full h-52"
        resizeMode="cover"
        alt=""
      />

      <View className="p-5 mt-8 flex-1">
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
    </View>
  )
}
