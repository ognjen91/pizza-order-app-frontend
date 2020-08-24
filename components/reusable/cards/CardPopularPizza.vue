<template>
  <v-card
    class="mx-auto cardPopularPizza"
    max-width="344"
  >

    <!-- TOP IMAGE -->

    <nuxt-link
    :to="{ name: 'pizzas-slug', params: { slug: pizza.slug }}"
    class="noDecoration"
    >
    <v-img
    :src="require('~/assets/images/pizzas/' + pizza.cardImage)"
      height="200px"
    ></v-img>
    </nuxt-link>
    <!-- :src="require('~/assets/images/pizzas/' + pizza.cardImage)" -->

    <!-- TITLE -->
    <nuxt-link
    :to="{ name: 'pizzas-slug', params: { slug: pizza.slug }}"
    class="noDecoration"
    >
    <!-- tag="v-card-title" -->
    <v-card-title
    class='color2 cursorPointer font-secondary mb-0 pb-0'
    >
      {{pizza.title}}
    </v-card-title>
    </nuxt-link>

    <!-- SUBTITLE -->
    <v-card-subtitle class='pt-1'>
      {{pizza.orders}} {{pizza.orders == 1? 'orders' : 'order'}} so far
    </v-card-subtitle>

    <!-- ACTIONS -->
    <v-card-actions>
          <!-- ADD TO CART -->
          <v-btn text @click='showCartOptions = !showCartOptions'>Add to cart</v-btn>

          <!-- GO TO THE PIZZA PAGE -->
          <nuxt-link
          :to="{ name: 'pizzas-slug', params: { slug: pizza.slug }}"
          class='noDecoration'
          >
          <v-btn
          class='color2'
          >
          More Details
          </v-btn>
          </nuxt-link>


          <v-spacer></v-spacer>

          <!-- SHOW DETAILS BUTTON -->
          <v-btn
            icon
            @click="showDetails = !showDetails"
          >
            <v-icon>{{ showDetails ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
    </v-card-actions>

    <!-- EXPANSION FOR PIZZA SHORT DESCRIPTION -->
    <v-expand-transition>
      <div v-show="showDetails">
        <v-divider></v-divider>

        <v-card-text>
          {{pizza.shortDesc}}
        </v-card-text>
      </div>
    </v-expand-transition>

    <!-- EXPANSION FOR CART OPTIONS -->
    <v-expand-transition>
      <div v-show="showCartOptions">
        <CardCartPart :options="pizza.options" id="pizza.id" />
      </div>
    </v-expand-transition>


  </v-card>
</template>

<script>
  import CardCartPart from './CardCartPart.vue'
  export default {
    props : {
      pizza : {
        Type : Object,
        required : true
      }
    },

    data: () => ({
      showDetails: false,
      showCartOptions: false,
    }),

    methods : {
      addToCart(id){
        console.log('id')
      }
    }

  }
</script>
