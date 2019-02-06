<template>
  <div>
  <h1> Register </h1>

  <input
    type="email"
    name="email"
    v-model="email"
    placeholdere="email" />
<br>
 <input
    type="password"
    name="password"
    v-model="password"
    placeholder="password" />
    <br>

    <button>Register</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: 'abc',
      password: '123'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
