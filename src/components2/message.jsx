import React from 'react'

export const message = (props) => {
  return (
    <h2 className={props.color}>{props.msg}</h2>
  )
}


export default message;