import { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import { Persons } from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

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
