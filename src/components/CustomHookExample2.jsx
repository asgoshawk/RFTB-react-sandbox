import { useRef, useEffect } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

const CustomHookExample2 = () => {
    const [task, setTask] = useLocalStorage('task', '')
    const [tasks, setTasks] = useLocalStorage('tasks', [])
    let render = useRef(1)

    useEffect(() => {
        render.current = render.current + 1
    })

    const onSubmit = (e) => {
        e.preventDefault()
        const taskObj = {
            task,
            completed: false,
            date: String(new Date().getMilliseconds())
        }

        setTasks([...tasks, taskObj])
    }

    const onClear = (e) => {
        e.preventDefault()
        localStorage.clear()
        setTask('')
        setTasks([])
    }

    return (
        <>
            <h1>Rendered: {render.current}</h1>
            <form className="w-50" onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Task</label>
                    <input type="text" name="" id="" className="form-control" value={task} onChange={(e) => setTask(e.target.value)} />
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </div>
            </form>

            <hr />
            <button type="" className="btn btn-warning" onClick={onClear}>Clear All</button>
            {tasks.map((task) => (<h3 key={task.date}>{task.task} at {task.date}</h3>))}
        </>
    )
}

export default CustomHookExample2