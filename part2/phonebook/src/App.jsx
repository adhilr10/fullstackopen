import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import { Persons } from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const addPerson = (e) => {
    e.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    }
    const nameObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    setPersons([...persons, nameObj]);
    setNewName("");
    setNewNumber("");
  };

  const nameHandleChange = (e) => {
    setNewName(e.target.value);
  };
  const numberHandleChange = (e) => {
    setNewNumber(e.target.value);
  };
  const showPerson = filter
    ? persons.filter((person) => person.name.toLowerCase().includes(filter))
    : persons;
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setFilter={setFilter} />
      <h1>add a new</h1>
      <PersonForm
        addPerson={addPerson}
        nameHandleChange={nameHandleChange}
        newName={newName}
        newNumber={newNumber}
        numberHandleChange={numberHandleChange}
      />
      <h2>Numbers</h2>
      <Persons showPerson={showPerson} />
    </div>
  );
};

export default App;
