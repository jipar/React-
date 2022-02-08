import React, { useState } from "react";

function Time() {

    let date = new Date()

    const[time, setTime] = useState(date.toLocaleTimeString())

    setInterval(() => {
        date = new Date()
        setTime(date.toLocaleTimeString())
    }, 500);

    return(
        <>
            <h1>
                {time}
            </h1>
        </>
    )
}

export default Time;