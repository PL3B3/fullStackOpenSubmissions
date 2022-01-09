import React from 'react'
import TextInput from './TextInput'

const Filter = ({ value, onChange }) => {
    return (
      <div>
        <h2>Filter</h2>
        <form>
          <TextInput prompt='Name contains' value={value} onChange={onChange} />
        </form>
      </div>
    )
  }

export default Filter