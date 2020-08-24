
//state
export const state = () => ({

})

//getters
export const getters = {

}

//mutations
export const mutations = {

}


export const actions = {
  async nuxtServerInit({dispatch}, {$axios}){
     await  dispatch('menu/loadPizzas', {}, {root:true})
  },
}
