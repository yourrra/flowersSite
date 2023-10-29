import { makeAutoObservable } from 'mobx'
import { useQuery } from '@tanstack/react-query'
import { fetchItems } from '@/services/api'
import { Item } from '@/services/api'

interface ItemStore {
  data: Item[]
  sortedData: Item[]
  visibleItems: number
  selectedCategory: string
  sort: string

  fetchData: () => void
  setShowMore: () => void
  filterItems: (category: string) => void
  setSort: (selectedSort: string) => void
  sortItems: (selectedSort: string) => Item[]
}

class ItemStore {
  data: Item[] = []
  sortedData: Item[] = []
  visibleItems = 15
  selectedCategory = 'all'
  sort = 'bestSelling'

  constructor() {
    makeAutoObservable(this)
  }

  fetchData = () => {
    const { data, isLoading, isError, error } = useQuery<Item[]>({
      queryKey: ['items', this.selectedCategory],
      queryFn: () => fetchItems(this.selectedCategory),
    })

    // if (isLoading) {
    // }

    // if (isError) {
    // }

    this.data = data || []
  }

  setShowMore = () => {
    if (this.visibleItems < this.data.length) {
      this.visibleItems += 15
    }
  }

  filterItems = (category: string) => {
    this.selectedCategory = category
    this.visibleItems = 15
    this.fetchData()
  }

  setSort = (selectedSort: string) => {
    this.sort = selectedSort
    this.sortedData = this.sortItems(this.sort)
  }

  sortItems = (selectedSort: string) => {
    const sortedData = [...this.data]
    sortedData.sort((a, b) => {
      if (selectedSort === 'price-up') {
        return parseFloat(b.price) - parseFloat(a.price)
      } else if (selectedSort === 'price-down') {
        return parseFloat(a.price) - parseFloat(b.price)
      } else if (selectedSort === 'A-Z') {
        return a.name.localeCompare(b.name)
      } else if (selectedSort === 'Z-A') {
        return b.name.localeCompare(a.name)
      } else {
        return parseFloat(a.rating) - parseFloat(b.rating)
      }
    })
    return sortedData
  }
}

const itemStore = new ItemStore()
export default itemStore
