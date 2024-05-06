export const products = [
{ id: 1, stripeId:'price_1PDGYxDvSYddFJCDS0RFwfRF',  title: 'Rosa Jacket', img:'./images/frank-flores-cutout.png', cost: 44.99 },
{ id: 2, stripeId: 'price_1PDGaXDvSYddFJCDV0ZEV9ME', title: 'Rosa Jacket', img:'./images/alireza-dolati-cutout.png', cost: 44.99 }
]

export const getProductData = (id) => {

   let productData = products.find((product) => product.id === id)

   if(productData === undefined){
    console.log(`There is no product for this ID: ${id}`)
    return undefined
   } else {
      return productData 
   }  
}