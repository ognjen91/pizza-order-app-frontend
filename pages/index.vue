<template>
  <v-layout
  class='pt-0'
  >
  <v-row>

        <v-flex
          xs12
          class="mt-0 pa-0"
        >
        <HomepageCarousel class='' />
      </v-flex>

      <v-flex xs12 class='defaultSection'>
        <HomepageMostPopularContent />
      </v-flex>

      <v-flex xs12 class='defaultSection'>
        <HomepageAboutUs />
      </v-flex>


    </v-row>
  </v-layout>
</template>

<script>
import HomepageCarousel from '@/components/homepage/HomepageCarousel'
import HomepageMostPopularContent from '@/components/homepage/HomepageMostPopularContent'
import HomepageAboutUs from '@/components/homepage/HomepageAboutUs'

export default {
  components: {
    HomepageCarousel
  }
}
</script>
