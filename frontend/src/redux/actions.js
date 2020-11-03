export function setSize (value) {
   return {
        type: "SET_SIZE",
        value: value
    }
}
export function setCrust (value) {
    return {
         type: "SET_CRUST",
         value:value
     }
 }
 export function setToppings (value) {
    return {
         type: "SET_TOPPINGS",
         value:value
     }
 }
 export function setPage (value) {
    return {
         type: "SET_PAGE",
         value:value
     }
 }
 export function setValue (value,index) {
    return {
         type: "SET_VALUE",
         value:value,
         index:index
     }
 }
 export function setMax (value) {
    return {
         type: "SET_MAX",
         value:value
     }
 }