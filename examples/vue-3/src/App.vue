<template>
  <div>
    <!-- Root namespace -->
    <div>
      <p>state.msg: {{ $store.state.msg }}</p>
      <button @click="onChangeMsg">changeMsg</button>
    </div>

    <!-- user namespace -->
    <div>
      <p>state.user.name: {{ $store.state.user.name }}</p>
      <button @click="onChangeUser">changeUser</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    onChangeMsg() {
      this.$store.commit('setMsg', 'msg changed')
    },
    onChangeUser() {
      this.$store.commit('user/setUser', {
        name: 'tm',
        age: '20'
      })
    }
  }
}
</script>

<style></style>
