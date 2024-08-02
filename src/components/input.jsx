import React, { useState } from 'react'
import { Button,Input } from 'antd'


function Todoinput(props) {
    const [inputText,setInputText] = useState('');
  return (
    <>
    <div className="input-container">
    <Input placeholder="Type a Todo..."
    value={inputText}
    className='input'
    onChange={e=>{
        setInputText(e.target.value);
    }}
     />
   
   <Button type="dashed" className='button' onClick={()=>{
        props.addList(inputText)
        setInputText("");
    }}>   
   Add Todo</Button>
  </div>
  </>
  )
}

export default Todoinput