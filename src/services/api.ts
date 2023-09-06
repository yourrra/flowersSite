const API = 'https://juniper-ringed-value.glitch.me'

export const ENDPOINT = {
  ITEMS: () => '/items',
  ITEM: (id: string) => `/items/${id}`,
}

interface Items {
  id: string
  name: string
  price: string
  image: string
  category: string
}

interface ApiResponse {
  items: Items[]
}

export async function fetchItems(): Promise<Items[]> {
  try {
    const response = await fetch(`${API}${ENDPOINT.ITEMS()}`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data: ApiResponse = await response.json()
    return data.items
  } catch (e) {
    console.error(e)
    throw e
  }
}

export async function fetchItem(id: string): Promise<Items> {
  try {
    const response = await fetch(`${API}${ENDPOINT.ITEM(id)}`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data: Items = await response.json()
    return data
    // return response.json()
  } catch (e) {
    console.error(e)
    throw e
  }
}
