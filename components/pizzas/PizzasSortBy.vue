<template>
    <v-row align="center">
      <v-col cols="8" offset="2" md="3" offset-md="9" class=''>
        <v-select
          v-model="select"
          :items="items"
          item-text="text"
          item-value="value"
          @change='valueWasChanged'
        >
        <template v-slot:label> <span class='color1 mb-5'>Order by</span></template>
        </v-select>
      </v-col>
    </v-row>
</template>

<script>
  export default {
    data () {
      return {
        select: { text: 'Title Ascending', value: 'title-asc' },
        items: [
          { text: 'Title Ascending', value: 'title-asc' },
          { text: 'Title Descending', value: 'title-desc' },
          { text: 'Number of orders', value: 'orders-desc' },
        ],
      }
    },

    methods : {
      valueWasChanged(val){
        this.$emit('sortValueChaged', val)
      }
    }


  }
</script>
