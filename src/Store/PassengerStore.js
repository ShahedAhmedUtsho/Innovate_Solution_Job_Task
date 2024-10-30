


import { Store } from "pullstate";

export const PassengerStore = new Store({
    adult: 1, // Minimum 1 adult required
    children: [], // Array of child objects with index and age
    infants: [], // Array of infant objects with index and age
});



// get all the passenger count ; 


export const usePassengerCount = () => {
    return PassengerStore.useState(s => s.adult + s.children.length + s.infants.length)
}