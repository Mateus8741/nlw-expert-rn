import React from 'react'
import * as reactNative from 'react-native'

type ProductDataProps = {
  title: string
  description: string
  thumbnail: reactNative.ImageProps
}

type ProductProps = reactNative.TouchableOpacityProps & {
  data: ProductDataProps
}

export function Products({ data, ...rest }: ProductProps) {
  return (
    <reactNative.TouchableOpacity
      className="w-full flex-row items-center pb-4"
      {...rest}
    >
      <reactNative.Image
        source={data.thumbnail}
        className="w-20 h-20 rounded-md"
        alt=""
      />

      <reactNative.View className="flex-1 ml-3">
        <reactNative.Text className="text-slate-100 font-subtitle text-base flex-1">
          {data.title}
        </reactNative.Text>

        <reactNative.Text className="text-slate-400 text-xs leading-5 m5-0.5">
          {data.description}
        </reactNative.Text>
      </reactNative.View>
    </reactNative.TouchableOpacity>
  )
}
