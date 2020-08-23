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

}
</script>
