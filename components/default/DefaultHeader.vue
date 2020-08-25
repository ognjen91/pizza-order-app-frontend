<template>
<div>

  <v-navigation-drawer v-model="drawer"
                       :clipped="clipped"
                       temporary
                       fixed
                       app>
      <v-list>

        <v-list-item v-for="(item, i) in items"
                     :key="i"
                     :to="item.to"
                     router
                     exact>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
        </v-list-item>

      </v-list>

  </v-navigation-drawer>



  <v-app-bar
    :clipped-left="clipped"
    fixed
    app
  >


  <nuxt-link
  :to="{ path: '/'}"
  class="noDecoration mx-3"
  >
  <v-toolbar-title v-text="title" />
  </nuxt-link>

  <nuxt-link
  :to="{ name: 'pizzas'}"
  class="noDecoration mx-3"
  >
  Full Menu
  </nuxt-link>

    <!-- <v-btn
      icon
      @click.stop="miniVariant = !miniVariant"
    >
      <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
    </v-btn> -->
    <!-- <v-btn
      icon
      @click.stop="clipped = !clipped"
    >
      <v-icon>mdi-application</v-icon>
    </v-btn> -->
    <!-- <v-btn
      icon
      @click.stop="fixed = !fixed"
    >
      <v-icon>mdi-minus</v-icon>
    </v-btn> -->

  <v-spacer />

    <!-- CART ICON -->
    <nuxt-link :to="{name : 'cart'}" class='noDecoration'>
      <!-- show cart icon with badge if there is an item in the cart -->
      <v-badge :content="cartItemsNumber" v-if="cartItemsNumber"><v-icon class='color1'> mdi-cart </v-icon></v-badge>
      <!-- show cart icon only if there is  no items in the cart -->
      <v-icon v-else> mdi-cart </v-icon>

    </nuxt-link>
    <!-- <v-icon></v-icon> -->
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
  </v-app-bar>




</div>
</template>


<script>

  export default {
    data () {
      return {
        clipped: false,
        drawer: false,
        right: true,
        title: 'Pizza Order App',
        items : [
          {
            title : 'Home',
            to : '/',
            icon : 'mdi-home'
          },
          {
            title : 'Full Menu',
            to : 'full-menu',
            icon : 'mdi-book-open-blank-variant'
          },
        ]
      }
    },

    computed: {
      cartItemsNumber(){
        return this.$store.getters['cart/items'].length
      }
    }

  }

</script>
