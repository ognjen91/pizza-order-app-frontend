<template>
  <v-app>
      <DefaultHeader />

      <v-main>
        <v-container fluid class='pt-0'>
          <nuxt />
        </v-container>
      </v-main>

     <DefaultFooter />
  </v-app>
</template>

<script>
import DefaultHeader from '@/components/default/DefaultHeader'
import DefaultFooter from '@/components/default/DefaultFooter'

export default {
  mounted() {
    // window.addEventListener('beforeunload', this.saveCartItems)
    window.addEventListener('beforeunload', (event) => {
      this.saveCartItems()
   })

   this.$store.commit('cart/LOAD_ITEMS_FROM_STORAGE')


  },

  methods : {
    saveCartItems(){
      this.$store.commit('cart/SAVE_ITEMS_IN_STORAGE')
    }
  }
}
</script>
