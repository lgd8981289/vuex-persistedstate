# vuex-persistedstate
Persist and rehydrate your Vuex state between page reloads.



> [robinvdvleuten/vuex-persistedstate](https://github.com/robinvdvleuten/vuex-persistedstate) Maintenance has stopped, but a lot of developers are still using `vuex-persistedstate` , so we try to replace it。
>
> will try to keep the same `API` to achieve risk-free replacement.



----



## Install

```shell
npm install --save vuex-plugin-persistedstate
```

The [UMD](https://github.com/umdjs/umd) build is also available on [unpkg](https://unpkg.com/):

```html
<script src="https://unpkg.com/vuex-plugin-persistedstate/dist/index.js"></script>
```



## Usage

```js
import { createStore } from "vuex";
import createPersistedState from "vuex-plugin-persistedstate";

const store = createStore({
  // ...
  plugins: [createPersistedState()],
});
```

Compatible with vuex 3 && `vuex 4`

## Examples

Check out a basic example on [CodeSandbox](https://codesandbox.io).

[![Edit vuex-persistedstate](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vuex-plugin-persistedstate-o948p7?file=/src/App.vue)





## Options

```ts
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
```



## License

The MIT License (MIT). Please see [License File](https://github.com/lgd8981289/vuex-persistedstate/blob/main/LICENSE) for more information.
