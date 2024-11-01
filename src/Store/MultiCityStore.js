import { Store } from "pullstate"

const init = {
    lastAssignedId: 2, // i Assigned id for giving segment it id uniqe , if any item delete then not conflict
    MultiSearchText: "",
    multiSearchAirPorts: [],

    Segment: [
        {
            id: 1,

            departure_airport_type: "",
            departure_airport: {},
            arrival_airport_type: "",
            arrival_airport: {},
            departure_date: new Date()



        },
        {
            id: 2,

            departure_airport_type: "",
            departure_airport: {},
            arrival_airport_type: "",
            arrival_airport: {},
            departure_date: new Date()



        },


    ]

}



export const MultiCityStore = new Store(init)


// get the segment state and update the segment state

export const useMultiSegment = () => {

    return MultiCityStore.useState(s => s.Segment)
}

export const updateMultiSegment = (id, key, value) => {



    MultiCityStore.update(s => {
        const index = s.Segment.findIndex((item) => item.id === id);
        if (index === -1) return;

        const newSegment = [...s.Segment]
        const UpdatedItem = { ...newSegment[index], [key]: value };

        newSegment[index] = UpdatedItem


        s.Segment = newSegment
    })

}





// delete a item from the segment state 

export const DeleteSegmentItem = (id) => {


    MultiCityStore.update(s => {
        const index = s.Segment.findIndex((item) => item.id === id);
        if (index === -1) return; // Exit if item not found
        if (s.Segment.length <= 2) return; // Prevent deletion if fewer than 2 items remain


        // Filter out the item by ID
        const FilteredSegment = s.Segment.filter(item => item.id !== id)
        // finally update the segment state 
        s.Segment = FilteredSegment





    })

};


//  add a item on segment 


export const addSegmentItem = () => {
    MultiCityStore.update(s => {
        s.lastAssignedId++

        const newSegment = [
            ...s.Segment,
            {
                id: s.lastAssignedId,
                departure_airport_type: "",
                departure_airport: "",
                arrival_airport_type: "",
                arrival_airport: "",
                departure_date: new Date()



            }
        ]
        s.Segment = newSegment

    })

}
// // manage the multi_Search_text state and update the multiSearch text state 

export const useMultiSearchText = () => {
    return MultiCityStore.useState(s => s.MultiSearchText)
}

export const multiSearchTextUpdate = (MultiSearchText) => {

    MultiCityStore.update(s => {
        s.MultiSearchText = MultiSearchText
    })
}


// // manage the multiSearchAirPorts state and update the multiSearchAirPorts state

export const useMultiSearchAirports = () => {
    return MultiCityStore.useState(s => s.multiSearchAirPorts)
}

export const multiSearchAirPortsUpdate = (newSearchAirports) => {

    MultiCityStore.update(s => {
        s.multiSearchAirPorts = [...newSearchAirports]
    })
}