<template>
<div>
    <!-- i is the size -->
    <v-row justify='center' v-for="(option, i) in options" :key="i">

      <!-- MINUS => REMOVE FROM CART -->
      <v-col cols="2">
        <v-icon class='cursorPointer'>mdi-minus-circle-outline</v-icon>
      </v-col>

      <!-- TITLE AND PRICE -->
      <v-col cols="6" class='text-center' >
        <span class="color2">{{i}}</span>
        <v-chip inline>
          {{option.price}} &euro;
        </v-chip>
        <strong>{{$store.getters['cart/numberOfSameItemsTypeInCart'](id, i)}}</strong>
      </v-col>

      <!-- PLUS => ADD TO CART -->
      <v-col cols="2">
        <v-icon class='cursorPointer' @click="addToCart(i)">mdi-plus-circle-outline</v-icon>
      </v-col>
    </v-row>
    <!-- MEDIUM -->
    <!-- BIG -->
</div>
</template>

<script>
  import CartItem from '@/classes/CartItem.js'

  export default{
    props : {
      options : {
        Type : Object,
        required : false,
        default : () => {}
      },
      id : {
        Type : Number,
        required : true
      }
    },


    methods : {
      addToCart(size){
        // console.log(`${size}`)
        let newCartItem = new CartItem(this.id, size, this.$store)
        newCartItem.addToCart()

        // newCartItem.existsInCart()
      }
    }
  }

</script>
