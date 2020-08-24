export default class CartItem {


  constructor(pizzaId, size, cartIdentificator = null, context = null) {
    this.cartIdentificator = cartIdentificator? cartIdentificator : new Date().getTime() + `-${pizzaId}` //will use (timestamp - pizzaId) as a heleper unique identificator
    this.id = pizzaId
    this.size = size
    this.context = context //so we can use vuex store now
    this.spices = {
      ketchup : 0,
      mayonnaise : 0,
    },
    this.message = ""
  }


  existsInCart(){
    return !!this.context.getters['cart/isItemInCart'](this.id, this.size)
  }


  addToCart(){
    this.context.commit('cart/ADD_ITEM', {
      cartIdentificator : this.cartIdentificator,
      id : this.id,
      size : this.size
    })
  }

  removeFromCart(){
    if(this.existsInCart()) this.context.commit('cart/REMOVE_FROM_CART_BY_IDENTIFICATOR')(this.cartIdentificator)
  }






}
