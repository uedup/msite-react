import { observable,action} from 'mobx';

class ProductsStore {
    @observable plist =[]
    @observable bar = 'bar'
    
    constructor(rootStore){
        this.rootStore = rootStore
    }
}

export default ProductsStore
