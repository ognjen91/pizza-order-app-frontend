<template>
  <v-row class=''>
    <v-col cols="12" sm="10">
      <h1 class='text-center text-sm-left animated pulseElement'>Most Popular Pizzas In Town</h1>
    </v-col>

    <!-- get desired number of items -->
   <v-col cols="6" sm="2" offset="3" offset-sm="0">
     <v-select
     :items="numberOfPizzasToShow"
     v-model="activeNumberToDisplay"
     >
     <template v-slot:append> <span class='color1 mr-2'>pizzas</span></template>
     <template v-slot:label> <span class='color1 mb-5'>Show...</span></template>
   </v-select>
   </v-col>



    <v-col cols="12" class=''>
      <v-row class=''>
        <v-col
        cols="12"
        sm='6'
        md='4'
        class=''
        :class="{'pl-sm-0' : i + 1 == popularPizzas.length % 3}"
        v-for="(pizza, i) in popularPizzas"
        :key="i"
        >

            <CardPopularPizza
            :pizza="pizza"
            />


      </v-col>
    </v-row>
  </v-col>



  </v-row>
</template>




<script>
import CardPopularPizza from '@/components/reusable/cards/CardPopularPizza'

export default {
  components : {
    CardPopularPizza
  },

  data(){
    return {
      activeNumberToDisplay : "6",
      numberOfPizzasToShow : ["3", "6", "9", "12"],
    }
  },

  computed : {
    popularPizzas(){
      let numberOfItemsToDisplay = +this.activeNumberToDisplay
      return this.$store.getters['menu/pizzasSortedByOrders'](numberOfItemsToDisplay)
    }
  },

  watch : {
    activeNumberToDisplay(newVal){

    }
  }
}


</script>
