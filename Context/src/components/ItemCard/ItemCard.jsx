import React from 'react'

const styles = {
    card: {
        backgroundColor: "yellow",
        border: "4px solid black",
        marginTop: "25px",
        marginBottom: "20px",
        padding: "15px",
        width: "400px",
        borderRadius: "4px",
        textAlign: "center",
    }
}

const ItemCard = ({ item }) => {
    return (
        <div style={styles.card}>
            <ul>
                <p style={{fontWeight: "bold"}}>
                    Name: <span style={{fontWeight: "normal"}}> {item.name} </span>
                </p>
                <p style={{fontWeight: "bold"}}>
                    Price: <span style={{fontWeight: "normal"}}> $ {item.price} </span>
                </p>
            </ul>
        </div>
    )
}

export default ItemCard;