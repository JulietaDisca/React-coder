import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 3000);
    });

    return (
        <div>
            <h1>Error Page</h1>
            <p>404</p>
            <p>Ustéd será redireccionado en 3 segundos a la home page...</p>
        </div>
    )
}

export default ErrorPage;