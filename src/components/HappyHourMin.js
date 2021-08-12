/**
 * This component will be a single Happy Hour's view inside the Happy
 * Hour List component. Not all details of the Happy Hour need to be
 * seen. However, once the happy hour gets clicked on, the the Full
 * Happy Hour component will be visible.
 */

import { FaMap } from "react-icons/all"
//TODO: Add a button icon that will pull up google maps directions for the Happy Hour Location.
//TODO: Incorporate the distance from the User Address to the Venue in this view.

//The 'special' object in the ({}) is a property tag used by the HTML Tag
const HappyHourMin = ({ special }) => {
    return (
        <div className='happyhour'>
            <h3>{special.venueName} <FaMap /></h3>
            <p>{special.venueAddress}</p>
        </div>
    )
}

export default HappyHourMin