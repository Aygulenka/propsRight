
import React from 'react'
import User from './User'

const objNotJson = { zxcv: "OObject"}
export default function App(){
  return (
  <div className= "App">
    <User str='string' num={+456} bool={true}  obj object={objNotJson}/>
    <h1> Hello CodeSandox</h1>
    <h2> Start editing to see some magic Happen!</h2>
  </div>
  )
};
