import { useState } from "react"

export default function Counter(props) {
  const [counter, setCounter] = useState(props.initialValue)
  const add = () => setCounter(counter + 1)
  const reset = () => setCounter(props.initialValue)
  const substract = () => setCounter(counter - 1)

  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{counter}</h2>
      <button onClick={add}>+</button>
      <button onClick={reset}>reset</button>
      <button onClick={substract}>-</button>
    </div>
  )
}