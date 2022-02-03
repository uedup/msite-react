import { observable,action} from 'mobx';

class CartStore {
    @observable all =[]
    @observable foo = 'bar'

    constructor(rootStore){
        this.rootStore = rootStore
    }
}

export default CartStore