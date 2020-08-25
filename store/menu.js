//state
export const state = () => ({
    pizzas : [],
    spices : {}
})


export const getters = {
    pizzas : state => state.pizzas,
    getPizzaBySlug : state => (slug) => state.pizzas.find(pizza => pizza.slug == slug),
    getPizzaById : state => (id) => state.pizzas.find(pizza => pizza.id == id),
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
    getPizzaPrice : state => (id,size) => {
      let thePizza  = state.pizzas.find(pizza => pizza.id == id)
      return thePizza.options[size].price
    },

    pizzasSortedByTitle : state => (order) => {
      let pizzas = [...state.pizzas]
      pizzas.sort(function(a, b) {
        return order == 'asc'? a['title'] > b['title'] : b['title'] > a['title'];
      });

      console.log(pizzas)
      return pizzas
    },


    spices : state => state.spices
}

//mutations
export const mutations = {
  SET_PIZZAS : function(state, payload){
    payload.pizzas.forEach((pizza, i) => {
      // console.log(state.pizzas)
      // console.log(state.pizzas.find(thePizza => thePizza.id == pizza.id))
      if(state.pizzas.find(thePizza => thePizza.id == pizza.id)) return //return if pizza is already loaded (it is fully loaded from fetch hook in pizza/_slug route)
      state.pizzas = [...state.pizzas, pizza]
    });

    // state.pizzas = payload.pizzas
  },
  SET_FULL_PIZZA : function(state, pizza){
    let pizzaToSet = state.pizzas.find(thePizza => thePizza.id == pizza.id)
    // console.log('fetch')
    // pizzaToSet? (!"fullLoaded" in pizzaToSet? Object.assign(pizzaToSet, pizza) : null) : (state.pizzas = [...state.pizzas, pizza])
    if(pizzaToSet){
      console.log(1)
      console.log(Object.assign(pizzaToSet, pizza) )

      // console.log("fullyLoaded" in pizzaToSet, pizzaToSet, pizza)
      !"fullyLoaded" in pizzaToSet? Object.assign(pizzaToSet, pizza) : null
    } else {
      // console.log(2)
      state.pizzas = [...state.pizzas, pizza]
    }
  }
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
  },

  async loadPizzaFullData({commit}, slug){
    let pizza = await this.$axios.$get(`pizzas/${slug}`)
    console.log(pizza)

  }
}
