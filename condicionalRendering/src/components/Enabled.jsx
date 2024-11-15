const styles = {
    container: {
        backgroundColor: "green",
        color: "yellow",
        padding: 15,
        width: "400px",
        heigth: "300px",
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "4px",
        border: "2px solid yellow",
        margin: "20px",
    }
}

const Enabled = () => {
    return (
        <div style={styles.container}>
            <h2>Enabled</h2>
        </div>
    )
}

export default Enabled