# Semana 4 Notas

## Comandos
Levantar servidor:

```cmd
npm run dev
```

## Counter Inicial
```js
import { useState } from "react"

export default function App() {
  const [counter, setCounter] = useState(5)

  const add = () => setCounter(counter + 1)
  const reset = () => setCounter(5)
  const substract = () => setCounter(counter - 1)

  return (
    <div>
      <h1>Contador</h1>
      <h2>{counter}</h2>
      <button onClick={add}>+</button>
      <button onClick={reset}>reset</button>
      <button onClick={substract}>-</button>
    </div>
  )
}
```

## Counter Optimizado
```js
import { useState } from "react"

export default function App() {
  const [counter, setCounter] = useState(5)

  const custom = (operation) => setCounter(counter + operation)

  return (
    <div>
      <h1>Contador</h1>
      <h2>{counter}</h2>
      <button onClick={()=>custom(1)}>+</button>
        <button onClick={()=>custom(-counter)}>reset</button>
        <button onClick={()=>custom(-1)}>-</button>
    </div>
  )
}
```

## Actividad Opcional

Dado el siguiente componente:
```js
export default function Entrance() {
    const [age, setAge] = useState(18)

    const givePermission = () => {
        if (age >= 18) {
            return "Puede Entrar"
        } else {
            return "No Puede Entrar"
        }
    }

    const handleAge = (event) => {
        const ageInNumber = Number(event.target.value)
        setAge(ageInNumber)
    }

    return (
        <div>
            <input type="number" onChange={handleAge} />
            <div>
                {givePermission()}
            </div>
        </div>
    )
}
```
* Agregue una tercera condición en el método givePermission para que cuando la edad sea 18 años, el mensaje retornado sea distinto a los que retorna para cuando age es mayor o menor a 18 años.
* Opcionalmente agregar mediante props, un límite de edad dinámico.