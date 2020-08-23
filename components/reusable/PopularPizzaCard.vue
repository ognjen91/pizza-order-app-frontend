<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >

    <!-- TOP IMAGE -->
    <v-img
    :src="require('~/assets/images/pizzas/' + pizza.cardImage)"
      height="200px"
    ></v-img>
    <!-- :src="require('~/assets/images/pizzas/' + pizza.cardImage)" -->

    <!-- TITLE -->
    <nuxt-link
    :to="{ name: 'pizzas-slug', params: { slug: pizza.slug }}"
    tag="v-card-title"
    class='font-secondary color2 cursorPointer'
    >
    {{pizza.title}}
    </nuxt-link>

    <!-- SUBTITLE -->
    <v-card-subtitle>
      {{pizza.orders}} {{pizza.orders == 1? 'orders' : 'order'}} so far
    </v-card-subtitle>

    <!-- ACTIONS -->
    <v-card-actions>
        <!-- ADD TO CART -->
        <v-btn text @click='addToCart(pizza.id)'>Add to cart</v-btn>

        <!-- GO TO THE PIZZA PAGE -->
        <nuxt-link
        :to="{ name: 'pizzas-slug', params: { slug: pizza.slug }}"
        tag="v-btn"
        class='color2'
        >More Details</nuxt-link>
          <!-- More details -->
        <!-- </v-btn> -->

        <v-spacer></v-spacer>

        <v-btn
          icon
          @click="show = !show"
        >
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{pizza.shortDesc}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
  export default {
    props : {
      pizza : {
        Type : Object,
        required : true
      }
    },

    data: () => ({
      show: false,
    }),

    methods : {
      addToCart(id){
        console.log('id')
      }
    }

  }
</script>
