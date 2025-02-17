import {useState} from "react"

function Person() {
    const [person, setPerson] = useState({ name: "John", age: 100 });
    const [value, setValue] = useState("")
  
    const handleIncreaseAge = () => {
      const newPerson = { ...person, age: person.age + 1 };
      setPerson(newPerson);
    };
  
    return (
      <>
        <h1>{person.name}</h1>
        <h2>{person.age}</h2>
        <button onClick={handleIncreaseAge}>Increase age</button>
        <input type="text" value={value} onChange={(event) => setValue(event.target.value)}></input>
        <input></input>
      </>
    );
  }

export default Person