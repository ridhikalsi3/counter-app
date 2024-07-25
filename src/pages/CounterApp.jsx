import React, { useState } from 'react'
import Message from '../components/message'
import { Button } from '../components/button'



export const CounterApp = () => {
    //var count=0;
    const[count, setCount]=useState(0);
    const plus=()=>{
        //count++;
        setCount(count+1)
        console.log('plus',count);
    }
    const minus=()=>{
       // count--;
       setCount(count-1)
        console.log('minus',count);

}
   // Message({msg:"Counter App", x:10})
  return (
    <div className ='container'>
        <Message color="alert alert-success text-center" msg= "Counter App"/>
        <Message color="alert alert-info"msg= "Count value is" val={count}/>
        <Button fn ={plus} val="+" color ="btn btn-primary"/> &nbsp;
        <Button fn ={minus}val="-" color ="btn btn-danger"/>
    </div>
    
  )
}
