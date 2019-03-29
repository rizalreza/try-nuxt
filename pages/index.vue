<template>
  <section class="container">
    <div>
      <center><h1>Home</h1></center>
      <p>{{authenticated}}</p>
      <p>{{user.email}}</p>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
