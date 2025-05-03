import React from 'react'

const PersonForm = ({addPerson,nameHandleChange,newName,numberHandleChange,newNumber}) => {
  return (
    <form onSubmit={addPerson}>
          <div>
            name: <input onChange={nameHandleChange} value={newName} />
            <div>
              number: <input onChange={numberHandleChange} value={newNumber} />
            </div>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
  )
}

export default PersonForm