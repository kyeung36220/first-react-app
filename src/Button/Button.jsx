import styles from "./Button.module.css"

function Button() {

    const handleClick = (e) => e.target.textContent = "Clicked"

    return(<button onClick = {(e) => handleClick(e)}className={styles.button}>Click me!</button>)
}


// function Button() {
    
//     const styles = {
//         backgroundColor: 'hsl(200, 100%, 50%)',
//         color: 'white',
//         padding: '10px 20px',
//         borderRadius: '5px',
//         border: 'none',
//         cursor: 'pointer',
//     }

//     return(<button style={styles}>Click me!</button>)
// }

export default Button