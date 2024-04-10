import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';

function Kur() {
  return (
    <div className='current-div'>
      <div style={{width : "100%", height:"60px", display : "flex", alignItems:"center", justifyContent:"center", textAlign : "center", fontFamily : "arial", backgroundColor:"black", color : "white"}}>
        <h3 >DÖVİZ KURU UYGULAMASI</h3>
      </div>

      <div style={{marginTop : "25px"}}>
      <input type='number' className='amount' />
      <select className='from-currency-option'>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='TL'>TL</option>
      </select>

      <FaArrowCircleRight style={{fontSize : "27px", marginRight : "10px", marginBottom :"-10px"}}/>

      <select className='to-currency-option'>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='TL'>TL</option>
      </select>
      <input type='number' className='result' />
      
    </div>
      
      <button className='button'>Çevir</button>
      </div>
  );
}

export default Kur;
