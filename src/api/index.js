const products = [
    {'title':'iPad min 12','price':2389.12,'quantity':2}
]

export const getProducts = (callback)=>{
    setTimeout(()=>{
        callback(products)
    },200)
}