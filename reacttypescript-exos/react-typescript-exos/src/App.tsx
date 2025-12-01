import { useState } from 'react'
import Clicker from './Clicker'
import Chrono from './Chrono'
import ColorClick from './ColorClick'
import ColorChange from './ColorChange'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Clicker/>
      <Chrono/>
      <ColorClick/>
      <ColorChange/>
    </>
  )
}

export default App
