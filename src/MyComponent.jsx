import React, {useState} from "react"

function myComponent() {
    const [name, setName] = useState("Guest")
    const [age, setAge] = useState(0)
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () => {
        setName("Kenneth")
    }

    const incrementAge = () => {
        setAge(age + 1)
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed)
    }

    return (
        <div>
            <p> Name: {name} Age: {age} Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={updateName}>Set Name</button>
            <button onClick={incrementAge}>Increment Age</button>
            <button onClick={toggleEmployedStatus}>Toggle Employment</button>
        </div>
    )
}

export default myComponent