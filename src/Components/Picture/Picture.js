import React, {useState} from "react";

function Picture() {
    const[active, setActive] = useState(false)

    let img = 'https://cdn.pixabay.com/photo/2021/10/06/08/34/seagull-6685075_960_720.jpg'

   return(
       <div>
        <button onClick={() => setActive(!active)} >Click</button>
        {active ? <img src={img}/> : null}
       </div>
   )
}

export default Picture;