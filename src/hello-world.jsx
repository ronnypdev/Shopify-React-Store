import { useState } from 'react'

export default function HelloWorld() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      Counter <output>{count}</output>
    </button>
  )
}
