import CartStore from './cart'
import ProductsStore from './products'

class RootStore {
    constructor(){
        this.cartStore = new CartStore(this);
        this.productsStore = new ProductsStore(this);
    }
}

export default RootStore