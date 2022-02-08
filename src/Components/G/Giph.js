import { GiphyFetch } from '@giphy/js-fetch-api'
import {useState} from 'react'
import css from './G.module.css'

const giphy = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY)

function Giph() {
  const [text, setText] = useState('')
  const [results, setResults] = useState([])
  const [err, setErr] = useState(false)

  const handleInput = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    if(text.length === 0) {
      
      //set error state to true
      setErr(true)
      return
    }

    console.log(text)

    const apiCall = async () => {
      const res = await giphy.animate(text, {limit: 20})
      console.log(res.data)
      setResults(res.data)
    }
    
    apiCall()
    setText('')
    setErr(false)

  }
  
  return (
    <div className={css.box}>
        <input onChange={handleInput} className={css.inp} type={'text'}></input>
        <button onClick={handleSubmit} className={css.btn}>Search</button>
    </div>
  );
}
export default Giph;