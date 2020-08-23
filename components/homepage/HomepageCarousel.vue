<template>
  <v-carousel
    class="homepageCarousel"
    active-class="animated fadeInUp"
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      class="homepageCaroselItem"
      acive-class="active"
      transition="fade-transition"
      reverse-transition="fade-transition"
      :style="{ backgroundImage: 'url(' + item.image + ')' }"
    >

        <v-row
          class="fill-height textHolder"
          align-content="center"
          justify="center"
        >

          <v-col class="display-1 carouselMsg text-center color2 font-secondary" cols="12" >
              <span>{{item.text}}</span>
          </v-col>

          <v-col class="text-center" cols="12" >
          <v-btn outlined large>Order now</v-btn>
          </v-col>

        </v-row>


    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        windowWidth: null,
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
      }
    },

    computed : {
      items(){

      return [
        {
          text : 'Have yout tried the best pizza out there?',
          image : this.windowWidth > 768? require('@/assets/images/carousel/hands.png') : require('@/assets/images/carousel/hands-small.png'),
          colorClass : 'color1'
        },
        {
          text : "Italian grannies told us a secret about the best pizza",
          image : this.windowWidth > 768? require('@/assets/images/carousel/old-recipe.png') : require('@/assets/images/carousel/old-recipe-small.png'),
          colorClass : 'color2'
        }
      ]

    }
  },


    mounted() {
      this.windowWidth = window.innerWidth
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      })
    },

     methods: {
       onResize() {
         this.windowWidth = window.innerWidth
       }
     }
  }
</script>
