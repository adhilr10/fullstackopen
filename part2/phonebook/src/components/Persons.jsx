import React from 'react'

export const Persons = ({showPerson}) => {
  return (
    <div>
        {showPerson.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  )
}
