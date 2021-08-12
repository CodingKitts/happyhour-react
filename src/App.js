import { useState} from "react";

import HappyHours from "./components/HappyHours";
import SearchHappyHours from "./components/SearchHappyHours";

function App() {
    const [happyHours, setHappyHours] = useState([
        {
            happyHourId: 1,
            venueName: 'Restaurant 1',
            venueAddress: '123 Address St.',
            venueWebsite: 'Restaurant 1 Website',
            venueDescription: 'Restaurant 1 Description',
            venueLat: 1.0,
            venueLng: 2.0,
            monSpecial: 'Monday Special',
            tueSpecial: 'Tuesday Special',
            wedSpecial: 'Wednesday Special',
            thurSpecial: 'Thursday Special',
            friSpecial: 'Friday Special',
            satSpecial: 'Saturday Special',
            sunSpecial: 'Sunday Special'
        },
        {
            happyHourId: 2,
            venueName: 'Restaurant 2',
            venueAddress: '321 Address St.',
            venueWebsite: 'Restaurant 2 Website',
            venueDescription: 'Restaurant 2 Description',
            venueLat: 2.0,
            venueLng: 1.0,
            monSpecial: '1/2 Price Drinks',
            tueSpecial: '1/2 Price Apps',
            wedSpecial: '$1 Draft Night',
            thurSpecial: '20% Food',
            friSpecial: '$3 Well Shots',
            satSpecial: '',
            sunSpecial: ''
        }
    ])

    return (
        <div className="App">
            <HappyHours specials={happyHours}/>

            <SearchHappyHours />
        </div>
    );
}

export default App;
