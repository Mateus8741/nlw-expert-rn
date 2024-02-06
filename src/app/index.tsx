import { CatergoryButton } from '@/components/catergory-button'
import { Header } from '@/components/header'
import { CATEGORIES, MENU } from '@/utils/data/products'
import { useState } from 'react'
import { FlatList, SectionList, Text, View } from 'react-native'

export default function Home() {
  const [category, setCategory] = useState(CATEGORIES[0])

  function handleCategoryChange(newCategory: string) {
    setCategory(newCategory)
  }

  return (
    <View className="flex-1 bg-slate-950">
      <Header title="Cardápio" cartQuantity={1} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CatergoryButton
            title={item}
            isSelected={item === category}
            onPress={() => handleCategoryChange(item)}
          />
        )}
        horizontal
        className="max-h-10 mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />

      <SectionList
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <Text className="text-white">{item.title}</Text>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="text-xl text-white font-heading mt-8 mb-3">
            {title}
          </Text>
        )}
      />
    </View>
  )
}
