import { createContext, useState } from 'react';

// 1- CREAMOS EL CONTEXTO UTILIZANDO EL HOOK CREATE CONTEXT
// 2- CREAR EL COMPONENTE PROVIDER
// 3- RETORNAR NUESTRO CONTEXT CON UN .PROVIDER
// 4- PASAR CHILDREN COMO HIJO DE ITEMSCONTEXT.PROVIDER
// 5- IMPORTAR ITEMSPROVIDER Y ENVOLVER NUESTRA APLICACIÓN
// 6- UTILIZAR LA PROP VALUE PARA PASAR DATA ENTRE NUESTROS COMPONENTES
// 7- PARA RECUPERAR DATA DEL CONTEXTO: USAR USECONTEXT Y LLAMAR AL CONTEXTO EN EL COMPONENTE QUE SOLICITE LA DATA

export const ItemsContext = createContext(); 
//dos funciones => 
// 1- ser llamado en los componentes donde queremos recuperar data
// 2- ayudarnos a crear el componente ItemsContext.Provider

const ItemsInStock = [
    {id: 1, name: "MacBook Pro", price: 1800},
    {id: 2, name: "Lenovo Legion", price: 1250},
    {id: 3, name: "Asus", price: 700},
    {id: 4, name: "Dell Vostro", price: 500},
];

export const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState(ItemsInStock);

    const foo = () => {
        alert(`Cantidad de items en nuestro carrito: ${items.length}`)
    };

    return(
        <ItemsContext.Provider value={{ items, setItems, foo }}>
            {children}
        </ItemsContext.Provider>
    )
};