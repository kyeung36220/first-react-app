import PropTypes from "prop-types"

function List({category = "Category", items = []}) {

    const categoryTitle = category

    const itemList = items;

    // fruits.sort((a,b) => a.name.localeCompare(b.name))
    // fruits.sort((a,b) => a.calories - b.calories)

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100)

    const listItems = itemList.map((item) => {
        return <li key={item.id}>{item.name}: <b>{item.calories}</b></li>
    })


    return(
        <>
            <h3 className="list-category">{categoryTitle}</h3>
            <ol className="list-items">{listItems}</ol>
        </>)
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number}))
}

export default List