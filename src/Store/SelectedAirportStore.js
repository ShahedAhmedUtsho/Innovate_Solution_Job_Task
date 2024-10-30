import { Store } from 'pullstate';

export const SelectedAirportStore = new Store({

    departur: {
        code: '',
        airport_name: '',
        city_name: '',
        city_code: '',
        country_code: '',
        search_contents: "",
    },
    Arrival: {
        code: '',
        airport_name: '',
        city_name: '',
        city_code: '',
        country_code: '',
        search_contents: "",
    }



})

    ;


// manage the departure airport state and update the departure airport state

export const useDepartureAirport = () => {
    return SelectedAirportStore.useState(s => s.departure)
}
export const DepartureAirportUpdate = (departure) => {
    SelectedAirportStore.update(s => {
        s.departure = departure
    })
}

// manage the arrival airport state and update the arrival airport state

export const useArrivalAirport = () => {
    return SelectedAirportStore.useState(s => s.Arrival)
}

export const ArrivalAirportUpdate = (arrival) => {
    SelectedAirportStore.update(s => {
        s.Arrival = arrival
    })
}
