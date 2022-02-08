import React from "react";
import QRCode from "react-qr-code";

function Code() {
    return(
        <> 
            <QRCode value='https://web.telegram.org/z/#-1487313340' 
                    bgColor='blue'
                    fgColor='red'
                    size={500}
            />
        </>
    )
}

export default Code;