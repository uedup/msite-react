import { observable,action} from 'mobx';

class ProductsStore {
    @observable all =[]
    @observable foo = 'bar'
    
    constructor(rootStore){
        this.rootStore = rootStore
    }
}

export default ProductsStore
