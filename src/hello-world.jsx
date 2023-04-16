import { useState } from 'react'

export default function HelloWorld() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      Counterz <output>{count}</output>
    </button>
  )
}
