import React, {useState, useEffect} from "react";
import css from './Giphy.module.css';
import axios from 'axios';


export default function Giphy() {

    const[data, setData] = useState([])
    const[text, setText] = useState('')

    useEffect(() => {
        axios.get('https://api.giphy.com/v1/gifs/trending?api_key=1LaLYtzbwXej37HXcnWaaBTCwsr4Rz79&rating=g&limit=6')
        .then((res) => {
            setData(res.data.data)
        })     
    }, [])

    const handleInput = (e) => {
        setText(e)
    }

    const btnSubmit = () => {
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=1LaLYtzbwXej37HXcnWaaBTCwsr4Rz79&q=${text}&limit=6`)
        .then((res) => {
            console.log(res);
            setData(res.data.data)
        })
    }

    return (
        <div className={css.box}>
            <input onChange={(e) => handleInput(e.target.value)} className={css.inp} type={'text'} />
            <button onClick={() => btnSubmit()} className={css.btn}>Search</button>

            {data.map((v) => {
                return (
                    <img style={{width: 200, height: 150, margin: 10}} src={v.images.original.url} />
                )
            })}

        </div>
    )
}
