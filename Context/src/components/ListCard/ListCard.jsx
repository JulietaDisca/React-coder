import {useContext} from 'react';
import { ItemsContext } from '../../context/ItemsContext';
import ItemCard from '../ItemCard/ItemCard';

const ListCard = () => {
    const { items } = useContext(ItemsContext);

    console.log(items);

    return (
        <div style={{ padding: "25px"}}>
            <h1>Items Card: </h1>
            {items.map((item) => {
                return <ItemCard key={item.id} item={item} />
            })}
        </div>
    )
}

export default ListCard