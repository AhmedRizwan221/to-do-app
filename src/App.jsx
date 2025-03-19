import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import ToDoApp from './components/todo.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   <ToDoApp />
  )
}

export default App
