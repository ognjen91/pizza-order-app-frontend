export const state = () => ({
  items : []
})


export const getters = {
  items : state => state.items,
  isItemInCart : (state) => (cartIdentificator) => {
    return !!state.items.find(item => item.cartIdentificator == cartIdentificator)
  },
  getItemByCartIdentificator : state => (cartIdentificator) => {
    return state.items.find(item => item.cartIdentificator == cartIdentificator)
  },
  itemsOfSameType : (state) => (id, size) => {
    return state.items.filter(item => item.id == id && item.size == size)
  },
  numberOfItemsOfSameTypeInCart : (state) => (id) => {
    // console.log(id)
    // return state.items.length
    return state.items.filter(item => item.id == id).length
  },
  numberOfItemsOfSameTypeAndSizeInCart : (state) => (id, size) => {
    let sameTypeItems =  state.items.filter(item => item.id == id && item.size == size)
    return sameTypeItems.length
  },
  allItemsOfSameTypeAndSizeInCartAreTheSame : (state) => (id, size) => {
    let sameTypeItems = state.items.filter(item => item.id == id && item.size == size)
    if(!sameTypeItems) return true
    // console.log('comapring')
    let comparable = sameTypeItems[0] //get first item for comparisson
    delete comparable['cartIdentificator']; //remove unqiure identificator
    // console.log(comparable.size)
    // now loop through objects and check if sone of same items have different characterictics
    return 'undefined' !== sameTypeItems.find(item => {
      let clonedItem = {...item} //clone so we can remove identificator which is unique for every item
      delete clonedItem['cartIdentificator']; //remove unqiure identificator
      // console.log( JSON.stringify(comparable),  JSON.stringify(clonedItem), JSON.stringify(comparable) !== JSON.stringify(clonedItem))
      return JSON.stringify(comparable) !== JSON.stringify(clonedItem);
    })
  }
}

//mutations
export const mutations = {
  ADD_ITEM : function(state, payload){
    state.items = [...state.items, payload]
  },

  REMOVE_FROM_CART_BY_IDENTIFICATOR : function(state, cartIdentificator){
    let index = state.items.findIndex(item => item.cartIdentificator == cartIdentificator)
    if(index !== -1) state.items.splice(index, 1)
  },

  REMOVE_LAST_ITEM_IN_CART : function(state, payload){
    let index = state.items.findIndex(item => item.id == payload.id &&  item.size == payload.size)
    console.log(index)
    if(index !== -1) state.items.splice(index, 1)
  },

  SAVE_ITEMS_IN_STORAGE : function(state){
    localStorage.setItem('cartItems', JSON.stringify(state.items));
  },
  LOAD_ITEMS_FROM_STORAGE : function(state){

    let items = localStorage.getItem('cartItems')
    if(items) items = JSON.parse(items)
    state.items = [...items]
  },

  CLEAR_ITEMS : function(state){
    state.items = []
  }

}


export const actions = {


}
