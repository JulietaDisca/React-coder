const styles = {
    container: {
        backgroundColor: "red",
        color: "black",
        padding: 15,
        width: "400px",
        heigth: "300px",
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "4px",
        border: "2px solid black",
        margin: "20px",
    }
}

const NotEnabled = () => {
    return (
        <div style={styles.container}>
            <h2>Not Enabled</h2>
        </div>
    )
}

export default NotEnabled