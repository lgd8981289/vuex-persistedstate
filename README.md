# vuex-persistedstate
Persist and rehydrate your Vuex state between page reloads.



> [robinvdvleuten/vuex-persistedstate](https://github.com/robinvdvleuten/vuex-persistedstate) Maintenance has stopped, but a lot of developers are still using `vuex-persistedstate` , so we try to replace it。
>
> will try to keep the same `API` to achieve risk-free replacement.



----



## Install

```shell
npm install --save vuex-persistedstate
```

The [UMD](https://github.com/umdjs/umd) build is also available on [unpkg](https://unpkg.com/):

```html
<script src="https://unpkg.com/vuex-persistedstate/dist/vuex-persistedstate.umd.js"></script>
```



## Usage

```js
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  // ...
  plugins: [createPersistedState()],
});
```

it only supports [vuex 4](https://vuex.vuejs.org/)。



## Options

```ts
interface Options<State> {
  key?: string;
  paths?: string[];
  reducer?: (state: State, paths: string[]) => object;
  subscriber?: (
    store: Store<State>
    ) => (handler: (mutation: any, state: State) => void) => void;
  storage?: Storage;
  getState?: (key: string, storage: Storage) => any;
  setState?: (key: string, state: any, storage: Storage) => void;
  filter?: (mutation: MutationPayload) => boolean;
  arrayMerger?: (state: any[], saved: any[]) => any;
  rehydrated?: (store: Store<State>) => void;
  fetchBeforeUse?: boolean;
  overwrite?: boolean;
  assertStorage?: (storage: Storage) => void | Error;
}
```



## License

The MIT License (MIT). Please see [License File](https://github.com/lgd8981289/vuex-persistedstate/blob/main/LICENSE) for more information.
