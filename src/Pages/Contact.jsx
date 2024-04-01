import { useEffect, useState } from "react"

export default function Contact () {
    const [apiResponse, setApiResponse] = useState("")

    const callMyApi = async () => {
        const response = await fetch("http://localhost:3001")
        const data = await response.json()
        setApiResponse(data)
    }

    useEffect(()=>{
        callMyApi()
    }, [])

    return <div>
        <h1>Contacto desde un componente</h1>
        <h3>La api reponde: {apiResponse}</h3>
    </div>
}