


import { Store } from "pullstate";

export const SearchStore = new Store({
    journey_type: "",
    segment: [
        {
            departure_airport_type: "AIRPORT",
            departure_airport: "DAC",
            arrival_airport_type: "AIRPORT",
            arrival_airport: "BKK",
            departure_date: "2024-11-29"
        },


    ],
    travelers_adult: 1,
    travelers_child: 0,
    travelers_child_age: [], // Age range: 2 -12
    travelers_infants: 0,
    travelers_infants_age: [], // Age range: below 2
    preferred_carrier: [],
    non_stop_flight: "any", // Options: any or non-stop, 1, 2, or 3
    baggage_option: "any", // Options: any or only-baggage
    booking_class: "Economy", // Options: Economy, Premium-Economy, Business, First-Class
    supplier_uid: "all", // Options: all
    partner_id: "", // Use `ftm_partner_id` or leave blank
    language: "en",
    short_ref: "12121212121" // Optional for stream search






})





export const JourneyTypeUpdate = (journey_type) => {
    SearchStore.update(s => {
        s.journey_type = journey_type
    })
}


export const useJourneyType = () => {
    return SearchStore.useState(s => s.journey_type)
}