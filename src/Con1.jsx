import {useState} from 'react'
const Con1 =()=>{
    const [n,an]=useState(0)
    const sumar=()=>an(n+1)
    const restar=()=>an(n-1)
    return (
        <div>
            <h2>Contador: {n} </h2>            
            <button onClick={sumar}>Sumar +1 </button> 
            <button onClick={restar}>Restar -1 </button> 
        </div>
    )
}
export default Con1

