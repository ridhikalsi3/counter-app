import React, { useState } from 'react'
import Message from '../components2/message'
import { Button } from '../components2/button'

export const CounterApp2 = () => {
  const [event, setEvent] = useState('');
  const [convertedText, setConvertedText] = useState('');
  const [charCount, setCharCount] = useState(0);
    const inputString=(val)=>{
      setEvent(val.target.value)  
    }
    const convertToUppercase = () => {
      setConvertedText(event.toUpperCase());
    };
  
    const convertToLowercase = () => {
      setConvertedText(event.toLowerCase());
    };
  
    const clearText = () => {
      setEvent('');
      setConvertedText('');
      setCharCount(0);
    }
  
  
   // Message({msg:"Counter App", x:10})
  return (
    <div className ='container'>
        <Message color="alert alert-success text-center" msg= "NAME"/>
        <Message color="alert alert-info"msg= "Your Name"/>
        <>
        <input type="text" value={event} onChange={inputString}/>
        </>
        <br/>
        <br/>
        <button onClick={convertToUppercase}>Convert to Uppercase</button>
        <button onClick={convertToLowercase}>Convert to Lowercase</button>
        <button onClick={clearText}>Clear Text</button> 
    </div>
    
  )
}
