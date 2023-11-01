import { makeAutoObservable } from 'mobx'
import { fetchItems } from '@/services/api'
import { Item } from '@/type/item'

class ItemStore {
  data: Item[] = []
  sortedData: Item[] = []
  visibleItems = 15
  selectedCategory = 'all'
  sort = 'bestSelling'

  constructor() {
    makeAutoObservable(this)
  }

  async fetchData() {
    try {
      const response = await fetchItems(this.selectedCategory)
      this.data = response
      this.sortedData = this.sortItems(this.sort)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  setShowMore() {
    if (this.visibleItems < this.data.length) {
      this.visibleItems += 15
    }
  }

  filterItems(category: string) {
    this.selectedCategory = category
    this.visibleItems = 15
    this.fetchData()
  }

  setSort(selectedSort: string) {
    this.sort = selectedSort
    this.sortedData = this.sortItems(this.sort)
  }

  sortItems(selectedSort: string) {
    const sortedData = [...this.data]
    sortedData.sort((a, b) => {
      if (selectedSort === 'priceHigh') {
        return parseFloat(b.price) - parseFloat(a.price)
      } else if (selectedSort === 'priceLow') {
        return parseFloat(a.price) - parseFloat(b.price)
      } else if (selectedSort === 'a-z') {
        return a.name.localeCompare(b.name)
      } else if (selectedSort === 'z-a') {
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
