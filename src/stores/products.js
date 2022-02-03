import { observable,action} from 'mobx';
import { getProducts} from '../api';

class ProductsStore {
    @observable all =[]
    
    constructor(rootStore){
        this.rootStore = rootStore
    }

    @action.bound getAllProducts(){
        getProducts((products)=>{
            this.setAll(products)
        })
    }

    @action.bound setAll(p){
        this.all = p
    }
    
}

export default ProductsStore
