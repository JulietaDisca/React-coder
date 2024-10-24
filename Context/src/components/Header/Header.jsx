import './Header.css'

import { useContext } from 'react';
import { ItemsContext } from '../../context/ItemsContext';

const Header = () => {
    const { items, setItems, foo } = useContext(ItemsContext);

    const newItemsStock = [
        {id: 1, name: "MacBook Pro", price: 1800},
        {id: 2, name: "Lenovo Legion", price: 1250},
    ];

    return (
        <div className='Header'>
            <h1>E-commerce</h1>
            <p>Stock: {items.length} </p>
            <button onClick={() => setItems(newItemsStock)} >Change State</button>
            <button onClick={() => setItems([])} >Clear Basquet</button>
            <button onClick={() => foo()}>Alert Quantity Items</button>
        </div>
    )
}

export default Header;