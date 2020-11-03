const INITIAL_STATE = {
    size : "",
    crust:"",
    toppings: [],
    page:"",
    price: [0,0,0],
    toppingsMax: 5

}

function reducer(state = INITIAL_STATE, action){
    switch (action.type) {
        case "SET_SIZE":
            
        return {
            ...state,
            size: action.value
        }
        
        case "SET_CRUST":
            
        return {
            ...state,
            crust: action.value
        }

        case "SET_TOPPINGS":
            
            return {
                ...state,
                toppings: action.value
            }
        case "SET_PAGE":
        
            return {
                ...state,
                page: action.value
            }

        case "SET_VALUE":
    
            return {
                ...state,
                price: state.price.map((price, index)=>index===action.index?action.value:price)
            }
        case "SET_MAX":
        
            return {
                ...state,
                toppingsMax: action.value
            }
   

        default:
            return state
    }
    
}

export default reducer;