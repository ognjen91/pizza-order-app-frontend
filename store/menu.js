//state
export const state = () => ({
    pizzas : [],
    spices : {}
})


export const getters = {
    pizzas : state => state.pizzas,
    //sorting
    pizzasSortedByOrders : state => (numberOfItems = 5) => {
      // console.log(numberOfItems);
      let pizzas = [...state.pizzas]
      pizzas.sort(function(a, b) {
          return b['orders'] - a['orders'];
      });
      // return exact number
      return pizzas.slice(0, numberOfItems)

    },
    spices : state => state.spices
}

//mutations
export const mutations = {
  SET_PIZZAS : function(state, payload){
    state.pizzas = payload.pizzas
  },
}


export const actions = {

  async loadPizzas({commit}, payload){
    try {
      let pizzas = await this.$axios.$get('pizzas')
      // console.log(pizzas)
      commit('SET_PIZZAS', {pizzas : pizzas})
    } catch (error) {
      console.log(error);
    }
  }
}
