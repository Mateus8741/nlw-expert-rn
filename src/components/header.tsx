import { Feather } from '@expo/vector-icons'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import colors from 'tailwindcss/colors'

type HeaderProps = {
  title: string
  cartQuantity?: number
}

export function Header({ title, cartQuantity = 0 }: HeaderProps) {
  return (
    <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
      <View className="flex-1">
        <Image
          source={require('@/assets/logo.png')}
          className="w-32 h-6"
          alt=""
        />

        <Text className="text-white text-xl font-heading mt-2">{title}</Text>
      </View>

      {cartQuantity > 0 && (
        <TouchableOpacity className="relative">
          <View className="bg-lime-300 justify-center items-center w-4 h-4 rounded-full top-2 z-10 -right-3.5">
            <Text className="text-xs font-bold text-slate-900">
              {cartQuantity}
            </Text>
          </View>

          <Feather name="shopping-bag" color={colors.white} size={24} />
        </TouchableOpacity>
      )}
    </View>
  )
}
