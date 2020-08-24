<template>

<div>showing pizza here...</div>

</template>



<script>
export default {
    data() {
      return {
        posts: []
      }
    },
    async fetch() {
      let cartItems = this.$store.getters['menu/pizzas']
      // console.log(cartItems, this.$route.params.slug)
      // console.log(this.$route.params.slug)
      // console.log(this.)
      let thePizza = await this.$axios.$get(`/pizzas/${this.$route.params.slug}`)
      this.$store.commit('menu/SET_FULL_PIZZA', thePizza)
    },
    // fetchOnServer: false
  }

</script>
