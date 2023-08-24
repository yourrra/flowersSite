const API = 'https://juniper-ringed-value.glitch.me'

export const ENDPOINT = {
  ITEMS: () => '/items',
  ITEM: (id: string) => `/items/${id}`,
}

// export async function fetchJSON() {}

export async function fetchItems() {
  try {
    const response = await fetch(`${API}${ENDPOINT.ITEMS()}`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data.items
  } catch (e) {
    console.error
  }
}

export async function fetchItem(id: string) {
  try {
    const response = await fetch(`${API}${ENDPOINT.ITEM(id)}`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  } catch (e) {
    console.error
  }
}
