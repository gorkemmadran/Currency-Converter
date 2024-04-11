import React, { useState } from 'react';
import axios from 'axios'
import { FaArrowCircleRight } from 'react-icons/fa';
const BASE_URL = 'https://api.freecurrencyapi.com/v1/latest'
const API_KEY = 'fca_live_PgCKGLKgz18GicHaBaAkTQoPpqD8hQVEyBteOEY4'

function Kur() {
  const [amount, setAmount] = useState( 1)
  const [currency, setCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('TRY')
  const [result, setResult] = useState(0)

  const exchange = async () =>{
    const responce = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${currency}`)
    setResult(amount * responce.data.data[toCurrency])
   
  //  const rate = responce.data.data.rates[toCurrency]
  //  setResult((amount * rate).toFixed(2))
   
  }

  return (
    <div className='current-div'>
      <div style={{width : "100%", height:"60px", display : "flex", alignItems:"center", justifyContent:"center", textAlign : "center", fontFamily : "arial", backgroundColor:"black", color : "white"}}>
        <h3 >DÖVİZ KURU UYGULAMASI</h3>
      </div>
      <div style={{paddingTop : "25px"}}>
      <input value={amount} onChange={(e) =>setAmount(e.target.value) } type='number' className='amount' />
      <select onChange={(e) => setCurrency(e.target.value)} className='from-currency-option'>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='TRY'>TRY</option>
      </select>

      <FaArrowCircleRight style={{fontSize : "27px", marginRight : "10px", marginBottom :"-10px"}}/>

      <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
      <option value='TRY'>TRY</option>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
      </select>
      <input value={result} type='number' className='result' readOnly />    
    </div>
      
      <button onClick={exchange} className='button'>Çevir</button>
      </div>
  );
}

export default Kur;
