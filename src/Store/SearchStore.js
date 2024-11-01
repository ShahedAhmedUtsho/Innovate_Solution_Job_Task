


import { Store } from "pullstate";

export const SearchStore = new Store({
    journey_type: "OneWay",
    segment: [
   

    ],
    preferred_carrier: [],
    non_stop_flight: "any", // Options: any or non-stop, 1, 2, or 3
    baggage_option: "any", // Options: any or only-baggage
    booking_class: "Economy", // Options: Economy, Premium-Economy, Business, First-Class
    supplier_uid: "all", // Options: all
    partner_id: "", // Use `ftm_partner_id` or leave blank
    language: "en",
    short_ref: "12121212121" // Optional for stream search






})



// manage the journey type state and update the journey type state 


export const useJourneyType = () => {
    return SearchStore.useState(s => s.journey_type)
}
export const JourneyTypeUpdate = (journey_type) => {
    SearchStore.update(s => {
        s.journey_type = journey_type
    })
}













// preferred carrier state and update the preferred carrier state

export const usePreferredCarrier = () => {
    return SearchStore.useState(s => s.preferred_carrier)
}

export const PreferredCarrierUpdate = (preferred_carrier) => {
    SearchStore.update(s => {
        s.preferred_carrier.push = preferred_carrier
    })
}

// non stop flight state and update the non stop flight state
export const useNonStopFlight = () => {
    return SearchStore.useState(s => s.non_stop_flight)
}

export const NonStopFlightUpdate = (non_stop_flight) => {
    SearchStore.update(s => {
        s.non_stop_flight = non_stop_flight
    })
}


// baggage option state and update the baggage option state
export const useBaggageOption = () => {
    return SearchStore.useState(s => s.baggage_option)
}

export const BaggageOptionUpdate = (baggage_option) => {
    SearchStore.update(s => {
        s.baggage_option = baggage_option
    })
}


// booking class state and update the booking class state
export const useBookingClass = () => {
    return SearchStore.useState(s => s.booking_class)
}

export const BookingClassUpdate = (booking_class) => {
    SearchStore.update(s => {
        s.booking_class = booking_class
    })
}