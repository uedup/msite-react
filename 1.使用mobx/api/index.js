const products = [
    {id:'001',title:'iPad min 12',price:2389.12,quantity:2},
    {id:'002',title:'iWacth 3',price:3600.11,quantity:10},
    {id:'003',title:'Mac pro 2022',price:12312.22,quantity:5}
]

export const getProducts = (callback)=>{
    setTimeout(()=>{
        callback(products)
    },300)
}

export const purchase = (products,callback,errorCallback)=>{
    setTimeout(()=>{
        Math.random()>0.5?callback():errorCallback()
    },300)
}