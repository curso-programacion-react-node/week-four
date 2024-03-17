import { useEffect, useState } from "react"

export default function Home() {
    const [tasks, setTasks] = useState([])

    const getTasks = async () => {
        const response = await fetch("https://api-tasks.vercel.app/api/tasks")
        const data = await response.json()
        setTasks(data)
    }

    const createTask = async () => {
        const response = await fetch("https://api-tasks.vercel.app/api/task", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                responsable: "Javier",
                description: "Esta es una tarea de Javier"
            })
        })
        const data = await response.json()
        await getTasks()
        console.log(data)
    }

    useEffect(() => {
        getTasks()
    }, [])

    return <div>
        <h1>Home desde un componente</h1>
        <button onClick={() => createTask()}>Crear tarea</button>
        {
            tasks.map((task) => {
                return <div key={task.id}>
                    <div>Responsable: {task.responsable}</div>
                    <div>Descripción: {task.description}</div>
                    <hr />
                </div>
            })
        }
    </div>
}