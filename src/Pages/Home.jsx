import { useEffect, useState } from "react"

export default function Home() {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState(null)

    const [responsable, setResponsable] = useState("")
    const [description, setDescription] = useState("")

    const [error, setError] = useState("")

    const getTasks = async () => {
        try {
            const response = await fetch("https://api-tasks.vercel.app/api/tasks")
            const data = await response.json()
            setTasks(data)
        } catch (error) {
            console.log(error)
        }
    }

    const getTaskById = async (id) => {
        const response = await fetch(`https://api-tasks.vercel.app/api/task/${id}`)
        const data = await response.json()
        setTask(data)
    }

    const resetForm = () => {
        setResponsable("")
        setDescription("")
    }

    const validateForm = () => {
        if(responsable === "") setError("Responsable no puede estar vacío") 
        else if(description === "") setError("Descripción no puede estar vacío") 
        else setError("")
    }

    const createTask = async () => {
        const response = await fetch("https://api-tasks.vercel.app/api/task", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                responsable: responsable,
                description: description
            })
        })
        const data = await response.json()
        await getTasks()
        resetForm()
        console.log(data)
    }

    const updateTaskById = async (id) => {
        const response = await fetch(`https://api-tasks.vercel.app/api/task/${id}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                responsable: "Modificado",
                description: "Esta es una tarea de modificada"
            })
        })
        const data = await response.json()
        await getTasks()
        console.log(data)
    }

    const deleteTaskById = async (id) => {
        const response = await fetch(`https://api-tasks.vercel.app/api/task/${id}`, {
            method: "DELETE"
        })
        const data = await response.json()
        console.log(data)
        await getTasks()
    }

    useEffect(() => {
        getTasks()
    }, [])

    useEffect(() => {
        console.log("responsable", responsable)
        validateForm()
    }, [responsable])

    useEffect(() => {
        console.log("description", description)
        validateForm()
    }, [description])

    useEffect(() => {
        console.log("error", error)
    }, [error])

    const handleSubmit = (event) => {
        //event.preventDefault()
        if(error === "") createTask()
        else alert(error)
    }

    return <div>
        <h1>Home desde un componente</h1>
        {/* Formulario con form */}
        {/* <form onSubmit={(event) => handleSubmit(event)}>
            <h3>Formulario de creación</h3>
            <input
                type="text"
                value={responsable}
                onChange={(event) => setResponsable(event.target.value)}
                placeholder="Responsable"
            />
            <input
                type="text"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Descripción de la tarea"
            />
            <button type="submit">Crear tarea</button>
        </form> */}
        {/* Formulario con div */}
        <div>
            <h3>Formulario de creación</h3>
            <input
                type="text"
                value={responsable}
                onChange={(event) => setResponsable(event.target.value)}
                placeholder="Responsable"
            />
            <input
                type="text"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Descripción de la tarea"
            />
            <button onClick={() => handleSubmit()}>Crear tarea</button>
        </div>
        {/* Tarea selecionada */}
        {/* <div>
            <h2>Usuario seleccionado</h2>
            <div>{task?.id}</div>
            <div>{task?.responsable}</div>
            <div>{task?.description}</div>
        </div> */}
        <hr />
        {
            tasks.map((task) => {
                return <div key={task.id}>
                    <div>ID: {task.id}</div>
                    <div>Responsable: {task.responsable}</div>
                    <div>Descripción: {task.description}</div>
                    <button onClick={() => getTaskById(task.id)}>Seleccionar</button>
                    <button onClick={() => updateTaskById(task.id)}>Actualizar</button>
                    <button onClick={() => deleteTaskById(task.id)}>Borrar</button>
                    <hr />
                </div>
            })
        }
    </div>
}