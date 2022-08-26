import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Test from './components/Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center bg-slate-700 text-slate-50">
      
        <Test />
      
    </div>
  )
}

export default App
