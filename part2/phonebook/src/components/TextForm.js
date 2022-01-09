import React from 'react'
import TextInput from './TextInput'

const TextForm = ({ title, inputs, submit }) => {
    return (
      <div>
        <h2>{title}</h2>
        {inputs.map(
          ({ prompt, value, onChange }) => {
            return <TextInput key={prompt} prompt={prompt} value={value} onChange={onChange} />
          }
        )}
        <button type='submit' onClick={submit.onSubmit}>
          {submit.prompt}
        </button>
      </div>
    )
  }

export default TextForm