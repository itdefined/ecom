const cartReducer = (state, action) => 
    {
        if (action.type === 'ADD_TO_CART') 
        {
            let {product, quantity} = action.payload;
    
            let cartProduct = {
                product, 
                quantity
            }
    
            return {
                ...state, 
                cart: [...state.cart, cartProduct]
            }
        }

        if (action.type === 'REMOVE_FROM_CART') 
        {   console.log(state.cart[0].product.id, action.payload.product.id)
            let updatedCart = state.cart.filter(item => item.product.id !== action.payload.product.id)
            return {
                ...state, 
                cart: updatedCart
            }
        }

        if (action.type === "CART_ITEM_PRICE_TOTAL") {
            let { total_item, total_price } = state.cart.reduce(
              (accum, curElem) => {
                console.log(curElem)
                let { product, quantity } = curElem;
        
                accum.total_item += quantity;
                accum.total_price += product.price * quantity;
        
                return accum;
              },
              {
                total_item: 0,
                total_price: 0,
              }
            );
            return {
              ...state,
              total_item,
              total_price,
            };
          }

};


export default cartReducer;