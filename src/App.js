import './App.css'
import Card from './Card'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components'

const Main = styled.div`
  max-width: 600px;
`

const Hero = styled.div`
  & h1 {
    font-size: 45px;
    margin-bottom: 10px;
  }
  /* border-bottom: 2px solid black; */
  margin-bottom: 20px;
`

const Socials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  & a {
    margin: 10px;
    font-size: 28px;
    padding: 0;
    color: #111;
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
      <Hero>
        <h1>Jack Enqvist</h1>
        freelance web developer
        <Socials>
          <a href={'https://github.com/nqvst'}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={'https://se.linkedin.com/in/nqvst'}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </Socials>
      </Hero>

      <Main>
        {projects.map((p) => {
          return <Card key={p.title} {...p}></Card>
        })}
      </Main>
    </div>
  )
}

export default App
