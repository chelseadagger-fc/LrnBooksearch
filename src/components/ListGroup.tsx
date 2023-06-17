import {useState} from 'react';

// {items: [], heading: string}
// shape, or interface, of an object

interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItem: (item:string) => void;
}



export default function ListGroup({items, heading, onSelectItem}: ListGroupProps) {


    // hook
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>List of {heading}: </h1>
            {items.length === 0 && <p>No item found.</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        key={item}
                        onClick={() => { setSelectedIndex(index); onSelectItem(item);}}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}
