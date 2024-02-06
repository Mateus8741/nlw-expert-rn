import { Header } from '@/components/header'
import { View } from 'react-native'

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-950">
      <Header title="Cardápio" cartQuantity={1} />
    </View>
  )
}
