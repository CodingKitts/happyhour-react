import HappyHourMin from "./HappyHourMin";

const HappyHours = ({ specials }) => {
    return (
        <>
            {specials.map((happyHour) => (
                <HappyHourMin key={happyHour.happyHourId} special={happyHour}/>
            ))}
        </>
    )
}

export default HappyHours