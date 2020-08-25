<template>

          <v-card
            class='cardPizzaMenuItem'
          >
            <div class="d-flex flex-no-wrap justify-space-between itemData">
              <div>

                <!-- TITLE -->
                <v-card-title
                  class="headline"
                  v-text="pizza.title"
                >
                </v-card-title>

                <!-- SUBTITLE -->
                <v-card-subtitle v-text="pizza.ingredients"></v-card-subtitle>

                <!-- TEXT -->
                <v-card-text v-text="pizza.shortDesc"></v-card-text>
                <v-card-text v-if="showNumberOfOrders">
                  <v-chip class="mb-4" color="primary">
                      {{pizza.orders}} {{pizza.orders == 1? 'order' : 'orders'}} so far
                    </v-chip>
                </v-card-text>
              </div>

              <!-- IMAGE -->
              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img  :src="require('~/assets/images/pizzas/' + pizza.cardImage)"></v-img>
              </v-avatar>
            </div>

            <!-- ACTIONS -->
            <v-card-actions>
                  <!-- ADD TO CART -->
                  <v-btn text @click='showCartOptions = !showCartOptions'>
                    <!-- show icon with badge if there is any item of any size of this pizza in the cart -->
                    <v-badge v-if="numberOfItemsOfTheTypeInCart" :content="numberOfItemsOfTheTypeInCart">
                      <v-icon>
                        mdi-cart-arrow-down
                      </v-icon>
                    </v-badge>
                    <!-- show icon without badge if there is no any items of any size of this pizza in the cart -->
                    <v-icon v-else>
                      mdi-cart-arrow-down
                    </v-icon>
                  </v-btn>

                  <!-- GO TO THE PIZZA PAGE -->
                  <nuxt-link
                  :to="{ name: 'pizzas-slug', params: { slug: pizza.slug }}"
                  class='noDecoration'
                  >
                  <v-btn
                  class='color2 ml-4'
                  >
                  More Details
                  </v-btn>
                  </nuxt-link>


                  <v-spacer></v-spacer>

                  <!-- SHOW DETAILS BUTTON -->
                  <v-btn
                    icon
                    @click="showCartOptions = !showCartOptions"
                    v-show='showCartOptions'
                  >
                    <v-icon
                    >{{ showCartOptions ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                  </v-btn>
            </v-card-actions>


            <!-- EXPANSION FOR CART OPTIONS -->
            <v-expand-transition>
              <div v-show="showCartOptions">
                <CardCartPart :options="pizza.options" :id="pizza.id" />
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
      },
      showNumberOfOrders : {
        Type : Boolean,
        required : false,
        default : false
      }
    },

    data: () => ({
      showCartOptions: false,
    }),

    computed : {
      minPrice(){
        let minPrice = 0;
        for(let x in this.pizza.options){
          console.log(this.pizza.options[x])
        }
      },

      numberOfItemsOfTheTypeInCart(){
        return this.$store.getters['cart/numberOfItemsOfSameTypeInCart'](this.pizza.id)
      }
    }
  }
</script>
