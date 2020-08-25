<template>

  <v-row class="px-5">
    <v-col cols="12" md="8" class="">
      <!-- TITLE & DESCRIPTION -->
      <h1 class="display-2 mt-2 mb-5">{{pizza.title}}</h1>

      <p>{{pizza.fullDesc}}</p>
      <hr class="ingredients">
        <!-- INGREDIENTS -->
      <p><span class="color3">Ingredients:</span> <span class="color5">{{pizza.ingredients}}</span></p>
    </v-col>

    <!-- ORDERING -->
    <v-col cols="12" md="4">
      <p class="text-h5 text-center color5">Order Now</p>
      <CardCartPart :options="pizza.options" :id="pizza.id" />
    </v-col>
  </v-row>

</template>



<script>
import CardCartPart from '@/components/reusable/cards/CardCartPart.vue'

export default {
    components : {
      CardCartPart
    },

    data() {
      return {
        posts: []
      }
    },

    computed : {
      pizza(){
        return this.$store.getters['menu/getPizzaBySlug'](this.$route.params.slug)
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
