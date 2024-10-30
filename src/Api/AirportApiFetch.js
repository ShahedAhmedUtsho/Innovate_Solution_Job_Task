

// store data in store if Exist in localstorage or fetch from api and store in localstorage and pullstate
// this step is to avoid fetching data from api every time the page is refreshed or visited 
// this will save time and reduce the number of api calls to the server
// this will also make the app faster and more responsive
// this will also make the app work offline
// this will also make the app work in slow network 
// localstorage can store up to 5mb so its okey to store on localstorage the data that is not sensitive

import { AirportStore } from "@/Store/airportStore";
import axios from "axios";




const AirportApiFetch = async () => {

    try {
        const res = await axios.get(import.meta.env.VITE_AIRPORT_API, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                apikey: import.meta.env.VITE_AIRPORT_API_KEY,
                secretecode: import.meta.env.VITE_AIRPORT_API_SECRETE_CODE
            }
        });

        const data = res.data;
        localStorage.setItem('airports', JSON.stringify(data));
        AirportStore.update(s => {
            s.airports = data
        })

    } catch (error) {
        console.log('error', error.message);
    }
}




export default AirportApiFetch