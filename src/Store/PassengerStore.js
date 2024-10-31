


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

//  fet the childern count
export const useTravelers_child = () => {
    return PassengerStore.useState(s => s.children.length)
}
// get the children age
export const useTravelers_child_ages = () => {
    const childrens = PassengerStore.useState(s => s.children)

    return childrens.map(child => child.age)


}


// get the infants count
export const useTravelers_infant = () => {
    return PassengerStore.useState(s => s.infants.length)
}
// get the infants age
export const useTravelers_infant_ages = () => {
    const infants = PassengerStore.useState(s => s.infants)
    return infants.map(infant => infant.age)
}

// traveler adult state and update the traveler adult state
export const useTravelerAdult = () => {
    return PassengerStore.useState(s => s.adult)

}

export const TravelerAdultUpdate = () => {
    PassengerStore.update(s => {
        s.adult = s.adult + 1
    })

}
