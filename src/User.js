import React from 'react'

const func = (a,b)  => {return a+b}
const obj={
    1: "qwerty",
    2: +123
}
const obj2 = JSON.stringify(obj)
 const arr = ['I', ' am', ' array' ]

function User({str, num, bool, object}){ 
    return (<div>
        <h1>{str}</h1>
        <h1>{num}</h1>
        <h1>{bool.toString()}</h1>
        <h1>{func(2,4)}</h1>
        <h1>{obj2}</h1>
        <h1>{object.zxcv}</h1>
        <h1>{arr}</h1>
    </div>)}


export default User;