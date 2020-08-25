<template>

          <v-card
            class='cardPizzaMenuItem'
          >
            <div class="d-flex flex-no-wrap justify-space-between itemData">
              <div>

                <!-- TITLE -->
                <!-- <v-card-title
                  class="text-h5"
                  v-text="pizza.title"
                >
                </v-card-title> -->

                <h3 class='pa-3'>{{pizza.title}}</h3>
                <p class="px-3"><small>{{item.size}} size </small> <br> {{price}} &euro;</p>

                <!-- TEXT -->
                <!-- <v-card-text v-text="pizza.shortDesc"></v-card-text> -->
              </div>

              <!-- IMAGE -->
              <v-avatar
                class="ma-3"
                size="50"
                tile
              >
                <v-img  :src="require('~/assets/images/pizzas/' + pizza.cardImage)"></v-img>
              </v-avatar>
            </div>

            <!-- ACTIONS -->
            <v-card-actions>
                  <!-- GO TO THE PIZZA PAGE -->
                  <nuxt-link
                  :to="{ name: 'pizzas-slug', params: { slug: pizza.slug }}"
                  class='noDecoration'
                  >
                  <v-btn
                  class='color2 ml-4'
                  >
                  Visit page
                  </v-btn>
                  </nuxt-link>

                  <v-btn class='ml-2' @click="removeFromCart">
                    <v-icon class="mr-1">mdi-cart-remove</v-icon> Remove
                  </v-btn>


            </v-card-actions>

          </v-card>

</template>

<script>
  import CartItem from '@/classes/CartItem.js'
  export default {
    props : {
      item : {
        Type : Object,
        required: true
      }
    },

    data: () => ({
      showCartOptions: false,
    }),

    computed : {
      pizza(){
        return this.$store.getters['menu/getPizzaById'](this.item.id)
      },
      price(){
        return this.$store.getters['menu/getPizzaPrice'](this.item.id, this.item.size)
      }
    },

    methods : {
      removeFromCart(){
        this.$store.commit('cart/REMOVE_FROM_CART_BY_IDENTIFICATOR', this.item.cartIdentificator)
      }
    }
  }
</script>
