import {useState} from 'react';

export default function ListGroup() {

    const items = ['Casablanca','London','Istbanbul','Milan','Buenos Aires','Tokyo','Nairobi'];
    // hook
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>List of cities: </h1>
            {items.length === 0 && <p>No item found.</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'} // "list-group-item active"
                        key={item}
                        onClick={() => { setSelectedIndex(index)}}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}
