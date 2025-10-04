import React,{useState, useEffect} from 'react'

const NumberAnimation = ({num}) => {
  const [count, setCount]=useState(0);
  useEffect(()=>{
    if(count<=num)
    {
      const timer= setTimeout(()=>{
        setCount((prev)=>prev+1);
      },50)
      return ()=>clearTimeout(timer);
    }
  },[count])
  return (
    <div>
      {count}
    </div>
  )
}

export default NumberAnimation