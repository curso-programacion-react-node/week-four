import { useEffect } from "react";

export default function Home () {

    const getUsers = async () => {
        const response = await fetch("https://run.mocky.io/v3/41d1f823-da3a-45d6-8421-0c52d54dc4be");
        const data = await response.json()
        console.log(data)
    }

    useEffect(()=> {
        getUsers()
    }, [])

    return <div>
        <h1>Home desde un componente</h1>
    </div>
}