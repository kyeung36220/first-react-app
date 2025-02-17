import {useState} from "react"

function Counter() {
    
    let [count, setCount] = useState(0)

    const resetCount = () => {
        setCount(0)
    }

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }


    return(
        <>
            <div className="countNumber">{count}</div>
            <div className="buttonsContainer">
                <button onClick={decrement}>Decrease</button>
                <button onClick={resetCount}>Reset</button>
                <button onClick={increment}>Increase</button>
            </div>
        </>
    )
}

export default Counter