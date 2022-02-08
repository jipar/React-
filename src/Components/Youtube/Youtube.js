import React, { useState, useEffect } from 'react'
import css from './Youtube.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';

export default function Youtube() {

    

    const[data, setData] = useState([])
    const[text, setText] = useState('')

    useEffect(() => {
        axios.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=6&key=AIzaSyCfg6JLVT9wbtjcGpMcXmhmEjLhj87aC1U')
        .then((res) => {
            setData(res.data.items)
            console.log(res)
        })
    }, [])

    const handleInput = (e) => {
        setText(e)
    }

    const btnSearch = () => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${text}&key=AIzaSyCfg6JLVT9wbtjcGpMcXmhmEjLhj87aC1U`)
        .then((res) => {
            console.log(res)
            setData(res.data.items)
        })
    }

    return (
        <div className={css.body}>
            <div className={css.container}>
                <div className={css.search}>

                    <InputGroup onChange={(e) => handleInput(e.target.value)} className="mb-3">
                        <FormControl
                        placeholder="Search"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        />
                        <Button onClick={() => btnSearch()}  variant="outline-secondary" id="button-addon2">
                        Click
                        </Button>
                    </InputGroup>
                    <div className={'row'}>
                        {data.map((v) => {
                            return (
                                
                                    <div className={'col-4'}>
                                        <iframe className={css.video} 
                                        src={`https://www.youtube.com/embed/${typeof v.id === 'string' ? v.id : v.id.videoId}`}> </iframe>
                                    </div>
                                
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
                
}

