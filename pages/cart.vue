<template>
  <v-layout row>
  <v-col cols="12">
    <h1 class='text-center'>{{message}}</h1>
  </v-col>

  <v-col cols="12" md="3">
    <div  class="cartPriceHolder redb">
      <p class="text-h5">Total</p>
      <strong>{{price}} &euro;</strong>
    </div>
  </v-col>

  <v-col cols="12" md="9">
    <v-row>
      <v-col
       cols="12"
        md="4"
        v-for="(item,i) in cartItems"
        :key="item.cartIdentificator"
      >
        <CardMenuItem :item="item" />
      </v-col>
    </v-row>
  </v-col>




  </v-layout>
</template>


<script>
  import CardMenuItem from '@/components/reusable/cards/CardMenuItem'
  export default {
      components : {
        CardMenuItem
      },

      data(){
        return {
          message : "Cart"
        }
      },


      computed : {
        cartItems(){
          return this.$store.getters['cart/items']
        },
        allPizzas(){
          return this.$store.getters['menu/pizzas']
        },

        price(){
          let price = 0;
          for(let i in this.cartItems){
            price += this.$store.getters['menu/getPizzaPrice'](this.cartItems[i].id, this.cartItems[i].size)
          }
          return price
        }
      }

  }

</script>
