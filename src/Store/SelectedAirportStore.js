import { Store } from 'pullstate';


export const SelectedAirportStore = new Store({

    from_Search_text: "",
    to_Search_text: "",
    fromSearchAirports: [],
    toSearchAirports: [],
    selectedDepartureDate: new Date(),
    selectedReturnDate: new Date(),
    departure_airport_type: "AIRPORT",

    Departure: {
        code: 'DAC',
        airport_name: 'Hazrat Shahjalal International Airport',


        city_name: 'Dhaka',
        city_code: 'DAC',
        country_name: 'Bangladesh',
        search_contents: "DAC - Hazrat Shahjalal International Airport - Dhaka, Bangladesh",
    },


    Arrival: {
        code: 'CXB',
        airport_name: "Cox's Bazar Airport",
        city_name: "Cox's Bazar",
        city_code: 'CXB',
        country_name: 'Bangladesh',
        search_contents: "CXB - Cox's Bazar Airport - Cox's Bazar, Bangladesh",
    }



})

    ;


// manage the departure airport state and update the departure airport state

export const useDepartureAirport = () => {
    return SelectedAirportStore.useState(s => s.Departure)
}
export const DepartureAirportUpdate = (departure) => {
    SelectedAirportStore.update(s => {
        s.Departure = departure
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



// from_Search_text:"" ,
// to_Search_text : "",
// fromSearchAirports: [],
// toSearchAirports: [] , 
// selectedDepartureDate: null,
// selectedArrivalDate: null,


// manage the from_Search_text state and update the from_Search_text state 

export const useFromSearchText = () => {
    return SelectedAirportStore.useState(s => s.from_Search_text)
}

export const FromSearchTextUpdate = (from_Search_text) => {
    SelectedAirportStore.update(s => {
        s.from_Search_text = from_Search_text
    })
}

// manage the to_Search_text state and update the to_Search_text state 

export const useToSearchText = () => {
    return SelectedAirportStore.useState(s => s.to_Search_text)
}

export const ToSearchTextUpdate = (to_Search_text) => {
    SelectedAirportStore.update(s => {
        s.to_Search_text = to_Search_text
    })
}



// manage the fromSearchAirports state and update the fromSearchAirports state

export const useFromSearchAirports = () => {
    return SelectedAirportStore.useState(s => s.fromSearchAirports)
}

export const FromSearchAirportsUpdate = (fromSearchAirports) => {
    SelectedAirportStore.update(s => {
        s.fromSearchAirports = fromSearchAirports
    })
}


// manage the toSearchAirports state and update the toSearchAirports state

export const useToSearchAirports = () => {
    return SelectedAirportStore.useState(s => s.toSearchAirports)
}

export const ToSearchAirportsUpdate = (toSearchAirports) => {
    SelectedAirportStore.update(s => {
        s.toSearchAirports = toSearchAirports
    })
}


// manage the selectedDepartureDate state and update the selectedDepartureDate state

export const useSelectedDepartureDate = () => {
    return SelectedAirportStore.useState(s => s.selectedDepartureDate)
}

export const SelectedDepartureDateUpdate = (selectedDepartureDate) => {
    SelectedAirportStore.update(s => {
        s.selectedDepartureDate = selectedDepartureDate
    })
}

// manage the selectedArrivalDate state and update the selectedArrivalDate state        


export const useSelectedReturnDate = () => {
    return SelectedAirportStore.useState(s => s.selectedReturnDate)
}

export const SelectedReturnDateUpdate = (selectedReturnDate) => {
    SelectedAirportStore.update(s => {
        s.selectedReturnDate = selectedReturnDate
    })
}



// manage the departure airport type state and update the departure airport type state

export const useDepartureAirportType = () => {
    return SelectedAirportStore.useState(s => s.departure_airport_type)
}

export const DepartureAirportTypeUpdate = (departure_airport_type) => {
    SelectedAirportStore.update(s => {
        s.departure_airport_type = departure_airport_type
    })
}


