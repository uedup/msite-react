import { observable,action, computed} from 'mobx';
import * as shop from '../api';

class CartStore {
    //{id:'003',quantity:10}
    @observable items =[]
    @observable status = ''

    constructor(rootStore){
        this.rootStore = rootStore
    }

    @action.bound addToCart(product){
        const prod = this.items.find(cartItem=>cartItem.id === product.id);
        if(prod){
            prod.quantity++
        }else{
            this.items.push({
                id:product.id,
                quantity:1
            })
        }
        this.rootStore.productsStore.decrementInventory(product)
        // console.log(this.items)
    }

    @computed get cartsItem(){
        const prods = this.items.map((obj)=>{
            const prod = this.rootStore.productsStore.all.find(item=>item.id === obj.id);
            return {
                id:prod.id,
                title:prod.title,
                price:prod.price,
                quantity:obj.quantity
            }
        })
        return prods;
    }

    @computed get totalPrice(){
       return this.cartsItem.reduce((pre,item)=>{
            return pre+item.quantity*item.price
        },0)
    }

    @action.bound checkout(products){
        //备份购物车数据
        const savedProds =[...products];
        //清空结算状态
        this.changeStatus(null)
        //清空购物车
        this.setAll([])
        //发起结算请求
        shop.purchase(products,()=>{
             //  成功：结算状态 success
             this.changeStatus('success')
        },()=>{
            //  失败：结算状态 failure 还原购物车
            this.changeStatus('failure')
            this.setAll(savedProds)
        })
    }

    @action.bound changeStatus(status){
        this.status = status;
    }

    @action.bound setAll(products){
        this.items = products
    }
}

export default CartStore