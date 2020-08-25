<template>
  <v-layout row>
  <v-col cols="12">
    <h1 class='text-center display-2'>{{message}}</h1>
  </v-col>

  <v-col cols="12" md="3">
    <div  class="cartPriceHolder">
      <p class="text-h5">Total</p>
      <strong>{{price}} &euro;</strong>
    </div>
  </v-col>

  <v-col cols="12" md="9">
    <v-row>
      <v-col
       cols="12"
       v-for="(pizza,i) in pizzasIncludedInOrder"
       :key="i"
       >
       <h1 class=''>{{pizza.title}}</h1>
          <v-row class='pl-5'>
                <v-col
                  v-for='size in sizes'
                  :key=size
                  cols="12"
                  >
                           <h2 v-if="$store.getters['cart/itemsOfSameType'](pizza.id, size).length"  class='color4 cursorPointer' @click="toggleItems(pizza.id, size)">
                             {{size}}


                                 <v-chip color="blue" class='mx-2'>
                                   {{$store.getters['cart/itemsOfSameType'](pizza.id, size).length}}
                                   &nbsp;
                                   {{$store.getters['cart/itemsOfSameType'](pizza.id, size) !== 1? 'items' : 'item' }}
                                 </v-chip>


                             <v-icon v-if="checkIfVisibleItemsInclude(pizza.id, size)">
                              mdi-arrow-up-drop-circle-outline
                             </v-icon>
                             <v-icon v-else>
                               mdi-arrow-down-drop-circle-outline
                             </v-icon>
                           </h2>

                           <!-- class="d-none" -->
                           <transition-group name="flip-list" tag="div">
                           <v-col
                            v-if="checkIfVisibleItemsInclude(pizza.id, size)"
                            cols='12'
                            md='8'
                            v-for="(item,i) in $store.getters['cart/itemsOfSameType'](pizza.id, size)"
                            :key="i*1000 +1"
                            >
                              <CardMenuItem :item="item" />
                            </v-col>
                            </transition-group>
                </v-col>
            </v-row>
            <hr class='color5'>
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
          message : "Cart",
          sizes : ['small', 'medium', 'big'],
          visibleItems : [],
        }
      },


      computed : {
        cartItems(){
          return this.$store.getters['cart/items']
        },
        pizzasIncludedInOrder(){
          let pizzasIdsInCart = this.cartItems.map(item => item.id)
          return this.$store.getters['menu/pizzasFromArrayOfIds'](pizzasIdsInCart)
        },
        price(){
          let price = 0;
          for(let i in this.cartItems){
            price += this.$store.getters['menu/getPizzaPrice'](this.cartItems[i].id, this.cartItems[i].size)
          }
          return price
        }
      },

      methods : {
        toggleItems(pizzaId, size){
          var itemIdent =  size + "-" + pizzaId
          if(this.visibleItems.includes(itemIdent)){
            let index = this.visibleItems.indexOf(itemIdent)
            this.visibleItems.splice(index, 1)
          } else {
            this.visibleItems = [...this.visibleItems, itemIdent]
          }
        },

        checkIfVisibleItemsInclude(pizzaId, size){
          let itemIdent =  size + "-" + pizzaId
          return this.visibleItems.includes(itemIdent)
        }
      }

  }

</script>
