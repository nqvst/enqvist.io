import './App.css'
import Card from './Card'
import { useEffect, useState } from 'react'

import styled from 'styled-components'

const Main = styled.div`
  max-width: 600px;
  padding: 10px;
`

const Hero = styled.div`
  & h1 {
    font-size: 45px;

    & small {
      font-size: 16px;
      font-weight: normal;
    }
  }
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
        <Hero>
          <h1>
            Jack Enqvist | <small>freelance web developer</small>
          </h1>
        </Hero>
        {projects.map((p) => {
          return <Card key={p.title} {...p}></Card>
        })}
      </Main>
    </div>
  )
}

export default App
