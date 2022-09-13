import storage, { Storage } from './storage'

export interface Options<State> {
  /**
   * localStorage saved key
   */
  key: string
  /**
   * cached module name
   * Do not pass means cache all
   * pass only the specified cache
   */
  paths: string[]
  /**
   * storage
   */
  storage: Storage
  /**
   * Whether to prefetch data
   */
  fetchBeforeUse: boolean
  /**
   * Default method of prefetching data
   */
  fetchBeforeUseFn: (key: string, storage: Storage) => any
}

export const defaultOptions: Options<object> = {
  key: 'VUEX-PERSISTEDSTATE',
  paths: [],
  fetchBeforeUse: true,
  fetchBeforeUseFn(key: string, storage: Storage) {
    return storage.getItem(key)
  },
  storage
}
