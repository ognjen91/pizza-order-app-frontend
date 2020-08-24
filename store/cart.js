export const state = () => ({
  items : []
})


export const getters = {
  items : state => state.items,
  isItemInCart : (state) => (cartIdentificator) => {
    return !!state.items.find(item => item.cartIdentificator == cartIdentificator)
  },
  numberOfSameItemsTypeInCart : (state) => (id, size) => {
    let sameTypeItems = state.items.filter(item => item.id == id && item.size == size)
    return sameTypeItems.length
  }
}

//mutations
export const mutations = {
  ADD_ITEM : function(state, payload){
    state.items = [...state.items, payload]
  },
  REMOVE_FROM_CART : function(state, cartIdentificator){
    let index = state.items.findIndex(item => item.cartIdentificator == cartIdentificator)
    if(index !== -1) state.items.splice(index, 1)
  }

}


export const actions = {


}
