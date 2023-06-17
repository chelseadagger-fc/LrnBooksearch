import {useState} from 'react';
import styled from 'styled-components';

const List = styled.ul`
list-style: none;
padding: 0;
`;

interface ListItemProps {
    active: boolean;
}

const ListItem = styled.li<ListItemProps>`
padding: 5px 0;
background: ${props => props.active ? 'lightblue' : 'none'}
`;

interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItem: (item:string) => void;
}



export default function ListGroup({items, heading, onSelectItem}: ListGroupProps) {

    // hook
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <>
            <h1>List of {heading}: </h1>
            {items.length === 0 && <p>No item found.</p>}
            <List className="list-group">
                {items.map((item, index) => (
                    <ListItem
                        active={index === selectedIndex}
                        key={item}
                        onClick={() => { setSelectedIndex(index); onSelectItem(item);}}
                    >
                        {item}
                    </ListItem>
                ))}
            </List>
        </>
    );
}
