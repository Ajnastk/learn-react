import { useRouteError } from "react-router-dom"
const Error = ()=>{

    const error = useRouteError()
    
    console.log(error);
    
    return (
        <div><h1>404 not found</h1>

        <h2>{error.status}</h2>
        </div>
    )
}

export default Error