import './App.css'
import Card from './Card'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Main = styled.div`
  max-width: 600px;
`

function App() {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    if (!projects.length) {
      fetch('data/projects.json')
        .then((res) => res.json())
        .then((res) => {
          setProjects(res)
        })
    }
  }, [projects])

  return (
    <div className="App">
      <Main>
        {projects.map((p) => {
          return <Card {...p}></Card>
        })}
      </Main>
    </div>
  )
}

export default App
