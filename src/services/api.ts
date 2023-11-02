const API = 'https://juniper-ringed-value.glitch.me'
const API_2 = 'https://65399ecde3b530c8d9e88c88.mockapi.io'
import { UItem } from '@/type/item'

export const ENDPOINT = {
  ITEMS: () => '/product', // '/items'
  ITEM: (id: string) => `/product/${id}`,
  GIFTS: () => '?category=Health',
  ROSES: () => '?category=Grocery',
  OCCASION: () => '?category=Electronics',
}

//${'?category=Health'}

// interface ApiResponse {
//   items: Items[]
// }

export async function fetchItems(selectedCategory: string): Promise<UItem[]> {
  try {
    const response = await fetch(
      `${API_2}${ENDPOINT.ITEMS()}${
        selectedCategory === 'gifts'
          ? ENDPOINT.GIFTS()
          : selectedCategory === 'roses'
          ? ENDPOINT.ROSES()
          : selectedCategory === 'occasion'
          ? ENDPOINT.OCCASION()
          : selectedCategory === 'all'
          ? ''
          : `?category=${selectedCategory}`
      }`,
    )
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data: UItem[] = await response.json()
    return data
  } catch (e) {
    console.error(e)
    throw e
  }
}

export async function fetchItem(id: string): Promise<UItem> {
  try {
    const response = await fetch(`${API_2}${ENDPOINT.ITEM(id)}`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data: UItem = await response.json()
    return data
    // return response.json()
  } catch (e) {
    console.error(e)
    throw e
  }
}

export async function fetchGifts(): Promise<UItem[]> {
  try {
    const response = await fetch(
      `${API_2}${ENDPOINT.ITEMS()}${ENDPOINT.GIFTS()}`,
    )
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data: UItem[] = await response.json()
    return data
  } catch (e) {
    console.error(e)
    throw e
  }
}
