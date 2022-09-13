import { Options, defaultOptions } from './core/options'
import { MutationPayload, Store } from 'vuex'
import { matchPaths } from './core/persistedstate'

let catchData: object = {}

export default function VuexPersistedstate<State>({
  key = defaultOptions.key,
  paths = defaultOptions.paths,
  storage = defaultOptions.storage,
  fetchBeforeUse = defaultOptions.fetchBeforeUse,
  fetchBeforeUseFn = defaultOptions.fetchBeforeUseFn
}: Options<State> = defaultOptions) {
  // read catchData
  if (fetchBeforeUse) {
    catchData = fetchBeforeUseFn(key, storage)
  }

  return (store: Store<State>) => {
    // restoring cached data
    for (const key in catchData) {
      if (Object.prototype.hasOwnProperty.call(catchData, key)) {
        const value = catchData[key]
        store.commit(key, value)
      }
    }
    // Called after each mutation
    // { type, payload }
    store.subscribe((mutation: MutationPayload, state: State) => {
      if (matchPaths(paths, mutation)) {
        catchData[mutation.type] = mutation.payload

        storage.setItem(key, catchData)
      }
    })
  }
}
