import React, { useState, useEffect } from "react";
import css from './Battery.module.css';


function Battery() {

    const[count, setCount] = useState(0)

    let color = 'red';

    (count >= 2 ? (count === 3 ? color = 'green' : color = 'yellow') : color = 'red')
    
    let Interval;
    useEffect(() => {
        Interval = setInterval(() => {
            setCount(count => count === 3 ? setCount(0) : setCount(count + 1))
        }, 500);
        return(() => clearInterval(Interval)) 
    })
    return(
        <div className={css.block}>
            <div className={css.box}>
                <div className={css.body}>
                    <div style={{backgroundColor: color}} className={count >= 1 ? css.bl : ''}></div>
                    <div style={{backgroundColor: color}} className={count >= 2 ? css.bl : ''}></div>
                    <div style={{backgroundColor: color}} className={count >= 3 ? css.bl : ''}></div>
                </div>
                <div className={css.slice}></div>
            </div>
        </div>
    )
}

export default Battery;