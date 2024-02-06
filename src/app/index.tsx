import { CatergoryButton } from '@/components/catergory-button'
import { Header } from '@/components/header'
import { View } from 'react-native'

export default function Home() {
  return (
    <View className="flex-1 bg-slate-950">
      <Header title="Cardápio" cartQuantity={1} />

      <View className="flex-row gap-4">
        <CatergoryButton title="Todos" isSelected />
      </View>
    </View>
  )
}
