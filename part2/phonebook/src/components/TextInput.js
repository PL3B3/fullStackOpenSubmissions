import React from 'react'

const TextInput = ({ prompt, value, onChange }) => {
    return (
      <div>
        {prompt}: <input value={value} onChange={onChange}/>
      </div>
    )
  }

export default TextInput