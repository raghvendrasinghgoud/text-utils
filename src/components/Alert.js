import React from 'react'

export default function Alert(prop) {
  return (
    prop.alert && 
      <div className={`alert alert-${(prop.mode==='dark')?'dark':'success'}`} role="alert">
        <strong>{prop.alert.stat}</strong>:{prop.alert.msg}
        </div>
    
  )
}
