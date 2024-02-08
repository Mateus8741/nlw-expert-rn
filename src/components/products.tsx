/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'

import * as RN from 'react-native'

type ProductDataProps = {
  title: string
  description: string
  thumbnail: RN.ImageProps
  quantity?: number
}

type ProductProps = RN.TouchableOpacityProps & {
  data: ProductDataProps
}

export const Products = forwardRef<RN.TouchableOpacity, ProductProps>(
  ({ data, ...rest }, ref) => {
    return (
      <RN.TouchableOpacity
        ref={ref}
        className="w-full flex-row items-center pb-4"
        {...rest}
      >
        <RN.Image
          source={data.thumbnail}
          className="w-20 h-20 rounded-md"
          alt=""
        />

        <RN.View className="flex-1 ml-3">
          <RN.View className="flex-row items-center">
            <RN.Text className="text-slate-100 font-subtitle text-base flex-1">
              {data.title}
            </RN.Text>

            {data.quantity && (
              <RN.Text className="text-slate-400 font-subtitle text-sm">
                x {data.quantity}
              </RN.Text>
            )}
          </RN.View>

          <RN.Text className="text-slate-400 text-xs leading-5 m5-0.5">
            {data.description}
          </RN.Text>
        </RN.View>
      </RN.TouchableOpacity>
    )
  },
)
