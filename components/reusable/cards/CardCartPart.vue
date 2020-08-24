<template>
<div>
    <!--
  !!!!  i is the size !!!!
   -->
    <v-row justify='center' v-for="(option, i) in options" :key="i">

      <!-- MINUS => REMOVE FROM CART -->
      <v-col cols="2">
        <v-icon
         class='cursorPointer removeItemIcon'
         :class="{'inactive noPointerEvents' : !$store.getters['cart/numberOfItemsOfSameTypeAndSizeInCart'](id, i)}"
         @click="removeFromCart(i)"
        >
         mdi-minus-circle-outline
       </v-icon>
      </v-col>

      <!-- TITLE AND PRICE -->
      <!-- SHOW TITLE WITH BADGE IF THERE ARE ITEMS OF THE PIZZA WITH THE SIZE IN SHOPPING CART -->
      <v-col cols="4" class='text-left' >
        <v-badge
        color="#950740"
        v-if="$store.getters['cart/numberOfItemsOfSameTypeAndSizeInCart'](id, i)"
        :content="$store.getters['cart/numberOfItemsOfSameTypeAndSizeInCart'](id, i)"
        >
        <span class="color2 text-no-wrap">
        {{i}}
        <!-- : {{$store.getters['cart/allItemsOfSameTypeAndSizeInCartAreTheSame'](id, i)}} -->
        </span>
        </v-badge>

        <!-- TITLE ONLY IF THERE ARE NO ITEMS OF THE PIZZA WITH THE SIZE IN SHOPPING CART -->
        <span class="color2  text-no-wrap" v-else>
          {{i}}
        </span>
        <!-- <v-chip inline>
        </v-chip> -->

        <!-- <strong>{{$store.getters['cart/numberOfItemsOfSameTypeAndSizeInCart'](id, i)}}</strong> -->
      </v-col>
      <v-col cols="2" class='text-left text-no-wrap' >
        {{option.price}} &euro;
      </v-col>



      <!-- PLUS => ADD TO CART -->
      <v-col cols="2">
        <v-icon
         class='cursorPointer color1'
         @click="addToCart(i)"
         >
         mdi-plus-circle-outline
        </v-icon>
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
        let newCartItem = new CartItem(this.id, size, null, this.$store)
        newCartItem.addToCart()

        // newCartItem.existsInCart()
      },

      removeFromCart(size){
        // CHECK IF ALL ITEMS OF THIS TYPE AND SIZE ARE THE SAME
        let itemsOfSameType = this.$store.getters['cart/numberOfItemsOfSameTypeAndSizeInCart'](this.id, size)
        // if all items are the same, delete last item of this type and size
        if (itemsOfSameType){
          // console.log('deleting')
          this.$store.commit('cart/REMOVE_LAST_ITEM_IN_CART', {
            id : this.id,
            size : size,
          })
        }
      }
    }
  }

</script>
