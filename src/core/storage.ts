export interface Storage {
  getItem: (key: string) => object
  setItem: (key: string, value: any) => void
  removeItem: (key: string) => void
}

export const getItem = (key: string): object => {
  const val = JSON.parse(window.localStorage.getItem(key) as string)

  if (!val) {
    return {}
  }

  return val.value || {}
}

export const setItem = (key: string, value: any) => {
  let val: object = {
    value
  }

  let valStr = JSON.stringify(val)

  window.localStorage.setItem(key, valStr)
}

export const removeItem = (key: string) => {
  window.localStorage.removeItem(key)
}

const storage: Storage = {
  getItem,
  setItem,
  removeItem
}

export default storage
