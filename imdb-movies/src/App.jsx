import { useState } from 'react'
import './App.css'
import { Nav } from './assets/components/nav'
import { MoviesList } from './assets/components/list'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <MoviesList/>
    </>
  )
}

export default App
