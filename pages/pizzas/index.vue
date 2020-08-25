<template>
<v-row class="pizzasPage">
  <v-col cols='12' class=''>
    <h1 class='text-center display-3'>Full Menu</h1>

    <p class='text-center mb-0 color5'>
      All dishes from the menu are made from natural and non-gmo ingredients. <br>
      For the sake of quality assurance, our developers test the menu items weekly.
    </p>
  </v-col>

  <!-- get desired number of items -->
 <!-- <v-col cols="6" sm="2" offset="3" offset-sm="0">
   <v-select
   :items="numberOfPizzasToShow"
   v-model="activeNumberToDisplay"
   >
   <template v-slot:append> <span class='color1 mr-2'>pizzas</span></template>
   <template v-slot:label> <span class='color1 mb-5'>Show...</span></template>
 </v-select>
 </v-col> -->

 <v-col cols="12" class='px-md-5'>
   <PizzasSortBy @sortValueChaged="sortByNewValue" />
 </v-col>

  <v-col cols="12" class='px-md-5'>
    <v-row>
      <v-col
       col="12"
        md="6"
        v-for="(pizza, i) in pizzas"
        :key="pizza.id"
        class="cardPizzaMenuItemHolder"
         >
        <CardPizzaMenuItem
        :pizza="pizza"
        :show-number-of-orders="ordering == 'orders-desc'"
        />
      </v-col>
    </v-row>
  </v-col>


</v-row>
</template>




<script>
  import CardPizzaMenuItem from '@/components/reusable/cards/CardPizzaMenuItem'
  import PizzasSortBy from '@/components/pizzas/PizzasSortBy'
  export default{
    components : {
      CardPizzaMenuItem,
      PizzasSortBy
    },

    data(){
      return {
        ordering : 'title-asc',
        validOrdering : ['title-asc', 'title-desc', 'orders-desc']
      }
    },

    computed : {
      pizzas(){
        let pizzas = this.$store.getters['menu/pizzas']
        switch(this.ordering) {
          case 'title-asc':
            return this.$store.getters['menu/pizzasSortedByTitle']('asc')
            break;
          case 'title-desc':
            return this.$store.getters['menu/pizzasSortedByTitle']('desc')
            break;
          case 'orders-desc':
            console.log('ords')
            return this.$store.getters['menu/pizzasSortedByOrders'](pizzas.length)
          default:
          return pizzas
        }
      }
    },


    methods : {
      sortByNewValue(val){
        //validate that value is valid
        if(!this.validOrdering.includes(val)) return
        this.ordering = val
      }
    }
  }
</script>
