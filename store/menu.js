//state
export const state = () => ({
    pizzas : [
      {
        id : 1,
        title : "Pizza capricciosa",
        slug : "pizza-capricciosa",
        shortDesc : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
        cardImage : '1.jpg',
        price : '15.5',
        orders : 56,
      },
      {
        id : 2,
        title : "Chicago-Style Pizza",
        slug : "chicago-style-pizza",
        shortDesc : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
        cardImage : '2.jpg',
        price : '18.5',
        orders : 75,
      },
      {
        id : 3,
        title : "Pepperoni Pizza",
        slug : "pepperoni-pizza",
        shortDesc : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
        cardImage : '3.jpg',
        price : '19.0',
        orders : 124,
      },
      {
        id : 4,
        title : "Pizza marinara",
        slug : "pizza-marinara",
        shortDesc : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
        cardImage : '4.jpg',
        price : '16.0',
        orders : 95,
      },
      {
        id : 5,
        title : "Calzone Pizza",
        slug : "calzone-pizza",
        shortDesc : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
        cardImage : '5.jpg',
        price : '14.5',
        orders : 23,
      },
      {
        id : 6,
        title : "Pizza Margherita",
        slug : "pizza-margerita",
        shortDesc : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
        cardImage : '6.jpg',
        price : '19.5',
        orders : 38,
      },
      {
        id : 7,
        title : "Pizza Napoletana",
        slug : "pizza-napoletana",
        shortDesc : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
        cardImage : '7.jpg',
        price : '11.00',
        orders : 100,
      },
      {
        id : 8,
        title : "Quatro formaggi",
        slug : "quatro-foramggi",
        shortDesc : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
        cardImage : '8.jpg',
        price : '15.5',
        orders : 101,
      },
    ],
    spices : {}
})


export const getters = {
    pizzas : state => state.pizzas,
    //sorting
    pizzasSortedByOrders : state => (numberOfItems = 5) => {
      console.log(numberOfItems);
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
    state.pizzas = payload
  },
}


export const actions = {


}
